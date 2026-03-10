import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RiskCalculatorForm from "@/components/lead/RiskCalculatorForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Employment Risk Calculator",
  description: "Assess your current employment risk profile in under 3 minutes.",
  alternates: { canonical: `${SITE_URL}/risk-calculator` },
};

export default function RiskCalculatorPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[820px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Risk Calculator" }]} />
        <h1 className="font-serif text-4xl font-bold text-navy mb-3">Employment Risk Calculator</h1>
        <p className="text-navy/70 mb-8">Answer a few practical questions to see your current risk band and recommended next step.</p>
        <RiskCalculatorForm />
      </div>
    </section>
  );
}
