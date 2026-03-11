import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.problem,
    alternates: { canonical: `${SITE_URL}/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <article className="bg-white pt-24 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: study.title }]} />
        <p className="text-xs uppercase tracking-widest text-ink/50 mb-2">{study.clientType}</p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-8">{study.title}</h1>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-2">Problem</h2>
          <p className="text-ink/70">{study.problem}</p>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-2">Approach</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink/70">
            {study.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-2">Outcome</h2>
          <p className="text-ink/70">{study.outcome}</p>
          {study.metrics && (
            <ul className="list-disc pl-6 mt-3 text-ink/70">
              {study.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-ink mb-3">Related links</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {study.relatedServices.map((service) => (
              <Link key={service} href={service} className="text-sm border border-line rounded-none px-4 py-1.5 hover:border-accent hover:text-accent">
                {service.replaceAll("/", "").replaceAll("-", " ")}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {study.relatedPosts.map((slugValue) => (
              <Link key={slugValue} href={`/blog/${slugValue}`} className="text-sm border border-line rounded-none px-4 py-1.5 hover:border-accent hover:text-accent">
                Related blog article
              </Link>
            ))}
          </div>
        </section>

        <PrimaryCTA />
      </div>
    </article>
  );
}
