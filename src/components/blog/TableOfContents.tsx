import type { BlogSection } from "@/data/blog";

export default function TableOfContents({ sections }: { sections: BlogSection[] }) {
  return (
    <aside className="bg-cream border border-muted rounded-xl p-6">
      <h2 className="font-serif text-xl font-bold text-navy mb-4">Contents</h2>
      <ul className="space-y-2 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-navy/70 hover:text-gold transition-colors">
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
