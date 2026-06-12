import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireTemplateAccess } from "@/lib/entitlements";
import { TEMPLATE_MAP } from "@/data/document-templates";
import DocumentForm from "@/components/dashboard/DocumentForm";

interface Props {
  params: Promise<{ templateSlug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { templateSlug } = await params;
  const template = TEMPLATE_MAP.get(templateSlug);
  return { title: template ? `Create ${template.name}` : "Create Document" };
}

export default async function NewDocumentPage({ params }: Props) {
  const { templateSlug } = await params;

  const template = TEMPLATE_MAP.get(templateSlug);
  if (!template) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/dashboard/documents/new/${templateSlug}`);

  const { allowed } = await requireTemplateAccess(user.id, templateSlug);
  if (!allowed) {
    redirect("/dashboard/my-package");
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link
        href="/dashboard/my-package"
        className="text-sm text-[#6b7280] hover:text-[#1a2e4a] mb-6 inline-flex items-center gap-1 transition-colors"
      >
        ← Back to My Package
      </Link>

      <h1 className="font-serif text-3xl text-[#1a2e4a] tracking-tight mb-1 mt-4">
        {template.name}
      </h1>
      <p className="text-sm text-[#6b7280] mb-8">{template.description}</p>

      <DocumentForm templateSlug={templateSlug} templateName={template.name} />
    </div>
  );
}
