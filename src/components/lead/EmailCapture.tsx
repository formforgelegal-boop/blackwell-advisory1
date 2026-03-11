"use client";

import { FormEvent, useState } from "react";

export default function EmailCapture({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      source,
      leadMagnet: "SME Employment Law Survival Guide",
      website: String(formData.get("website") || ""),
    };

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? "success" : "error");
  };

  return (
    <aside className="border border-line bg-stone p-6">
      <p className="mb-2 text-xs uppercase tracking-[0.14em] text-ink/55">Briefing note</p>
      <h3 className="mb-2 font-serif text-2xl text-ink">SME Employment Law Survival Guide</h3>
      <p className="mb-5 text-sm text-ink/70">A concise checklist to reduce preventable tribunal risk.</p>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block text-sm">
          <span className="text-ink/70">Name</span>
          <input name="name" required className="mt-1 w-full border border-line bg-white px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="text-ink/70">Email</span>
          <input type="email" name="email" required className="mt-1 w-full border border-line bg-white px-3 py-2" />
        </label>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="w-full bg-accent py-2.5 text-sm text-white disabled:opacity-70" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Send me the guide"}
        </button>
        {status === "success" && <p className="text-sm text-green-700">Thanks — we&apos;ll send it shortly.</p>}
        {status === "error" && <p className="text-sm text-red-700">Couldn&apos;t subscribe right now. Please try again.</p>}
      </form>
    </aside>
  );
}
