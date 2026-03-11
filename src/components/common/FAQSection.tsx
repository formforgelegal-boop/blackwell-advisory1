export type FaqItem = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="border border-line bg-stone p-8 md:p-10">
      <h2 className="mb-8 font-serif text-3xl text-ink">Frequently Asked Questions</h2>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <details key={faq.question} className="border-b border-line pb-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
              {faq.question}
              <span className="text-accent">+</span>
            </summary>
            <p className="mt-3 text-ink/75">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
