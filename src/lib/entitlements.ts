import { createClient } from "@/lib/supabase/server";
import { DOCUMENT_TEMPLATES } from "@/data/document-templates";

export interface EntitlementResult {
  hasAllAccess: boolean;
  ownedPackageIds: string[];
  accessibleTemplateSlugs: Set<string>;
}

/**
 * Resolves what a user is entitled to generate.
 * Called server-side only — uses the anon client (RLS-scoped to the authenticated user).
 */
export async function getEntitlements(userId: string): Promise<EntitlementResult> {
  const supabase = await createClient();

  const now = new Date().toISOString();

  // Fetch all non-expired entitlements for this user
  const { data: rows, error } = await supabase
    .from("entitlements")
    .select("scope, package_id, expires_at")
    .eq("user_id", userId)
    .or(`expires_at.is.null,expires_at.gt.${now}`);

  if (error) {
    console.error("[entitlements] fetch error:", error);
    return { hasAllAccess: false, ownedPackageIds: [], accessibleTemplateSlugs: new Set() };
  }

  const hasAllAccess = (rows ?? []).some((r) => r.scope === "all");

  const ownedPackageIds = (rows ?? [])
    .filter((r) => r.scope === "package" && r.package_id)
    .map((r) => r.package_id as string);

  let accessibleTemplateSlugs: Set<string>;

  if (hasAllAccess) {
    accessibleTemplateSlugs = new Set(DOCUMENT_TEMPLATES.map((t) => t.slug));
  } else if (ownedPackageIds.length === 0) {
    accessibleTemplateSlugs = new Set();
  } else {
    // Resolve package_documents for owned packages
    const { data: docs, error: docsError } = await supabase
      .from("package_documents")
      .select("template_slug")
      .in("package_id", ownedPackageIds);

    if (docsError) {
      console.error("[entitlements] package_documents error:", docsError);
      accessibleTemplateSlugs = new Set();
    } else {
      accessibleTemplateSlugs = new Set((docs ?? []).map((d) => d.template_slug));
    }
  }

  return { hasAllAccess, ownedPackageIds, accessibleTemplateSlugs };
}

/**
 * Server-side guard for generation API routes.
 * Returns 403 response if the user is not entitled to generate this template.
 */
export async function requireTemplateAccess(
  userId: string,
  templateSlug: string,
): Promise<{ allowed: boolean }> {
  const { accessibleTemplateSlugs } = await getEntitlements(userId);
  return { allowed: accessibleTemplateSlugs.has(templateSlug) };
}
