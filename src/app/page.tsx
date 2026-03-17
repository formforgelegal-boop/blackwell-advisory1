import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Employment Advisory for UK SMEs",
  description:
    "Blackwell Advisory helps UK SMEs reduce employment risk through clear, fixed-scope advisory work.",
};

type ServiceIcon = "shield-scale" | "file-check" | "users" | "briefcase";

type Service = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: ServiceIcon;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Avoid costly tribunal claims before they start",
    description:
      "Practical employment risk reviews for SMEs that want to prevent disputes before they escalate.",
    href: "/employment-tribunal-prevention",
    cta: "View service →",
    icon: "shield-scale",
    featured: true,
  },
  {
    title: "Find and fix hidden HR compliance risks",
    description:
      "A focused review of your policies, documents, and processes with clear next-step guidance.",
    href: "/hr-compliance-review",
    cta: "View service →",
    icon: "file-check",
  },
  {
    title: "Resolve workplace disputes with less disruption",
    description:
      "Measured, practical advisory support for handling employee issues before they become expensive.",
    href: "/workplace-dispute-advisory",
    cta: "View service →",
    icon: "users",
  },
  {
    title: "Run redundancy processes more safely",
    description:
      "Clear procedural guidance to help reduce legal risk and handle difficult decisions properly.",
    href: "/redundancy-procedure-advice",
    cta: "View service →",
    icon: "briefcase",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=2200&q=80";

function Icon({ icon }: { icon: ServiceIcon }) {
  const common = "h-5 w-5 stroke-[1.7] text-ink/80 transition-transform duration-300";

  if (icon === "shield-scale") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.6-3 8.8-7 10-4-1.2-7-5.4-7-10V6l7-3z" stroke="currentColor" />
        <path d="M12 8v7" stroke="currentColor" />
        <path d="M8.5 11.5h7" stroke="currentColor" />
        <path d="M9.5 13.5l-2 3h4l-2-3z" stroke="currentColor" />
        <path d="M14.5 13.5l-2 3h4l-2-3z" stroke="currentColor" />
      </svg>
    );
  }

  if (icon === "file-check") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M7 3h7l4 4v14H7z" stroke="currentColor" />
        <path d="M14 3v4h4" stroke="currentColor" />
        <path d="M9.5 13.5l2 2 3.5-3.5" stroke="currentColor" />
      </svg>
    );
  }

  if (icon === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" />
        <circle cx="16" cy="10" r="2" stroke="currentColor" />
        <path d="M4.5 17c.7-2.4 2.4-3.5 4.5-3.5S12.8 14.6 13.5 17" stroke="currentColor" />
        <path d="M13.5 16.5c.5-1.8 1.8-2.6 3.5-2.6 1.6 0 2.8.8 3.4 2.6" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M5 7h14v11H5z" stroke="currentColor" />
      <path d="M8 7V5h8v2" stroke="currentColor" />
      <path d="M10 12h4" stroke="currentColor" />
    </svg>
  );
}

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
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-line/80 pb-8">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-4xl text-ink md:text-5xl">
                Core Services
              </h2>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                Fixed-scope employment advisory for UK SMEs. Clear risks,
                practical action, no retainers.
              </p>
            </div>
            <Link
              href="/services"
              className="pb-1 text-sm font-medium tracking-[0.02em] text-ink/75 transition-colors hover:text-ink"
            >
              All services →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group flex h-full flex-col rounded-lg border p-7 transition-all duration-300 md:p-8 ${
                  service.featured
                    ? "border-ink/25 bg-white"
                    : "border-line bg-[#fbfaf8]"
                } hover:-translate-y-0.5 hover:border-ink/30 hover:bg-white hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white">
                    <span className="group-hover:-translate-y-0.5 transition-transform duration-300">
                      <Icon icon={service.icon} />
                    </span>
                  </span>
                  {service.featured ? (
                    <span className="rounded-sm border border-ink/20 px-2.5 py-1 text-[0.67rem] uppercase tracking-[0.12em] text-ink/65">
                      Most requested
                    </span>
                  ) : null}
                </div>
                <h3 className="font-serif text-[1.9rem] leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-ink/68">
                  {service.description}
                </p>
                <p className="mt-8 inline-flex items-center text-sm font-medium text-ink/75 transition-colors group-hover:text-ink">
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">{service.cta}</span>
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
            <Link href="/blog" className="text-sm text-ink/65 transition-colors hover:text-ink">
              Knowledge hub →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latest.map((post) => (
              <article key={post.slug} className="rounded-md border border-line bg-[#fbfaf8] p-8 transition-colors duration-200 hover:border-ink/20 hover:bg-white">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/45">
                  {new Date(post.publishedAt).toLocaleDateString("en-GB")}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
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
