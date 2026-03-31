import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import FAQSection from "@/components/common/FAQSection";
import TableOfContents from "@/components/blog/TableOfContents";
import EmailCapture from "@/components/lead/EmailCapture";
import { SITE_URL } from "@/lib/site";

const post = {
  slug: "what-must-be-in-employment-contract-uk",
  title: "What Must Be in an Employment Contract in the UK?",
  publishedAt: "2026-03-31",
  readingTime: "8 min read",
  author: "Blackwell Advisory",
  categoryLabel: "HR Compliance for SMEs",
  featuredImage:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  featuredImageAlt: "what must be in an employment contract UK",
  metaTitle: "What Must Be in an Employment Contract in the UK? | Blackwell Advisory",
  metaDescription:
    "UK employment contracts must include specific mandatory clauses under the Employment Rights Act 1996. Here is exactly what must be in writing — and what leaving it out costs you.",
  primaryKeyword: "what must be in an employment contract UK",
  relatedServices: ["/hr-compliance-review", "/employment-tribunal-prevention"],
  sections: [
    {
      id: "what-law-actually-requires",
      heading: "What the law actually requires in writing",
      paragraphs: [
        "UK employers must provide a written statement of employment particulars no later than day one of employment. This requirement sits under section 1 of the Employment Rights Act 1996 and applies to employees and workers.",
        "Many businesses refer to this as 'the contract'. Strictly speaking, it is the statutory minimum statement, but in practice it is usually incorporated into the wider employment contract. If key particulars are missing or unclear, disputes are far harder to defend.",
        "The legal baseline is not optional. If you do not provide required particulars, an employment tribunal can award additional compensation in certain claims, typically two to four weeks' pay, on top of any primary award."
      ]
    },
    {
      id: "mandatory-terms-list",
      heading: "Mandatory terms every UK employment contract should contain",
      paragraphs: [
        "At minimum, your written terms should cover the core statutory particulars and be drafted in plain language managers can apply consistently.",
        "For SMEs, the practical objective is not just compliance. It is to remove ambiguity before a grievance, disciplinary process, or exit tests your paperwork."
      ],
      bullets: [
        "Employer and employee names, start date, and continuous employment date",
        "Job title or a clear description of duties",
        "Place of work and any mobility requirement",
        "Pay, pay intervals, and any variable remuneration basis",
        "Hours and days of work, including overtime expectations",
        "Holiday entitlement and holiday pay calculation",
        "Sickness reporting and sick pay terms",
        "Notice periods for employer and employee",
        "Probation terms (where used), including review and extension mechanics",
        "Pension details and eligibility",
        "Disciplinary and grievance procedures, including where the full policy is found",
        "Any collective agreements that affect terms",
        "Any required training and whether the employee must repay costs"
      ]
    },
    {
      id: "clauses-that-protect-business",
      heading: "Clauses that are not always mandatory, but commercially critical",
      paragraphs: [
        "The statutory statement is the floor, not the ceiling. Most tribunal and commercial risk sits in clauses beyond the legal minimum.",
        "Businesses that rely only on baseline particulars are usually exposed when an employee leaves, solicits clients, or challenges post-termination conduct."
      ],
      bullets: [
        "Confidentiality obligations that survive termination",
        "Intellectual property ownership for work created during employment",
        "Data protection responsibilities for client and employee data",
        "Reasonable post-termination restrictions tailored to role and risk",
        "Garden leave rights during notice",
        "Set-off clauses where legally appropriate",
        "Flexibility clauses for role, location, and reporting-line changes"
      ]
    },
    {
      id: "common-drafting-mistakes",
      heading: "Common drafting mistakes that create tribunal exposure",
      paragraphs: [
        "Most contract failures are not dramatic legal errors. They are inconsistencies: outdated templates, policy references that no longer exist, and terms managers apply unevenly.",
        "If your contract says one thing but your practice shows another, tribunals usually give more weight to actual conduct and contemporaneous records than to boilerplate wording."
      ],
      bullets: [
        "Using generic templates without role-specific tailoring",
        "Unenforceable restrictive covenants drafted too broadly",
        "Missing or contradictory notice and probation wording",
        "No clear variation mechanism when terms change",
        "Inconsistent contract versions across employees in similar roles"
      ]
    },
    {
      id: "practical-sme-checklist",
      heading: "A practical SME checklist before issuing contracts",
      paragraphs: [
        "Before issuing or reissuing contracts, review whether your terms align with current law, policies, and actual working practices.",
        "The strongest contracts are clear, current, and consistently implemented. That combination improves day-to-day management and strengthens your position if a dispute escalates."
      ],
      bullets: [
        "Audit current contract versions and remove duplicates",
        "Map each clause to a live policy document",
        "Ensure managers are trained on key procedural terms",
        "Plan a lawful variation process for legacy contracts",
        "Schedule annual legal and operational contract review"
      ],
      links: [
        {
          href: "/blog/employment-contracts-uk-smes-guide",
          label: "Employment Contracts for UK SMEs: The Complete Guide"
        },
        {
          href: "/blog/how-to-avoid-unfair-dismissal-claims",
          label: "How to Avoid Unfair Dismissal Claims in UK SMEs"
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Is a written employment contract legally required in the UK?",
      answer:
        "Employers must provide a written statement of key particulars from day one. In practice, this is usually included in the written contract and should be complete and accurate."
    },
    {
      question: "Can I rely on a free online employment contract template?",
      answer:
        "Templates can be a starting point, but they are rarely sufficient without tailoring for your sector, seniority levels, policies, and post-termination risk profile."
    },
    {
      question: "What happens if required terms are missing?",
      answer:
        "Missing particulars increase dispute risk and can lead to additional tribunal awards linked to other successful claims, as well as weaker defence leverage."
    },
    {
      question: "How often should UK SMEs review employment contracts?",
      answer:
        "At least annually, and immediately after legal changes, restructuring, new service lines, or repeated people-process issues."
    }
  ]
};

const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.metaTitle,
  description: post.metaDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: post.metaTitle,
    description: post.metaDescription,
    type: "article",
    url: canonicalUrl,
    publishedTime: post.publishedAt,
    images: [{ url: post.featuredImage, alt: post.featuredImageAlt }]
  },
  twitter: {
    card: "summary_large_image",
    title: post.metaTitle,
    description: post.metaDescription
  },
  keywords: [post.primaryKeyword]
};

export default function WhatMustBeInEmploymentContractUKPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Blackwell Advisory" },
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    description: post.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <article className="bg-white pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]}
        />
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/50 mb-3">{post.categoryLabel}</p>
            <h1 className="font-serif text-4xl font-bold text-ink mb-3">{post.title}</h1>
            <p className="text-sm text-ink/50 mb-8">
              {new Date(post.publishedAt).toLocaleDateString("en-GB")} · {post.readingTime} · By {post.author}
            </p>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-sm border border-line">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-8">
              {post.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <h2 className="font-serif text-2xl font-bold text-ink mb-3 scroll-mt-24">
                    <a href={`#${section.id}`} className="hover:text-accent transition-colors">
                      {section.heading}
                    </a>
                  </h2>
                  <div className="space-y-3 text-ink/75">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc pl-6 space-y-1">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.links && (
                      <ul className="list-disc pl-6 space-y-1">
                        {section.links.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className="text-accent hover:underline">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <FAQSection faqs={post.faqs} />

            <div className="my-12">
              <PrimaryCTA
                title="Need a contract review that actually reduces risk?"
                description="Book a short call and we’ll identify the clauses and documentation gaps most likely to cause employment disputes."
              />
            </div>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-bold text-ink mb-5">Related services</h2>
              <div className="flex flex-wrap gap-2">
                {post.relatedServices.map((service) => (
                  <Link
                    key={service}
                    href={service}
                    className="text-sm border border-line rounded-none px-4 py-1.5 hover:border-accent hover:text-accent"
                  >
                    {service.replaceAll("/", "").replaceAll("-", " ")}
                  </Link>
                ))}
              </div>
            </section>
          </div>
          <div className="space-y-4 lg:sticky lg:top-24">
            <TableOfContents sections={post.sections} />
            <EmailCapture source={`blog-post-${post.slug}`} />
          </div>
        </div>
      </div>
    </article>
  );
}
