import Link from "next/link";

export default function PrimaryCTA({
  title = "Need a clear view of your current employment risk?",
  description = "Book a short discovery call and we will outline practical next steps.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="rounded-md border border-line bg-stone p-8 md:p-10">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      <p className="mt-3 max-w-2xl text-ink/70">{description}</p>
      <Link href="/contact" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-accent/88">
        Book a Discovery Call
      </Link>
    </section>
  );
}
