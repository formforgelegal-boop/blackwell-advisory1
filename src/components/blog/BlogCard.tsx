import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { categoryLabels } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-white transition-colors duration-200 hover:border-ink/25">
      <div className="relative aspect-[16/9]">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt ?? post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </div>
      <div className="p-6">
        <p className="mb-3 text-xs uppercase tracking-[0.14em] text-ink/50">
          {categoryLabels[post.category]}
        </p>
        <h2 className="mb-2 font-serif text-3xl text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mb-3 text-ink/70">{post.excerpt}</p>
        <p className="text-xs text-ink/50">
          {new Date(post.publishedAt).toLocaleDateString("en-GB")} · {post.readingTime}
        </p>
      </div>
    </article>
  );
}
