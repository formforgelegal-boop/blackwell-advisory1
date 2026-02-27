import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Employment Contract Risk Review",
  description:
    "One service. Done properly. £1,500 fixed-fee employment contract risk review — scoped, priced, and guaranteed. 14-day delivery for UK SMEs.",
  openGraph: {
    title: "Services | Blackwell Advisory",
    description:
      "One service. Done properly. £1,500 fixed-fee employment contract risk review — scoped, priced, and guaranteed.",
    url: "https://www.blackwelladvisory.co.uk/services",
  },
};

const included = [
  "Review of up to 3 employment contracts",
  "Written risk report (8–15 pages)",
  "Risk scoring across 12 categories",
  "Priority action list",
  "60-minute review call",
  "Solicitor referral guidance where required",
  "Backed by our no-find, no-fee guarantee",
];

const reviewAreas = [
  {
    title: "Employment Status & Definitions",
    description:
      "Correct categorisation of workers, employees, and contractors to prevent misclassification claims.",
  },
  {
    title: "Probation & Termination Clauses",
    description:
      "Validity of probationary periods and dismissal procedures under current law.",
  },
  {
    title: "Notice Periods",
    description:
      "Contractual vs. statutory minimums and enforceability of payment in lieu provisions.",
  },
  {
    title: "Disciplinary & Grievance Alignment",
    description:
      "Whether contracts align with your policies and ACAS code requirements.",
  },
  {
    title: "Holiday & Pay Calculations",
    description:
      "Compliance with Working Time Regulations and correct rolled-up holiday pay treatment.",
  },
  {
    title: "Overtime & Commission Language",
    description:
      "Enforceability of variable pay clauses and obligations on variation.",
  },
  {
    title: "Flexible Working & Variation Clauses",
    description:
      "Powers to vary terms and compliance with flexible working legislation.",
  },
  {
    title: "Restrictive Covenants",
    description:
      "Reasonableness of non-compete and non-solicit restrictions and their enforceability.",
  },
  {
    title: "Confidentiality & IP",
    description:
      "Scope of confidentiality obligations and ownership of intellectual property.",
  },
  {
    title: "Redundancy & Layoff Provisions",
    description:
      "Short-time working and lay-off clauses, and their interaction with statutory entitlements.",
  },
  {
    title: "Contractor & IR35 Exposure",
    description:
      "Indicators of employment status in contractor agreements and IR35 risk.",
  },
  {
    title: "Policy Incorporation Language",
    description:
      "Whether policies are incorporated by reference and the implications for contractual terms.",
  },
];

const comparisonRows = [
  ["Hourly billing", "£1,500 fixed fee"],
  ["Weeks of back-and-forth", "14-day delivery"],
  ["Scope creep", "Defined deliverable"],
  ["No guarantee", "Guaranteed or you don't pay"],
  ["Ongoing retainer push", "Clean engagement, no strings"],
  ["Price hidden behind a form", "Price shown upfront on the website"],
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-navy pt-16">
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
            One Service. Done Properly.
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            We don&apos;t offer a menu. We offer one fixed-fee employment
            contract risk review — scoped, priced, and guaranteed.
          </p>
        </div>
      </section>

      {/* ── Primary Service Block ─────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-white rounded-xl border border-muted p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">
              Employment Contract Risk Review
            </h2>
            <div className="text-gold font-serif text-4xl md:text-5xl font-bold mb-1">
              £1,500
              <span className="text-navy/40 text-xl font-sans font-normal ml-2">
                + VAT
              </span>
            </div>
            <p className="text-navy/55 text-sm mb-8">
              Delivered within 14 business days
            </p>

            <ul className="space-y-3 mb-10">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="text-gold shrink-0 mt-0.5"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block w-full bg-gold text-navy text-center font-semibold py-4 rounded text-lg hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Competitor Contrast ───────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Why Not Just Use a Law Firm?
          </h2>
          <p className="text-navy/55 text-center max-w-xl mx-auto mb-16">
            See how Blackwell Advisory compares to the traditional alternative.
          </p>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-xl border border-muted">
            <div className="grid grid-cols-2 bg-navy text-white">
              <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wide text-white/70">
                Traditional Law Firm
              </div>
              <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wide text-gold">
                Blackwell Advisory
              </div>
            </div>
            {comparisonRows.map(([left, right], i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <div className="px-6 py-4 text-navy/55 text-sm border-r border-muted">
                  {left}
                </div>
                <div className="px-6 py-4 text-navy font-medium text-sm">
                  {right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 Review Areas (Expanded) ────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
            12 Areas. Every Contract.
          </h2>
          <p className="text-navy/55 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Every review covers these 12 categories — scored, not just
            flagged.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviewAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white flex gap-5 p-6 rounded-lg border border-muted"
              >
                <span className="font-serif text-2xl font-bold text-gold w-8 shrink-0 leading-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{area.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer + CTA ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="text-navy/40 text-sm leading-relaxed mb-10">
            Blackwell Advisory is a consultancy, not a law firm. Services
            constitute risk analysis and do not constitute regulated legal
            advice. No solicitor-client relationship is formed.
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
