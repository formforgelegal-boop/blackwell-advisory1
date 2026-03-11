import type { Metadata } from "next";
import MultiStepForm from "@/components/MultiStepForm";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book your free 15-minute discovery call with Blackwell Advisory. We'll tell you honestly whether an employment contract risk review makes sense for your business.",
  openGraph: {
    title: "Book a Discovery Call | Blackwell Advisory",
    description:
      "Free. 15 minutes. We'll tell you honestly whether a risk review makes sense for your business.",
    url: "https://www.blackwelladvisory.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-navy pt-16">
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight mb-4">
            Book Your Discovery Call
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto">
            15 minutes. Free. We&apos;ll tell you whether a risk review makes
            sense for your business — and if it doesn&apos;t, we&apos;ll say
            so.
          </p>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Form */}
            <div className="max-w-xl">
              <MultiStepForm />

              <div className="mt-8 pt-8 border-t border-muted">
                <p className="text-navy/50 text-sm">
                  Prefer email?{" "}
                  <a
                    href="mailto:reach@blackwelladvisory.co.uk"
                    className="text-navy hover:text-gold transition-colors font-medium"
                  >
                    reach@blackwelladvisory.co.uk
                  </a>
                </p>
                <p className="text-navy/40 text-sm mt-2">
                  We respond to all enquiries within one business day.
                </p>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-cream rounded-xl border border-muted p-8 h-fit lg:sticky lg:top-24">
              <h2 className="font-serif text-xl font-bold text-navy mb-8">
                What to Expect
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-gold w-8 shrink-0 leading-tight">
                    01
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      You submit this form
                    </p>
                    <p className="text-navy/55 text-sm leading-relaxed">
                      A few quick questions to help us prepare.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-gold w-8 shrink-0 leading-tight">
                    02
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      We confirm a 15-minute call within one business day
                    </p>
                    <p className="text-navy/55 text-sm leading-relaxed">
                      We&apos;ll reach out to schedule at a time that suits
                      you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-gold w-8 shrink-0 leading-tight">
                    03
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      We tell you honestly whether the review makes sense
                    </p>
                    <p className="text-navy/55 text-sm leading-relaxed">
                      No pressure. No sales pitch.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-navy/40 text-sm italic mt-8 leading-relaxed">
                If it&apos;s not the right fit, we&apos;ll tell you. We&apos;d
                rather lose the fee than waste your time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
