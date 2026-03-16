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
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=2200&q=80";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-[#121820]">
        <Image
          src={heroImage}
          alt="Modern office interior with an editorial feel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#0d1117]/55" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-20 pt-32 md:pt-36 lg:pt-40">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-white/75">
              Blackwell Advisory · Employment Risk Advisory
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
              Clarity on employment risk, before it becomes cost.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/85">
              We advise UK SMEs on contract, compliance and workforce risk with
              a measured, practical approach designed to prevent disputes and
              protect leadership focus.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-accent px-8 py-3.5 text-sm text-white transition-colors duration-200 hover:bg-accent/88"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-white/55 bg-white/5 px-8 py-3.5 text-sm text-white transition-colors duration-200 hover:border-white/80 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-28 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Core Services
            </h2>
            <Link
              href="/services"
              className="text-sm text-ink/65 transition-colors hover:text-ink"
            >
              All services →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md border border-line bg-[#fbfaf8] p-9 transition-colors duration-200 hover:border-ink/25 hover:bg-white"
              >
                <p className="font-serif text-[1.9rem] leading-tight text-ink">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Latest Insights
            </h2>
            <Link
              href="/blog"
              className="text-sm text-ink/65 transition-colors hover:text-ink"
            >
              Knowledge hub →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latest.map((post) => (
              <article
                key={post.slug}
                className="rounded-md border border-line bg-[#fbfaf8] p-8 transition-colors duration-200 hover:border-ink/20 hover:bg-white"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB")}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm text-ink/65">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-28 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-ink md:text-5xl">
              Case Studies
            </h2>
            <Link
              href="/case-studies"
              className="text-sm text-ink/65 transition-colors hover:text-ink"
            >
              View all case studies →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-md border border-line bg-[#fbfaf8] p-8 transition-colors duration-200 hover:border-ink/20 hover:bg-white">
              <p className="text-xs uppercase tracking-[0.14em] text-ink/50">
                Manufacturing
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                Restructuring support that reduced litigation exposure before
                consultation.
              </h3>
            </article>
            <article className="rounded-md border border-line bg-[#fbfaf8] p-8 transition-colors duration-200 hover:border-ink/20 hover:bg-white">
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

      <section className="bg-[#1f2124] py-24 md:py-28">
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
            className="mt-9 inline-block rounded-md border border-white/35 bg-white px-8 py-3.5 text-sm text-ink transition-colors duration-200 hover:bg-white/92"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
