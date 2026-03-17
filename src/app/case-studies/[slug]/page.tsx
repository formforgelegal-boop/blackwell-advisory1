import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getPostBySlug } from "@/data/blog";
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
    description: study.summary,
    alternates: { canonical: `${SITE_URL}/case-studies/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article",
      url: `${SITE_URL}/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const relatedPosts = study.relatedPosts
    .map((postSlug) => getPostBySlug(postSlug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <article className="bg-white pt-24 pb-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: study.title }]} />

        <section className="mt-5 overflow-hidden rounded-xl border border-line bg-stone/40">
          <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.14em] text-ink/55">Case study · {study.label}</p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">{study.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75">{study.summary}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {study.keyResults.map((result) => (
                  <div key={result} className="rounded-md border border-line bg-white px-4 py-3 text-sm text-ink/80">
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] border-t border-line lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={study.image}
                alt={study.label}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-10 text-ink/78">
            <section>
              <h2 className="font-serif text-3xl text-ink">Client context</h2>
              <div className="mt-4 space-y-3">
                {study.clientContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink">Problem</h2>
              <div className="mt-4 space-y-3">
                <p>{study.problem}</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink">What we did</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {study.actions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink">Outcome</h2>
              <div className="mt-4 space-y-3">
                <p>{study.outcome}</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-ink">Commercial impact</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {study.commercialImpact.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-lg border border-line bg-stone/35 p-5">
              <h2 className="font-serif text-2xl text-ink">Related services</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.relatedServices.map((service) => (
                  <Link key={service} href={service} className="text-sm border border-line bg-white px-4 py-1.5 hover:border-accent hover:text-accent">
                    {service.replaceAll("/", "").replaceAll("-", " ")}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-line bg-stone/35 p-5">
              <h2 className="font-serif text-2xl text-ink">Related insights</h2>
              <div className="mt-4 space-y-3">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-md border border-line bg-white p-3 text-sm text-ink/80 hover:border-accent hover:text-accent">
                    {post.title}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <div className="mt-14">
          <PrimaryCTA title={study.cta} description="Book a focused conversation and we will map practical next steps for your team and current exposure profile." />
        </div>
      </div>
    </article>
  );
}
