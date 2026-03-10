import { NextResponse } from "next/server";
import { z } from "zod";
import { sendToCrm, withLeadMetadata } from "@/lib/leads";

const schema = z.object({
  name: z.string().trim().min(1),
  email: z.email(),
  source: z.string().trim().min(1),
  leadMagnet: z.string().trim().min(1),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid subscription details." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const lead = await withLeadMetadata({
      name: parsed.data.name,
      email: parsed.data.email,
      source: parsed.data.source,
      serviceInterest: parsed.data.leadMagnet,
    });

    await sendToCrm({ ...lead, type: "email-capture" });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not subscribe right now." }, { status: 500 });
  }
}
