import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import FAQSection from "@/components/common/FAQSection";
import type { ServicePage } from "@/data/services";
import { getAllPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";

export default function ServicePageTemplate({ service }: { service: ServicePage }) {
  const relatedPosts = getAllPosts()
    .filter((post) => post.relatedServices.includes(`/${service.slug}`))
    .slice(0, 3);
  const relatedCaseStudies = caseStudies
    .filter((item) => item.relatedServices.includes(`/${service.slug}`))
    .slice(0, 2);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-white pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-[1100px] space-y-14 px-6">
        <div>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <h1 className="mb-4 font-serif text-4xl font-bold text-ink md:text-5xl">{service.title}</h1>
          <p className="max-w-3xl text-xl text-ink/75">{service.hero}</p>
        </div>

        <section>
          <h2 className="mb-3 font-serif text-3xl font-bold text-ink">The Problem</h2>
          <p className="max-w-3xl text-ink/70">{service.problem}</p>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-3xl font-bold text-ink">What This Involves</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink/70">
            {service.involves.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-3xl font-bold text-ink">What You Get</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink/70">
            {service.whatYouGet.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-3xl font-bold text-ink">Who It&apos;s For</h2>
          <ul className="list-disc space-y-2 pl-6 text-ink/70">
            {service.whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-serif text-3xl font-bold text-ink">How It Works</h2>
          <ol className="list-decimal space-y-2 pl-6 text-ink/70">
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <p className="max-w-3xl border-l-2 border-line pl-4 text-ink/72">{service.commercialClosing}</p>

        <FAQSection faqs={service.faqs} />

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-serif text-2xl font-bold text-ink">Related blog insights</h2>
            <ul className="space-y-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-ink transition-colors hover:text-accent">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl font-bold text-ink">Related case studies</h2>
            <ul className="space-y-2">
              {relatedCaseStudies.map((study) => (
                <li key={study.slug}>
                  <Link href={`/case-studies/${study.slug}`} className="text-ink transition-colors hover:text-accent">
                    {study.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PrimaryCTA />
      </div>
    </div>
  );
}
