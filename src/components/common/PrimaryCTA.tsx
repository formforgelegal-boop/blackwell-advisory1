import Link from "next/link";

export default function PrimaryCTA({
  title = "Ready to reduce employment risk?",
  description = "Book a free discovery call and get a practical view of your current exposure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy rounded-xl p-8 md:p-10 text-center text-white">
      <h2 className="font-serif text-3xl font-bold mb-3">{title}</h2>
      <p className="text-white/70 mb-8 max-w-2xl mx-auto">{description}</p>
      <Link
        href="/contact"
        className="inline-block bg-gold text-navy font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
      >
        Book a Discovery Call
      </Link>
    </section>
  );
}
