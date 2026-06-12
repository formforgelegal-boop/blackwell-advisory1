"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginForm({ next }: { next?: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  async function signInWithPassword(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(next ?? "/dashboard/my-package");
    router.refresh();
  }

  async function sendMagicLink() {
    if (!email) { setError("Enter your email first."); return; }
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${next ?? "/dashboard/my-package"}` },
    });

    if (error) { setError(error.message); setLoading(false); return; }
    setMagicLinkSent(true);
    setLoading(false);
  }

  if (magicLinkSent) {
    return (
      <div className="rounded-xl border border-[#d8dce2] bg-white p-6 text-center">
        <p className="text-sm text-[#1a2e4a] font-medium mb-1">Check your inbox</p>
        <p className="text-sm text-[#6b7280]">We sent a sign-in link to {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={signInWithPassword} className="rounded-xl border border-[#d8dce2] bg-white p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#1a2e4a] mb-1.5">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-[#d8dce2] px-3 py-2.5 text-sm focus:border-[#1a2e4a] focus:outline-none focus:ring-1 focus:ring-[#1a2e4a]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1a2e4a] mb-1.5">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-[#d8dce2] px-3 py-2.5 text-sm focus:border-[#1a2e4a] focus:outline-none focus:ring-1 focus:ring-[#1a2e4a]"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[#1a2e4a] py-2.5 text-sm font-medium text-white hover:bg-[#c9a84c] disabled:opacity-50 transition-colors"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>

      <button
        type="button"
        onClick={sendMagicLink}
        disabled={loading}
        className="w-full rounded-md border border-[#d8dce2] py-2.5 text-sm text-[#6b7280] hover:text-[#1a2e4a] hover:border-[#1a2e4a] disabled:opacity-50 transition-colors"
      >
        Send magic link instead
      </button>
    </form>
  );
}
