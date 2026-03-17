import fs from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const aboutHeroImage =
  "https://images.unsplash.com/photo-1723548238753-b62f06344047?auto=format&fit=crop&w=2200&q=80";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blackwell Advisory is a West Midlands legal consultancy helping SMEs prevent employment and corporate risk through practical, commercially focused advisory work.",
};

const differentiators = [
  "Fixed-scope advisory work with clear deliverables, not open-ended retainers.",
  "Practical implementation support that improves real process quality, not generic commentary.",
  "Prevention-first structure designed to reduce disputes before they escalate.",
  "Commercially grounded guidance aligned to operational reality for SME leadership teams.",
];

const engagementModel = [
  {
    step: "1",
    title: "Risk identification",
    description:
      "We assess current contracts, policies, and decision pathways to isolate where legal and operational exposure is concentrated.",
  },
  {
    step: "2",
    title: "Targeted advisory work",
    description:
      "We deliver focused remedial support with clear priorities, documentation standards, and practical implementation guidance.",
  },
  {
    step: "3",
    title: "Optional ongoing support",
    description:
      "Where needed, we provide periodic follow-on advisory support to maintain standards and support sensitive decisions.",
  },
];

export default function AboutPage() {
  const founderImageExists = fs.existsSync(path.join(process.cwd(), "public", "connor-griffiths.jpg"));

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-28 pb-24">
        <Image
          src={aboutHeroImage}
          alt="Lichfield Cathedral and townscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-[980px] px-6 text-center">
          <h1 className="font-serif text-5xl text-white md:text-6xl">About Blackwell Advisory</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/88">
            A West Midlands legal consultancy focused on giving SME leadership teams clear, preventative, and commercially grounded employment advisory support.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[980px] space-y-5 px-6 text-ink/78">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Why Blackwell Advisory exists</h2>
          <p>
            Most SMEs do not run into employment risk because the law is inherently too complex. They run into risk because process quality is inconsistent: contracts drift,
            documentation weakens, and people decisions are made without clear structure.
          </p>
          <p>
            Disputes often emerge from preventable process failures rather than single high-profile events. Blackwell Advisory exists to address this directly with practical,
            prevention-focused advisory work that strengthens operational consistency before issues become expensive.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-20">
        <div className="mx-auto max-w-[980px] space-y-6 px-6">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">What makes this different</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((point) => (
              <article key={point} className="rounded-md border border-line bg-white p-5 text-sm leading-relaxed text-ink/80">
                {point}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5 text-ink/78">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">Founder</h2>
            <p>
              Connor Griffiths is the Founder of Blackwell Advisory. He holds an LLB from the University of Birmingham and an MSc from the University of Law, with
              professional affiliations to CILEX and the Law Society.
            </p>
            <p>
              Before founding Blackwell Advisory, Connor built experience in regional law firms and a Magic Circle firm across employment law, company law, and mergers and
              acquisitions. He has advised hundreds of businesses, combining rigorous legal standards with practical commercial perspective.
            </p>
            <p className="text-sm uppercase tracking-[0.16em] text-ink/60">Outside work: football and golf.</p>
          </div>

          <aside className="space-y-4 self-start rounded-xl border border-line bg-white p-5">
            <div className="overflow-hidden rounded-lg border border-line bg-stone/60 p-2">
              {founderImageExists ? (
                <Image
                  src="/connor-griffiths.jpg"
                  alt="Connor Griffiths, Founder of Blackwell Advisory"
                  width={260}
                  height={320}
                  className="mx-auto h-auto w-full max-w-[210px] rounded-md object-cover"
                />
              ) : (
                <div className="mx-auto flex aspect-[4/5] w-full max-w-[210px] items-center justify-center rounded-md bg-white text-center text-xs uppercase tracking-[0.14em] text-ink/45">
                  Founder photograph
                </div>
              )}
            </div>
            <p className="text-sm text-ink/72">Based in the West Midlands, advising businesses across professional services, construction, technology, and manufacturing.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">How clients engage</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engagementModel.map((item) => (
              <article key={item.step} className="rounded-md border border-line bg-white p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/55">Step {item.step}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/72">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-serif text-4xl text-ink">Ready to discuss your current risk position?</h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="inline-block bg-accent px-8 py-3 text-sm text-white">
              Discuss your situation →
            </Link>
            <Link href="/services" className="inline-block border border-line bg-white px-8 py-3 text-sm text-ink/80 hover:text-ink">
              View services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
