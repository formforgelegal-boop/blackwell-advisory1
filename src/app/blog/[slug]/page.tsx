import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PrimaryCTA from "@/components/common/PrimaryCTA";
import FAQSection from "@/components/common/FAQSection";
import TableOfContents from "@/components/blog/TableOfContents";
import EmailCapture from "@/components/lead/EmailCapture";
import { categoryLabels, getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription,
      type: "article",
      url,
      publishedTime: post.publishedAt,
    },
    twitter: { card: "summary_large_image", title: post.metaTitle ?? post.title, description: post.metaDescription },
    keywords: [post.primaryKeyword, ...(post.secondaryKeywords ?? [])].filter(Boolean),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Blackwell Advisory" },
    mainEntityOfPage: canonicalUrl,
    description: post.metaDescription,
  };

  const faqSchema = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      }
    : null;

  return (
    <article className="bg-white pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink/50 mb-3">{categoryLabels[post.category]}</p>
            <h1 className="font-serif text-4xl font-bold text-ink mb-3">{post.title}</h1>
            <p className="text-sm text-ink/50 mb-8">{new Date(post.publishedAt).toLocaleDateString("en-GB")} · {post.readingTime} · By {post.author}</p>

            <div className="space-y-8">
              {post.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <h2 className="font-serif text-2xl font-bold text-ink mb-3 scroll-mt-24">
                    <a href={`#${section.id}`} className="hover:text-accent transition-colors">{section.heading}</a>
                  </h2>
                  <div className="space-y-3 text-ink/75">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && (
                      <ul className="list-disc pl-6 space-y-1">
                        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {post.faqs && <FAQSection faqs={post.faqs} />}

            <div className="my-12">
              <PrimaryCTA title="Need clarity on your current risk position?" description="Book a short call and we’ll outline practical next steps for your business." />
            </div>

            <section className="mt-12">
              <h2 className="font-serif text-3xl font-bold text-ink mb-5">Related articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="border border-line rounded-sm p-4 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-ink mb-1">{related.title}</h3>
                    <p className="text-sm text-ink/65">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-ink mb-2">Related services</h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedServices.map((service) => (
                    <Link key={service} href={service} className="text-sm border border-line rounded-none px-4 py-1.5 hover:border-accent hover:text-accent">
                      {service.replaceAll("/", "").replaceAll("-", " ")}
                    </Link>
                  ))}
                </div>
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
