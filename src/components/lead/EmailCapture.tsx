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
    <aside className="bg-cream border border-muted rounded-xl p-6">
      <p className="text-xs tracking-widest uppercase text-navy/50 mb-2">Free Guide</p>
      <h3 className="font-serif text-2xl font-bold text-navy mb-2">SME Employment Law Survival Guide</h3>
      <p className="text-sm text-navy/70 mb-5">Get a practical checklist to reduce preventable tribunal risk.</p>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block text-sm">
          <span className="text-navy/70">Name</span>
          <input name="name" required className="w-full mt-1 border border-muted rounded px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="text-navy/70">Email</span>
          <input type="email" name="email" required className="w-full mt-1 border border-muted rounded px-3 py-2" />
        </label>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="w-full bg-gold text-navy font-semibold rounded py-2.5 disabled:opacity-70" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Send me the guide"}
        </button>
        {status === "success" && <p className="text-green-700 text-sm">Thanks — we&apos;ll send it shortly.</p>}
        {status === "error" && <p className="text-red-700 text-sm">Couldn&apos;t subscribe right now. Please try again.</p>}
      </form>
    </aside>
  );
}
