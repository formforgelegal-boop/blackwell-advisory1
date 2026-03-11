import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Blackwell Advisory helps UK SMEs prevent employment disputes through practical risk-focused advisory support.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line pt-28 pb-24">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <h1 className="font-serif text-5xl text-ink md:text-6xl">An independent advisory firm focused on employment risk.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">We help UK SME leaders make better workforce decisions with clear, preventative and commercially grounded advisory work.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[900px] space-y-6 px-6 text-ink/75">
          <h2 className="font-serif text-4xl text-ink">About the Founder</h2>
          <p>This section currently contains placeholder founder copy and should be replaced with final approved biography details before launch.</p>
          <p>Blackwell Advisory was built to close a market gap: SMEs need specialist employment support that is faster and clearer than traditional law-firm workflows.</p>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-20">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-6 md:grid-cols-3">
          {["Practical employment advisory focus", "Designed for UK SMEs and owner-managed teams", "Preventative, risk-based approach before disputes escalate"].map((value) => (
            <div key={value} className="border border-line bg-white p-6"><h3 className="text-sm text-ink">{value}</h3></div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-serif text-4xl text-ink">Need a clear view of current exposure?</h2>
          <Link href="/contact" className="mt-6 inline-block bg-accent px-8 py-3 text-sm text-white">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  );
}
