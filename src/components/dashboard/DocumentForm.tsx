"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  templateSlug: string;
  templateName: string;
}

export default function DocumentForm({ templateSlug, templateName }: Props) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const res = await fetch("/api/documents/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateSlug,
          displayName: displayName.trim() || undefined,
          formData: { notes },
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error ?? "Something went wrong.");
        return;
      }

      router.push("/dashboard/my-documents");
      router.refresh();
    } catch {
      setError("Network error — please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#1a2e4a] mb-1.5">
          Document label <span className="text-[#9ca3af] font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder={`e.g. 42 Church Lane – ${templateName}`}
          className="w-full rounded-md border border-[#d8dce2] px-3 py-2.5 text-sm text-[#1a2e4a] placeholder:text-[#9ca3af] focus:border-[#1a2e4a] focus:outline-none focus:ring-1 focus:ring-[#1a2e4a]"
        />
        <p className="mt-1 text-xs text-[#9ca3af]">
          Helps distinguish multiple {templateName} documents in My Documents.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1a2e4a] mb-1.5">
          Notes <span className="text-[#9ca3af] font-normal">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Any relevant details for this document…"
          className="w-full rounded-md border border-[#d8dce2] px-3 py-2.5 text-sm text-[#1a2e4a] placeholder:text-[#9ca3af] focus:border-[#1a2e4a] focus:outline-none focus:ring-1 focus:ring-[#1a2e4a] resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 rounded-md border border-red-200 bg-red-50 px-3 py-2">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center rounded-md bg-[#1a2e4a] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#c9a84c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? "Saving…" : "Save document"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-[#6b7280] hover:text-[#1a2e4a] transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
