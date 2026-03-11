export type FaqItem = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="bg-cream rounded-xl border border-muted p-8 md:p-10">
      <h2 className="font-serif text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-muted pb-4">
            <summary className="font-semibold text-navy cursor-pointer list-none flex justify-between items-center gap-4">
              {faq.question}
              <span className="text-gold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-navy/70 mt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
