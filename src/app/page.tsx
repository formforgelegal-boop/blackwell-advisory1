import type { Metadata } from "next";
import Image from "next/image";
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

const heroImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="bg-white pt-28 pb-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-ink/55">
              Blackwell Advisory · Employment Risk Advisory
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl">
              Clarity on employment risk, before it becomes cost.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/72">
              We advise UK SMEs on contract, compliance and workforce risk with
              a measured, practical approach designed to prevent disputes and
              protect leadership focus.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-accent px-8 py-3.5 text-sm text-white transition-colors duration-200 hover:bg-accent/90"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-line px-8 py-3.5 text-sm text-ink transition-colors duration-200 hover:border-ink/35"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line">
              <Image
                src={heroImage}
                alt="Modern office interior with an editorial feel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <aside className="rounded-md border border-line bg-stone p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink/50">
                Approach
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                <li>Fixed-scope engagements with clear outputs.</li>
                <li>Commercial recommendations, not legal theatre.</li>
                <li>Built for owner-managed and scaling UK businesses.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Core Services
            </h2>
            <Link href="/services" className="text-sm text-ink/65 hover:text-ink">
              All services →
            </Link>
          </div>
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {services.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="bg-[#fbfaf8] p-9 transition-colors duration-200 hover:bg-white"
              >
                <p className="font-serif text-[1.9rem] leading-tight text-ink">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Latest Insights
            </h2>
            <Link href="/blog" className="text-sm text-ink/65 hover:text-ink">
              Knowledge hub →
            </Link>
          </div>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {latest.map((post) => (
              <article key={post.slug} className="bg-[#fbfaf8] p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB")}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm text-ink/65">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Case Studies
            </h2>
            <Link
              href="/case-studies"
              className="text-sm text-ink/65 hover:text-ink"
            >
              View all case studies →
            </Link>
          </div>
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            <article className="bg-[#fbfaf8] p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                Manufacturing
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                Restructuring support that reduced litigation exposure before
                consultation.
              </h3>
            </article>
            <article className="bg-[#fbfaf8] p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                Professional Services
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                Policy and contract redesign aligned leadership decisions across
                two offices.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#1f2124] py-24">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-white/65">
            Start with a focused conversation
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
            Get a clear view of your current employment risk profile.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/75">
            A short discovery call to assess fit, priorities and the right next
            step for your business.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-md border border-white/30 bg-white px-8 py-3.5 text-sm text-ink transition-colors duration-200 hover:bg-white/95"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
