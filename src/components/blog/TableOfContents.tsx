import type { BlogSection } from "@/data/blog";

export default function TableOfContents({ sections }: { sections: BlogSection[] }) {
  return (
    <aside className="border border-line bg-stone p-6">
      <h2 className="mb-4 font-serif text-xl text-ink">Contents</h2>
      <ul className="space-y-2 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-ink/70 hover:text-ink">{section.heading}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
