import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { categoryLabels } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border border-muted rounded-xl p-6 bg-white">
      <p className="text-xs uppercase tracking-widest text-navy/50 mb-3">{categoryLabels[post.category]}</p>
      <h2 className="font-serif text-2xl font-bold text-navy mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-navy/70 mb-4">{post.excerpt}</p>
      <p className="text-sm text-navy/50">{new Date(post.publishedAt).toLocaleDateString("en-GB")} · {post.readingTime}</p>
    </article>
  );
}
