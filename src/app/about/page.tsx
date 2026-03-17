import fs from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Connor Griffiths, Founder of Blackwell Advisory, a West Midlands legal consultancy supporting SMEs with employment law, company law, and mergers and acquisitions guidance.",
};

export default function AboutPage() {
  const founderImageExists = fs.existsSync(path.join(process.cwd(), "public", "connor-griffiths.jpg"));

  return (
    <>
      <section className="border-b border-line pt-28 pb-24">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <h1 className="font-serif text-5xl text-ink md:text-6xl">About the Founder</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-ink/70">
            Connor Griffiths is the Founder of Blackwell Advisory, a legal consultancy focused on practical legal guidance for businesses navigating employment, company,
            and transactional matters.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-10 text-ink/80">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">Credentials and experience</h2>
              <p>
                Connor holds an LLB from the University of Birmingham and an MSc from the University of Law, and maintains professional affiliations with CILEX and the
                Law Society. Across his career, he has advised hundreds of companies, supporting organisations from early-stage businesses to established SMEs.
              </p>
              <p>
                Before founding Blackwell Advisory, Connor gained experience in both regional law firms and a Magic Circle firm. This provided strong grounding in
                employment law, company law, and mergers and acquisitions, alongside a practical understanding of how legal decisions impact business operations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">Why Blackwell Advisory was founded</h2>
              <p>
                Blackwell Advisory was established in response to a clear market need: many businesses require clear, commercially focused legal advice well before
                problems progress to litigation or formal dispute.
              </p>
              <p>
                Traditional legal models are often reactive. Blackwell Advisory is built around preventative legal strategy, risk management, and practical compliance so
                leadership teams can make confident decisions at the right time.
              </p>
              <p>
                Based in the West Midlands, Connor advises businesses across professional services, construction, technology, and manufacturing, delivering trusted SME
                legal support with clarity and commercial focus.
              </p>
            </div>

            <p className="text-sm uppercase tracking-[0.18em] text-ink/60">Outside of work, Connor enjoys football and golf.</p>
          </div>

          <aside className="space-y-6 self-start rounded-2xl border border-line bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <div className="overflow-hidden rounded-xl border border-line bg-stone/60 p-2">
              {founderImageExists ? (
                <Image
                  src="/connor-griffiths.jpg"
                  alt="Connor Griffiths, Founder of Blackwell Advisory"
                  width={280}
                  height={350}
                  className="mx-auto h-auto w-full max-w-[220px] rounded-lg object-cover"
                  priority
                />
              ) : (
                <div className="mx-auto flex aspect-[4/5] w-full max-w-[220px] items-center justify-center rounded-lg bg-white text-center text-xs uppercase tracking-[0.14em] text-ink/45">
                  Founder photograph
                </div>
              )}
            </div>
            <h3 className="font-serif text-2xl text-ink">Founder profile</h3>
            <dl className="space-y-4 text-sm text-ink/75">
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Name</dt>
                <dd className="mt-1 text-base text-ink">Connor Griffiths</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Title</dt>
                <dd className="mt-1 text-base text-ink">Founder, Blackwell Advisory</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Qualifications</dt>
                <dd className="mt-1">LLB (University of Birmingham), MSc (University of Law)</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Affiliations</dt>
                <dd className="mt-1">CILEX and the Law Society</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Practice areas</dt>
                <dd className="mt-1">Employment law, company law, and mergers and acquisitions</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-ink/55">Location</dt>
                <dd className="mt-1">West Midlands</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-20">
        <div className="mx-auto max-w-[980px] space-y-6 px-6 text-ink/80">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink/60">Mission statement</p>
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Accessible strategic legal consultancy for growing businesses.</h2>
          <p>
            Blackwell Advisory exists to make high-quality legal thinking accessible to growing businesses. The mission is to help companies identify legal risk early,
            build stronger operational foundations, and approach employment and corporate matters with clarity and confidence.
          </p>
          <p>
            By combining rigorous legal training with a practical commercial approach, Blackwell Advisory provides the calibre of strategic legal support often reserved for
            larger organisations.
          </p>
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
