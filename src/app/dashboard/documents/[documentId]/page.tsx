import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { TEMPLATE_MAP } from "@/data/document-templates";

interface Props {
  params: Promise<{ documentId: string }>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function DocumentViewPage({ params }: Props) {
  const { documentId } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: doc } = await supabase
    .from("generated_documents")
    .select("*")
    .eq("id", documentId)
    .eq("user_id", user.id)
    .single();

  if (!doc) notFound();

  const template = TEMPLATE_MAP.get(doc.template_slug);
  const title = doc.display_name ?? template?.name ?? doc.template_slug;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link
        href="/dashboard/my-documents"
        className="text-sm text-[#6b7280] hover:text-[#1a2e4a] mb-6 inline-flex items-center gap-1 transition-colors"
      >
        ← Back to My Documents
      </Link>

      <h1 className="font-serif text-3xl text-[#1a2e4a] tracking-tight mb-1 mt-4">{title}</h1>

      <div className="flex items-center gap-3 mt-2 mb-8 flex-wrap">
        {template && (
          <span className="text-sm text-[#6b7280]">{template.name}</span>
        )}
        <span className="text-sm text-[#9ca3af]">Created {formatDate(doc.created_at)}</span>
        {doc.updated_at !== doc.created_at && (
          <span className="text-sm text-[#9ca3af]">· Updated {formatDate(doc.updated_at)}</span>
        )}
      </div>

      <div className="rounded-xl border border-[#d8dce2] bg-white p-6">
        {doc.form_data && typeof doc.form_data === "object" && !Array.isArray(doc.form_data) ? (
          <dl className="space-y-4">
            {Object.entries(doc.form_data as Record<string, unknown>).map(([key, val]) =>
              val ? (
                <div key={key}>
                  <dt className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-0.5">
                    {key.replace(/_/g, " ")}
                  </dt>
                  <dd className="text-sm text-[#1a2e4a]">{String(val)}</dd>
                </div>
              ) : null,
            )}
          </dl>
        ) : (
          <p className="text-sm text-[#9ca3af]">No data recorded for this document.</p>
        )}
      </div>
    </div>
  );
}
