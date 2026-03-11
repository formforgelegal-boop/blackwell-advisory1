import type { Metadata } from "next";
import MultiStepForm from "@/components/MultiStepForm";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description: "Book your free 15-minute discovery call with Blackwell Advisory.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line pt-28 pb-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="text-xs uppercase tracking-[0.16em] text-ink/50">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-ink">Book your discovery call.</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">15 minutes. No obligation. We will tell you frankly whether a risk review is the right fit for your business.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[1fr_360px]">
          <div className="max-w-2xl">
            <MultiStepForm />
            <p className="mt-6 border-t border-line pt-6 text-sm text-ink/60">Prefer email? <a href="mailto:reach@blackwelladvisory.co.uk" className="text-ink hover:text-accent">reach@blackwelladvisory.co.uk</a></p>
          </div>
          <aside className="h-fit border border-line bg-stone p-8 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl text-ink">What to expect</h2>
            <ol className="mt-6 space-y-5 text-sm text-ink/70">
              <li><span className="mr-2 text-ink">01</span>Submit your details and current priorities.</li>
              <li><span className="mr-2 text-ink">02</span>We confirm a suitable time within one business day.</li>
              <li><span className="mr-2 text-ink">03</span>You get a direct recommendation on next steps.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
