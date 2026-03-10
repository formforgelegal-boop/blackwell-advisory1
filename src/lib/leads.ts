import { headers } from "next/headers";

export type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  source: string;
  serviceInterest?: string;
  riskScore?: number;
  answers?: Record<string, string>;
  submittedAt: string;
};

export async function withLeadMetadata(payload: Omit<LeadPayload, "submittedAt">) {
  const requestHeaders = await headers();

  return {
    ...payload,
    submittedAt: new Date().toISOString(),
    userAgent: requestHeaders.get("user-agent") ?? "unknown",
  };
}

export async function sendToCrm(payload: Record<string, unknown>) {
  const webhook = process.env.CRM_WEBHOOK_URL;

  if (!webhook) {
    return { sent: false };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("CRM webhook failed");
  }

  return { sent: true };
}
