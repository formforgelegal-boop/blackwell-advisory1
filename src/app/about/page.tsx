import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Built for the Gap in the Market",
  description:
    "Blackwell Advisory exists to identify employment contract risk for UK SMEs at a fixed cost, with a clear guarantee, in two weeks.",
  openGraph: {
    title: "About | Blackwell Advisory",
    description:
      "Blackwell Advisory exists to identify employment contract risk for UK SMEs at a fixed cost, with a clear guarantee, in two weeks.",
    url: "https://www.blackwelladvisory.co.uk/about",
  },
};

const values = [
  {
    title: "Fixed Fees Only",
    description:
      "No hourly billing. No scope creep. You know the cost before we start.",
  },
  {
    title: "Direct and Specific",
    description:
      "We score your risk. We identify your exposure. We don't speak in generalities.",
  },
  {
    title: "Delivered in 14 Days",
    description:
      "A defined process with a defined output. Not an open-ended engagement.",
  },
  {
    title: "Guaranteed",
    description:
      "If we don't find a meaningful issue, you don't pay. No other provider in this market makes that offer.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-navy pt-16">
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
            Built for the Gap in the Market.
          </h1>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6 space-y-6">
          <p className="text-navy text-lg md:text-xl leading-relaxed">
            Most SMEs carry real employment contract risk they&apos;re
            completely unaware of. Law firms are too expensive and too slow for
            a focused review. Retainer providers bundle everything together and
            obscure the cost.
          </p>
          <p className="text-navy/70 text-lg leading-relaxed">
            Blackwell Advisory exists to do one thing well: identify employment
            contract risk for UK SMEs, at a fixed cost, with a clear
            guarantee, in two weeks.
          </p>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            How We Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-muted">
                <div className="w-10 h-1 bg-gold mb-5 rounded-full" />
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-navy/65 leading-relaxed text-sm">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
            Commercial Risk Analysis. Not Legal Jargon.
          </h2>
          <div className="space-y-6">
            <p className="text-navy/70 text-lg leading-relaxed">
              Our review is structured around a standardised 12-point scoring
              framework. Every clause is assessed across legal vulnerability,
              financial exposure, and likelihood of trigger. You receive a
              written report with plain English findings, a risk score, and a
              prioritised action list.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              We are advisors, not litigators. Where solicitor involvement is
              needed, we tell you directly and refer accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Ready to Find Your Gaps?
          </h2>
          <p className="text-white/65 text-xl mb-10">
            15 minutes. Free. No obligation.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-navy font-semibold px-10 py-4 rounded text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
