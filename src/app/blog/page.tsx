import type { Metadata } from "next";
import Link from "next/link";
import { categoryLabels, getAllPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import EmailCapture from "@/components/lead/EmailCapture";
import { SITE_URL } from "@/lib/site";

const PAGE_SIZE = 4;

export const metadata: Metadata = {
  title: "Employment Law Knowledge Hub for UK SMEs",
  description: "Insights on tribunal risk, HR compliance, and workplace disputes for UK employers.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page ?? "1");
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Number.isNaN(page) ? 1 : Math.min(Math.max(page, 1), totalPages);
  const sliceStart = (safePage - 1) * PAGE_SIZE;
  const pagePosts = posts.slice(sliceStart, sliceStart + PAGE_SIZE);

  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(categoryLabels).map(([slug, label]) => (
            <Link key={slug} href={`/blog/category/${slug}`} className="text-sm border border-muted rounded-full px-4 py-1.5 hover:border-gold hover:text-gold transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          <div className="space-y-5">
            <h1 className="font-serif text-4xl font-bold text-navy mb-8">Knowledge Hub</h1>
            {pagePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
            <nav className="flex gap-3 pt-4" aria-label="Pagination">
              {Array.from({ length: totalPages }).map((_, index) => {
                const p = index + 1;
                return (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog?page=${p}`}
                    className={`px-3 py-1.5 rounded border ${p === safePage ? "bg-navy text-white border-navy" : "border-muted hover:border-gold"}`}
                  >
                    {p}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="lg:sticky lg:top-24">
            <EmailCapture source="blog-index" />
          </div>
        </div>
      </div>
    </section>
  );
}
