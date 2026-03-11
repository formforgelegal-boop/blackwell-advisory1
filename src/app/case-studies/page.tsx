import type { Metadata } from "next";
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
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
        <h1 className="font-serif text-5xl text-ink">Case Studies</h1>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.slug} className="border-t border-line pt-6">
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-ink/50">{item.clientType}</p>
              <h2 className="font-serif text-3xl text-ink">{item.title}</h2>
              <p className="mt-3 text-ink/70">{item.problem}</p>
              <Link href={`/case-studies/${item.slug}`} className="mt-4 inline-block text-sm text-ink/70 hover:text-ink">Read case study →</Link>
            </article>
          ))}
        </div>
        <div className="mt-16"><PrimaryCTA title="Looking for similar outcomes?" description="Book a discovery call and we will map practical next steps for your team." /></div>
      </div>
    </section>
  );
}
