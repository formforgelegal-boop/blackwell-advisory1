import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { categoryLabels, getPostsByCategory } from "@/data/blog";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(categoryLabels).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in categoryLabels)) return {};
  return {
    title: `${categoryLabels[category as keyof typeof categoryLabels]} Articles`,
    description: `Browse ${categoryLabels[category as keyof typeof categoryLabels]} guidance for UK SMEs.`,
    alternates: { canonical: `${SITE_URL}/blog/category/${category}` },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(category in categoryLabels)) notFound();

  const posts = getPostsByCategory(category as keyof typeof categoryLabels);

  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: categoryLabels[category as keyof typeof categoryLabels] }]} />
        <h1 className="font-serif text-4xl font-bold text-navy mb-8">{categoryLabels[category as keyof typeof categoryLabels]}</h1>
        <div className="space-y-5">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
