import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Employment Advisory for UK SMEs",
  description:
    "Blackwell Advisory helps UK SMEs reduce employment risk through clear, fixed-scope advisory work.",
};

const services = [
  ["Employment tribunal prevention", "/employment-tribunal-prevention"],
  ["HR compliance review", "/hr-compliance-review"],
  ["Workplace dispute advisory", "/workplace-dispute-advisory"],
  ["Redundancy procedure advice", "/redundancy-procedure-advice"],
] as const;

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="border-b border-line pt-28 pb-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-ink/55">Blackwell Advisory · Employment Risk Advisory</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl">Clarity on employment risk, before it becomes cost.</h1>
            <p className="mt-8 max-w-2xl text-lg text-ink/70">We advise UK SMEs on contract, compliance and workforce risk with a measured, practical approach designed to prevent disputes and protect leadership focus.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-accent px-7 py-3 text-sm text-white transition-opacity hover:opacity-90">Book a Discovery Call</Link>
              <Link href="/services" className="border border-line px-7 py-3 text-sm text-ink hover:border-ink/35">View Services</Link>
            </div>
          </div>
          <div className="border-l border-line pl-8 lg:col-span-4 lg:pl-10">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">Approach</p>
            <ul className="mt-5 space-y-4 text-sm text-ink/75">
              <li>Fixed-scope engagements with clear outputs.</li>
              <li>Commercial recommendations, not legal theatre.</li>
              <li>Built for owner-managed and scaling UK businesses.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">Core Services</h2>
            <Link href="/services" className="text-sm text-ink/65 hover:text-ink">All services →</Link>
          </div>
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {services.map(([label, href]) => (
              <Link key={href} href={href} className="bg-[#fbfaf8] p-8 transition-colors hover:bg-white">
                <p className="font-serif text-2xl text-ink">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-stone py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">Founder</p>
            <h2 className="mt-3 font-serif text-4xl text-ink">Built with an advisory mindset.</h2>
          </div>
          <div className="space-y-5 text-ink/75 lg:col-span-8">
            <p>Blackwell Advisory was created to provide SMEs with a more useful middle ground between generic HR support and expensive open-ended legal instruction.</p>
            <p>Our work is preventative and structured: identify material risk, prioritise action, and ensure leadership teams can move with confidence.</p>
            <Link href="/about" className="inline-block border border-line px-6 py-2.5 text-sm text-ink hover:border-ink/35">Read more about the firm</Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">Latest Insights</h2>
            <Link href="/blog" className="text-sm text-ink/65 hover:text-ink">Knowledge hub →</Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {latest.map((post) => (
              <article key={post.slug} className="border-t border-line pt-6">
                <h3 className="font-serif text-2xl text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">{post.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-ink/65">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
