import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employment Contract Risk Review for UK SMEs",
  description:
    "Your employment contracts have gaps. Blackwell Advisory finds them before a tribunal does. £1,500 fixed fee. 14-day delivery. Guaranteed or you don't pay.",
  openGraph: {
    title: "Blackwell Advisory | Employment Contract Risk Review for UK SMEs",
    description:
      "Your employment contracts have gaps. £1,500 fixed fee. 14-day delivery. Guaranteed or you don't pay.",
    url: "https://www.blackwelladvisory.co.uk",
  },
};

const reviewAreas = [
  "Employment Status & Definitions",
  "Probation & Termination Clauses",
  "Notice Periods",
  "Disciplinary & Grievance Alignment",
  "Holiday & Pay Calculations",
  "Overtime & Commission Language",
  "Flexible Working & Variation Clauses",
  "Restrictive Covenants",
  "Confidentiality & IP",
  "Redundancy & Layoff Provisions",
  "Contractor & IR35 Exposure",
  "Policy Incorporation Language",
];

const personas = [
  {
    role: "HR Directors & HR Managers",
    description:
      "Decision-makers on contracts and dispute resolution who need specialist review without building internal headcount.",
  },
  {
    role: "Operations Directors",
    description:
      "Responsible for workforce compliance and cost control — exposed to risks they often don't see until it's too late.",
  },
  {
    role: "CEOs & MDs of SMEs (50–500 staff)",
    description:
      "Direct budget authority. Often unaware of the contract risk sitting in their business until a claim arrives.",
  },
  {
    role: "In-house Legal Counsel",
    description:
      "Specialist employment contract support without the cost of a retained law firm.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-navy pt-16">
        <div className="bg-gold/20 border-b border-gold/30 py-3">
          <p className="text-center text-gold text-sm font-medium px-6">
            The Employment Rights Act 2025 has introduced the biggest changes
            to UK employment law in a generation. Is your business protected?
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
            Your Employment Contracts Have Gaps.{" "}
            <span className="text-gold">
              We Find Them Before a Tribunal Does.
            </span>
          </h1>
          <p className="text-white/80 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Fixed fee. 14 days. Guaranteed — or you don&apos;t pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-navy font-semibold px-8 py-4 rounded text-lg hover:opacity-90 transition-opacity"
            >
              Book a Free Discovery Call
            </Link>
            <a
              href="#how-it-works"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── Credibility Strip ─────────────────────────────────── */}
      <section className="bg-cream border-y border-muted py-4">
        <p className="text-center text-navy/50 text-xs tracking-widest uppercase font-medium px-4">
          Fixed Fee &nbsp;·&nbsp; 14-Day Delivery &nbsp;·&nbsp; 12-Point Risk
          Review &nbsp;·&nbsp; Guaranteed or You Don&apos;t Pay &nbsp;·&nbsp;
          England &amp; Wales
        </p>
      </section>

      {/* ── Problem / Stakes ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-8 rounded-lg border border-muted">
              <div className="mb-5 text-gold">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-3">
                You Can&apos;t See the Gap
              </h2>
              <p className="text-navy/65 leading-relaxed">
                Most employment contracts look fine until something goes wrong.
                Outdated clauses, missing provisions, and ambiguous wording are
                invisible until a claim lands.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-lg border border-muted">
              <div className="mb-5 text-gold">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.5 9.5c.3-.8 1.1-1.5 2.5-1.5s2.5.9 2.5 2c0 1.8-2.5 2-2.5 3.5M12 17h.01" />
                </svg>
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-3">
                The Cost Is Not Theoretical
              </h2>
              <p className="text-navy/65 leading-relaxed">
                A single unfair dismissal claim costs £10,000–£30,000 to
                defend, even when you win. Most SMEs are one wording gap away
                from a bill they never saw coming.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-lg border border-muted">
              <div className="mb-5 text-gold">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-3">
                Prevention Takes 14 Days
              </h2>
              <p className="text-navy/65 leading-relaxed">
                We review your contracts, score every risk area, and deliver a
                written report with a clear action plan. Fixed fee. No
                surprises. Done in two weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantee ─────────────────────────────────────────── */}
      <section className="bg-gold py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            If We Don&apos;t Find a Meaningful Risk, You Don&apos;t Pay.
          </h2>
          <p className="text-navy/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Every engagement is backed by a simple guarantee: if our review
            doesn&apos;t identify and fix at least one material issue in your
            contracts, the fee is waived. No questions asked.
          </p>
          <p className="text-navy/55 text-sm mb-10">
            No competitor in this market offers this. We do.
          </p>
          <Link
            href="/services"
            className="bg-navy text-white font-semibold px-8 py-4 rounded text-lg hover:opacity-90 transition-opacity inline-block"
          >
            See What&apos;s Included
          </Link>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section id="how-it-works" className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="font-serif text-6xl font-bold text-gold mb-5 leading-none">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Discovery Call
              </h3>
              <p className="text-sm text-gold font-semibold uppercase tracking-widest mb-4">
                Free · 15 mins
              </p>
              <p className="text-navy/65 leading-relaxed">
                We establish whether a risk review makes sense for your
                business. If it doesn&apos;t, we&apos;ll tell you.
              </p>
            </div>
            <div>
              <div className="font-serif text-6xl font-bold text-gold mb-5 leading-none">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Risk Review
              </h3>
              <p className="text-sm text-gold font-semibold uppercase tracking-widest mb-4">
                £1,500 fixed fee
              </p>
              <p className="text-navy/65 leading-relaxed">
                We review up to 3 employment contracts across 12 risk
                categories and deliver a written report within 14 business
                days.
              </p>
            </div>
            <div>
              <div className="font-serif text-6xl font-bold text-gold mb-5 leading-none">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                Action Plan
              </h3>
              <p className="text-sm text-gold font-semibold uppercase tracking-widest mb-4">
                Clear next steps
              </p>
              <p className="text-navy/65 leading-relaxed">
                You receive a priority action list, risk scores, and referral
                guidance where solicitor input is needed. No open-ended
                commitments.
              </p>
            </div>
          </div>
          <p className="text-center text-navy/45 text-sm mt-14">
            £1,500 + VAT. Fixed. No hourly billing. No retainer required.
          </p>
        </div>
      </section>

      {/* ── 12 Areas ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
            12 Areas. Every Contract.
          </h2>
          <p className="text-navy/55 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Our review covers every material risk area — not a template
            checklist, but a scored assessment of your actual exposure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reviewAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-lg border border-muted hover:border-gold/40 transition-colors"
              >
                <span className="font-serif text-2xl font-bold text-gold w-8 shrink-0 leading-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-navy font-medium text-sm pt-1 leading-snug">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ───────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Who This Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {personas.map((p, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg border border-muted"
              >
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {p.role}
                </h3>
                <p className="text-navy/65 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────── */}
      {/* Developer note: replace these placeholder cards with real client testimonials before launch */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-navy text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We'd been using the same contract template for six years. Blackwell found four material gaps in the first review — including a restrictive covenant that would have been unenforceable. Worth every penny of the fixed fee.",
                name: "Sarah M.",
                title: "HR Director",
                company: "Midlands-based logistics firm, 180 staff",
              },
              {
                quote:
                  "I was sceptical about paying £1,500 for a contract review when we already had a solicitor on retainer. The report came back with issues our solicitor had never flagged. We've since switched how we handle employment matters entirely.",
                name: "James T.",
                title: "Managing Director",
                company: "Professional services SME, 65 staff",
              },
              {
                quote:
                  "The 14-day turnaround was what sold it. We had a new hire starting and needed clarity fast. The report was clear, the risk scores made sense, and the action list told us exactly what to fix first.",
                name: "Rachel O.",
                title: "Operations Director",
                company: "Tech scale-up, 120 staff",
              },
            ].map((t, i) => (
              <div key={i} className="border-l-4 border-gold pl-6 py-2">
                <p className="font-serif text-lg text-navy/70 italic mb-5 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-navy">
                  — {t.name}, {t.title}
                </p>
                <p className="text-sm text-navy/45">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="bg-navy py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Find Out Where Your Exposure Sits.
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
