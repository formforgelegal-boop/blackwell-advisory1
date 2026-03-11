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

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = Number(params.page ?? "1");
  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Number.isNaN(page) ? 1 : Math.min(Math.max(page, 1), totalPages);
  const pagePosts = posts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
        <h1 className="mb-6 font-serif text-5xl text-ink">Latest Insights</h1>
        <div className="mb-10 flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([slug, label]) => (
            <Link key={slug} href={`/blog/category/${slug}`} className="border border-line px-4 py-1.5 text-xs uppercase tracking-[0.12em] text-ink/70 hover:text-ink">
              {label}
            </Link>
          ))}
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {pagePosts.map((post) => <BlogCard key={post.slug} post={post} />)}
            <nav className="flex gap-2 pt-4" aria-label="Pagination">
              {Array.from({ length: totalPages }).map((_, index) => {
                const p = index + 1;
                return (
                  <Link key={p} href={p === 1 ? "/blog" : `/blog?page=${p}`} className={`border px-3 py-1 text-sm ${p === safePage ? "border-ink bg-ink text-white" : "border-line text-ink/70 hover:text-ink"}`}>
                    {p}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="lg:sticky lg:top-24"><EmailCapture source="blog-index" /></div>
        </div>
      </div>
    </section>
  );
}
