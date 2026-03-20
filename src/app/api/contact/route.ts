import { NextResponse } from "next/server";
import { z } from "zod";
import { sendToCrm, withLeadMetadata } from "@/lib/leads";

const schema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  company: z.string().trim().min(1),
  email: z.email(),
  phone: z.string().trim().min(1),
  employees: z.string().trim().min(1),
  writtenContracts: z.string().trim().min(1),
  lastReviewed: z.string().trim().min(1),
  tribunalClaims: z.string().trim().min(1),
  whyNow: z.string().trim().optional().or(z.literal("")),
  preferredContact: z.string().trim().min(1),
  howHeard: z.string().trim().optional().or(z.literal("")),
  website: z.string().optional(),
});

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xwvnzory";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const lead = await withLeadMetadata({
      name: `${parsed.data.firstName} ${parsed.data.lastName}`,
      email: parsed.data.email,
      company: parsed.data.company,
      phone: parsed.data.phone,
      source: "contact-form",
      serviceInterest: "Employment contract risk review",
      answers: {
        employees: parsed.data.employees,
        writtenContracts: parsed.data.writtenContracts,
        lastReviewed: parsed.data.lastReviewed,
        tribunalClaims: parsed.data.tribunalClaims,
        preferredContact: parsed.data.preferredContact,
        whyNow: parsed.data.whyNow ?? "",
        howHeard: parsed.data.howHeard ?? "",
      },
    });

    await sendToCrm(lead);

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "We couldn't submit your form right now. Please email reach@blackwelladvisory.co.uk." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't submit your form right now. Please email reach@blackwelladvisory.co.uk." },
      { status: 500 }
    );
  }
}
