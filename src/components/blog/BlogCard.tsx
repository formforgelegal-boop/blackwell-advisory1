import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { categoryLabels } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-t border-line pt-6">
      <p className="mb-3 text-xs uppercase tracking-[0.14em] text-ink/50">{categoryLabels[post.category]}</p>
      <h2 className="mb-2 font-serif text-3xl text-ink">
        <Link href={`/blog/${post.slug}`} className="hover:text-accent">{post.title}</Link>
      </h2>
      <p className="mb-3 text-ink/70">{post.excerpt}</p>
      <p className="text-xs text-ink/50">{new Date(post.publishedAt).toLocaleDateString("en-GB")} · {post.readingTime}</p>
    </article>
  );
}
