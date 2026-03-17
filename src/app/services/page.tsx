import type { Metadata } from "next";
import Link from "next/link";
import { servicePages } from "@/data/services";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description: "Employment risk reduction services for UK SMEs.",
};

const howItWorks = [
  {
    step: "1",
    title: "Identify risk",
    description: "We assess contracts, policies, and live employment pressure points to surface where downside is most likely to emerge.",
  },
  {
    step: "2",
    title: "Apply structured framework",
    description: "We apply a clear advisory framework to prioritise actions, tighten process quality, and align management decisions.",
  },
  {
    step: "3",
    title: "Deliver clear, defensible outcome",
    description: "You receive practical outputs and decision support that strengthen legal defensibility and reduce reactive cost exposure.",
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="font-serif text-5xl text-ink">Services</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink/70">
          Fixed-scope employment advisory for UK SMEs. Clear risks, practical action, no retainers.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {servicePages.map((service) => (
            <article
              key={service.slug}
              className={`group rounded-lg border p-7 transition-all duration-300 md:p-8 ${
                service.featured
                  ? "border-ink/25 bg-stone/40"
                  : "border-line bg-white"
              } hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-[1.95rem] leading-tight text-ink">
                  {service.cardHeadline}
                </h2>
                {service.featured ? (
                  <span className="mt-1 rounded-sm border border-ink/20 px-2.5 py-1 text-[0.67rem] uppercase tracking-[0.12em] text-ink/65">
                    Most requested
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink/70">{service.cardDescription}</p>

              <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm text-ink/80">
                {service.cardBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <Link href={`/${service.slug}`} className="mt-6 inline-flex text-sm font-medium text-ink/75 transition-colors group-hover:text-ink">
                {service.cardCta}
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-serif text-4xl text-ink">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorks.map((item) => (
              <article key={item.step} className="rounded-lg border border-line bg-stone/35 p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/55">Step {item.step}</p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/72">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
