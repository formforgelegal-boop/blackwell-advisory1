import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Blackwell Advisory helps UK SMEs prevent employment disputes through practical risk-focused advisory support.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-16">
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight mb-6">Built for practical employment risk reduction.</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">We support UK SMEs with clear, commercially grounded advisory work that helps prevent avoidable disputes and tribunal exposure.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6 space-y-6 text-navy/75">
          <h2 className="font-serif text-3xl font-bold text-navy">About the Founder</h2>
          <p>This section is intentionally written as placeholder founder copy and should be updated with verified biography details before launch.</p>
          <p>Blackwell Advisory was built to close a market gap: SMEs need specialist employment risk support that is faster and clearer than traditional law-firm workflows.</p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            "Practical employment advisory focus",
            "Designed for UK SMEs and owner-managed teams",
            "Preventative, risk-based approach before disputes escalate",
          ].map((value) => (
            <div key={value} className="bg-white border border-muted rounded-xl p-6">
              <h3 className="font-semibold text-navy">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-serif text-4xl text-white font-bold mb-4">Need a clear view of your current risk?</h2>
          <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded font-semibold">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  );
}
