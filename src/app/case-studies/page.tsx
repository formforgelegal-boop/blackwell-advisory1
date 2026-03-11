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
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
        <h1 className="font-serif text-4xl font-bold text-navy mb-10">Case Studies</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {caseStudies.map((item) => (
            <article key={item.slug} className="border border-muted rounded-xl p-6">
              <p className="text-xs uppercase tracking-widest text-navy/50 mb-2">{item.clientType}</p>
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">{item.title}</h2>
              <p className="text-navy/70 mb-5">{item.problem}</p>
              <Link href={`/case-studies/${item.slug}`} className="text-sm font-semibold text-navy hover:text-gold">
                Read case study →
              </Link>
            </article>
          ))}
        </div>
        <PrimaryCTA title="Want similar risk reduction outcomes?" description="Book a discovery call and we’ll map practical next steps for your team." />
      </div>
    </section>
  );
}
