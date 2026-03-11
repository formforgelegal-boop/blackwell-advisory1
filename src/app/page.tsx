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
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1900&q=80";
const editorialImage =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80";
const founderImage =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80";
const architectureImage =
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="pt-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-ink/55">
              Blackwell Advisory · Employment Risk Advisory
            </p>
            <h1 className="font-serif text-5xl leading-[1.03] text-ink md:text-7xl">
              Strategic employment advisory, delivered with editorial clarity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-ink/70">
              We help UK SMEs identify workforce risk before it escalates —
              through focused reviews, practical recommendations, and clear
              decision support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-accent px-7 py-3 text-sm text-white transition-opacity hover:opacity-90"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="border border-line px-7 py-3 text-sm text-ink hover:border-ink/35"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <aside className="border-l border-line pl-8 lg:col-span-5 lg:pl-10">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
              Approach
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ink/75">
              <li>Fixed-scope engagements with clear outputs.</li>
              <li>Commercial recommendations, not legal theatre.</li>
              <li>Built for owner-managed and scaling UK businesses.</li>
            </ul>
          </aside>
        </div>

        <div className="relative h-[48vh] min-h-[360px] w-full border-y border-line">
          <Image
            src={heroImage}
            alt="Contemporary London office architecture"
            fill
            priority
            className="object-cover"
          />
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
                className="bg-[#fbfaf8] p-9 transition-colors hover:bg-white"
              >
                <p className="font-serif text-[1.9rem] leading-tight text-ink">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[360px] overflow-hidden border border-line md:h-[460px]">
            <Image
              src={editorialImage}
              alt="Team collaborating around a boardroom table"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
              Operating Model
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Structured support for leadership teams under pressure.
            </h2>
            <p className="mt-5 max-w-xl text-ink/75">
              Our model is deliberately focused: diagnose risk quickly,
              prioritise action, and leave your team with clear implementation
              pathways.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
              Founder
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              An advisory practice built around judgement.
            </h2>
            <p className="mt-5 text-ink/75">
              Blackwell Advisory was created to offer SMEs a more useful middle
              ground between generic HR support and open-ended legal instruction.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-block border border-line px-6 py-2.5 text-sm text-ink hover:border-ink/35"
            >
              Read more about the firm
            </Link>
          </div>
          <div className="lg:col-span-3">
            <div className="relative h-[420px] overflow-hidden border border-line">
              <Image
                src={founderImage}
                alt="Founder portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative h-[420px] overflow-hidden border border-line">
              <Image
                src={architectureImage}
                alt="Architectural detail of a city office building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
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

      <section className="border-y border-line bg-accent py-24">
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
            className="mt-9 inline-block border border-white/30 bg-white px-8 py-3 text-sm text-ink hover:bg-white/95"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
