import { NextResponse } from "next/server";
import { z } from "zod";
import { sendToCrm, withLeadMetadata } from "@/lib/leads";

const schema = z.object({
  name: z.string().trim().min(1),
  email: z.email(),
  phone: z.string().trim().optional(),
  company: z.string().trim().min(1),
  source: z.string().trim().min(1),
  riskScore: z.number().min(0),
  riskBand: z.string().trim().min(1),
  answers: z.record(z.string(), z.string()),
  website: z.string().optional(),
  completionMs: z.number().min(0).optional(),
});

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xwvnzory";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (parsed.data.website || (parsed.data.completionMs ?? 0) < 1500) {
    return NextResponse.json({ ok: true });
  }

  try {
    const lead = await withLeadMetadata({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      phone: parsed.data.phone,
      source: parsed.data.source,
      serviceInterest: "Risk calculator",
      riskScore: parsed.data.riskScore,
      answers: { ...parsed.data.answers, riskBand: parsed.data.riskBand },
    });

    await sendToCrm(lead);

    // Formspree fallback — sends an email notification even if CRM webhook is not configured
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          phone: parsed.data.phone ?? "",
          riskScore: parsed.data.riskScore,
          riskBand: parsed.data.riskBand,
          source: parsed.data.source,
        }),
        cache: "no-store",
      });
    } catch {
      // Non-fatal — CRM already received the lead
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not submit assessment." }, { status: 500 });
  }
}
