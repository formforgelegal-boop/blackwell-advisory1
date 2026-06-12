import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { TEMPLATE_MAP } from "@/data/document-templates";
import type { GeneratedDocument, PackageDocument, Package } from "@/types/database";

export const metadata = { title: "My Documents" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });
}

export default async function MyDocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ template?: string }>;
}) {
  const { template: filterSlug } = await searchParams;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/dashboard/my-documents");

  // Fetch user's generated documents newest-first
  let query = supabase
    .from("generated_documents")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (filterSlug) {
    query = query.eq("template_slug", filterSlug);
  }

  const { data: docs } = await query;

  // Fetch package membership so we can show the package label on each card
  const { data: allPkgDocs } = await supabase
    .from("package_documents")
    .select("package_id, template_slug");

  const { data: allPackages } = await supabase
    .from("packages")
    .select("id, name");

  const packageById = new Map<string, Package>((allPackages ?? []).map((p) => [p.id, p as Package]));
  const slugToPackageName = new Map<string, string>();
  for (const pd of (allPkgDocs ?? []) as PackageDocument[]) {
    const pkg = packageById.get(pd.package_id);
    if (pkg) slugToPackageName.set(pd.template_slug, pkg.name);
  }

  const documents: GeneratedDocument[] = docs ?? [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-[#1a2e4a] tracking-tight">My Documents</h1>
          {filterSlug && (
            <p className="mt-1 text-sm text-[#6b7280]">
              Filtering by:{" "}
              <span className="font-medium text-[#1a2e4a]">
                {TEMPLATE_MAP.get(filterSlug)?.name ?? filterSlug}
              </span>{" "}
              <Link href="/dashboard/my-documents" className="underline underline-offset-2 hover:text-[#c9a84c]">
                Clear
              </Link>
            </p>
          )}
        </div>
        <Link
          href="/dashboard/my-package"
          className="inline-flex items-center rounded-md border border-[#1a2e4a] px-4 py-2 text-sm text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors"
        >
          + New document
        </Link>
      </div>

      {/* ── Empty state ──────────────────────────────────────── */}
      {documents.length === 0 && (
        <div className="rounded-xl border border-[#d8dce2] bg-white px-6 py-12 text-center">
          <p className="text-sm text-[#6b7280]">No documents yet.</p>
          <Link
            href="/dashboard/my-package"
            className="mt-4 inline-flex items-center text-sm text-[#1a2e4a] underline underline-offset-2 hover:text-[#c9a84c]"
          >
            Go to My Package to create your first document →
          </Link>
        </div>
      )}

      {/* ── Document cards ───────────────────────────────────── */}
      {documents.length > 0 && (
        <ul className="space-y-3">
          {documents.map((doc) => {
            const template = TEMPLATE_MAP.get(doc.template_slug);
            const templateName = template?.name ?? doc.template_slug;
            const packageName = slugToPackageName.get(doc.template_slug);

            return (
              <li
                key={doc.id}
                className="rounded-xl border border-[#d8dce2] bg-white px-5 py-4 flex items-start gap-4"
              >
                <div className="flex-1 min-w-0">
                  {/* Primary: human-readable template name */}
                  <p className="font-medium text-[#1a2e4a] text-sm leading-snug">
                    {doc.display_name ?? templateName}
                  </p>

                  {/* Secondary: slug in muted text */}
                  {doc.display_name && (
                    <p className="text-xs text-[#9ca3af] mt-0.5">{templateName}</p>
                  )}
                  {!doc.display_name && doc.template_slug !== templateName && (
                    <p className="text-xs text-[#9ca3af] mt-0.5">{doc.template_slug}</p>
                  )}

                  {/* Meta row: package label + date */}
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    {packageName && (
                      <span className="inline-flex items-center rounded-full bg-[#1a2e4a]/8 px-2 py-0.5 text-[11px] font-medium text-[#1a2e4a]">
                        {packageName}
                      </span>
                    )}
                    <span className="text-xs text-[#6b7280]">
                      Created {formatDate(doc.created_at)}
                    </span>
                    {doc.updated_at !== doc.created_at && (
                      <span className="text-xs text-[#6b7280]">
                        · Updated {formatDate(doc.updated_at)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <Link
                  href={`/dashboard/documents/${doc.id}`}
                  className="shrink-0 text-xs text-[#1a2e4a] underline underline-offset-2 hover:text-[#c9a84c] transition-colors"
                >
                  Open
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
