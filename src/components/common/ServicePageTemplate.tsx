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
      <div className="max-w-[1100px] mx-auto px-6 space-y-14">
        <div>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">{service.title}</h1>
          <p className="text-xl text-ink/75 max-w-3xl">{service.hero}</p>
        </div>

        <section>
          <h2 className="font-serif text-3xl font-bold text-ink mb-3">The Problem</h2>
          <p className="text-ink/70 max-w-3xl">{service.problem}</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink mb-3">What&apos;s Included</h2>
            <ul className="list-disc pl-6 text-ink/70 space-y-2">
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink mb-3">Who It&apos;s For</h2>
            <ul className="list-disc pl-6 text-ink/70 space-y-2">
              {service.whoFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-ink mb-3">How It Works</h2>
          <ol className="space-y-2 text-ink/70 list-decimal pl-6">
            {service.process.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>

        <FAQSection faqs={service.faqs} />

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-3">Related blog insights</h2>
            <ul className="space-y-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-ink hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-3">Related case studies</h2>
            <ul className="space-y-2">
              {relatedCaseStudies.map((study) => (
                <li key={study.slug}>
                  <Link href={`/case-studies/${study.slug}`} className="text-ink hover:text-accent transition-colors">
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
