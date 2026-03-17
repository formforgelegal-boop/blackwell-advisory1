import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import { caseStudies } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Anonymised examples of how UK employers reduced employment risk with Blackwell Advisory.",
  alternates: { canonical: `${SITE_URL}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <section className="bg-stone pt-28 pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl text-ink md:text-6xl">Case Studies</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Anonymised mandates showing how Blackwell Advisory helps leadership teams reduce employment risk, strengthen process quality, and make commercially confident decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-lg border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line/80 bg-stone">
                <Image
                  src={item.heroImage}
                  alt={item.clientLabel}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex h-full flex-col p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.13em] text-ink/55">{item.clientLabel}</p>
                <h2 className="mt-3 font-serif text-[1.8rem] leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{item.summary}</p>

                <div className="mt-6 space-y-2 border-t border-line/80 pt-4">
                  {item.keyResults.slice(0, 2).map((result) => (
                    <p key={result} className="text-sm text-ink/80">
                      {result}
                    </p>
                  ))}
                </div>

                <Link href={`/case-studies/${item.slug}`} className="mt-6 inline-flex text-sm font-medium text-ink/75 transition-colors hover:text-ink">
                  Read case study →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <PrimaryCTA title="Looking for similar outcomes?" description="Book a discovery call and we will map practical next steps for your team." />
        </div>
      </div>
    </section>
  );
}
