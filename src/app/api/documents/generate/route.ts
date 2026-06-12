import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireTemplateAccess } from "@/lib/entitlements";
import type { Json } from "@/types/database";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { templateSlug, formData, displayName } = body as {
    templateSlug: string;
    formData: Record<string, unknown>;
    displayName?: string;
  };

  if (!templateSlug) {
    return NextResponse.json({ error: "templateSlug is required" }, { status: 400 });
  }

  // Server-side entitlement enforcement
  const { allowed } = await requireTemplateAccess(user.id, templateSlug);
  if (!allowed) {
    return NextResponse.json(
      { error: "You do not have access to this document template." },
      { status: 403 },
    );
  }

  const { data, error } = await supabase
    .from("generated_documents")
    .insert({
      user_id: user.id,
      template_slug: templateSlug,
      display_name: displayName ?? null,
      form_data: formData as Json,
    })
    .select()
    .single();

  if (error) {
    console.error("[documents/generate] insert error:", error);
    return NextResponse.json({ error: "Failed to save document" }, { status: 500 });
  }

  return NextResponse.json({ document: data }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, templateSlug, formData, displayName } = body as {
    id: string;
    templateSlug: string;
    formData: Record<string, unknown>;
    displayName?: string;
  };

  // Server-side entitlement enforcement on regeneration too
  const { allowed } = await requireTemplateAccess(user.id, templateSlug);
  if (!allowed) {
    return NextResponse.json(
      { error: "You do not have access to this document template." },
      { status: 403 },
    );
  }

  const { data, error } = await supabase
    .from("generated_documents")
    .update({ form_data: formData as Json, display_name: displayName ?? null, updated_at: new Date().toISOString() })
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) {
    console.error("[documents/generate] update error:", error);
    return NextResponse.json({ error: "Failed to update document" }, { status: 500 });
  }

  return NextResponse.json({ document: data });
}
