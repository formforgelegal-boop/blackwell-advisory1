import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getEntitlements } from "@/lib/entitlements";
import { TEMPLATE_MAP } from "@/data/document-templates";
import type { Package, PackageDocument, GeneratedDocument } from "@/types/database";
import PackageGroup from "@/components/dashboard/PackageGroup";

export const metadata = { title: "My Package" };

export default async function MyPackagePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/dashboard/my-package");

  const entitlements = await getEntitlements(user.id);

  // Fetch all active packages
  const { data: allPackages } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true)
    .order("name");

  // Fetch all package_documents
  const { data: allPkgDocs } = await supabase
    .from("package_documents")
    .select("*")
    .order("sort_order");

  // Fetch this user's generated documents
  const { data: generatedDocs } = await supabase
    .from("generated_documents")
    .select("*")
    .eq("user_id", user.id);

  const packages: Package[] = allPackages ?? [];
  const pkgDocs: PackageDocument[] = allPkgDocs ?? [];
  const myDocs: GeneratedDocument[] = generatedDocs ?? [];

  // Group package_documents by package_id
  const docsByPackage = new Map<string, PackageDocument[]>();
  for (const pd of pkgDocs) {
    const list = docsByPackage.get(pd.package_id) ?? [];
    list.push(pd);
    docsByPackage.set(pd.package_id, list);
  }

  // Group generated documents by template_slug
  const generatedBySlug = new Map<string, GeneratedDocument[]>();
  for (const d of myDocs) {
    const list = generatedBySlug.get(d.template_slug) ?? [];
    list.push(d);
    generatedBySlug.set(d.template_slug, list);
  }

  const ownedPackages = packages.filter((p) =>
    entitlements.hasAllAccess || entitlements.ownedPackageIds.includes(p.id),
  );
  const unownedPackages = entitlements.hasAllAccess
    ? []
    : packages.filter((p) => !entitlements.ownedPackageIds.includes(p.id));

  const hasAnyEntitlement =
    entitlements.hasAllAccess || entitlements.ownedPackageIds.length > 0;

  if (!hasAnyEntitlement) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <p className="font-serif text-2xl text-[#1a2e4a] mb-3">No active package</p>
        <p className="text-sm text-[#6b7280] mb-6">
          You don&apos;t currently have an active package or subscription.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-md bg-[#1a2e4a] px-5 py-2.5 text-sm text-white hover:bg-[#1a2e4a]/90 transition-colors"
        >
          Browse Documents
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* ── Header ──────────────────────────────────────────── */}
      {entitlements.hasAllAccess ? (
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl text-[#1a2e4a] tracking-tight">
              Bracton Pro — Full Library Access
            </h1>
            <p className="mt-1 text-sm text-[#6b7280]">
              Your subscription unlocks every template as soon as it is added to the library.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-[#c9a84c] px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider shrink-0 ml-4 mt-1">
            Pro
          </span>
        </div>
      ) : (
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-[#1a2e4a] tracking-tight">
            {ownedPackages.map((p) => p.name).join(" & ")}
          </h1>
          <p className="mt-1 text-sm text-[#6b7280]">
            Documents included in your package. Use the Create button to start building.
          </p>
        </div>
      )}

      {/* ── Owned package groups ─────────────────────────────── */}
      <div className="space-y-8">
        {ownedPackages.map((pkg) => {
          const docs = docsByPackage.get(pkg.id) ?? [];
          return (
            <PackageGroup
              key={pkg.id}
              pkg={pkg}
              documents={docs}
              generatedBySlug={generatedBySlug}
              templateMap={TEMPLATE_MAP}
              locked={false}
              defaultOpen
            />
          );
        })}
      </div>

      {/* ── Unowned packages (collapsed, locked) ────────────── */}
      {unownedPackages.length > 0 && (
        <div className="mt-10">
          <p className="text-xs font-medium text-[#6b7280] uppercase tracking-widest mb-4">
            Not in your package
          </p>
          <div className="space-y-4">
            {unownedPackages.map((pkg) => {
              const docs = docsByPackage.get(pkg.id) ?? [];
              return (
                <PackageGroup
                  key={pkg.id}
                  pkg={pkg}
                  documents={docs}
                  generatedBySlug={generatedBySlug}
                  templateMap={TEMPLATE_MAP}
                  locked
                  defaultOpen={false}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
