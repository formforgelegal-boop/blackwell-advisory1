import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]} />
        <h1 className="font-serif text-4xl font-bold mb-6">Terms and Conditions</h1>
        <div className="space-y-4 text-ink/75">
          <p>This placeholder should be replaced with formal terms reviewed by your legal advisor.</p>
          <p>Blackwell Advisory provides commercial advisory services and does not provide regulated legal representation.</p>
          <p>Scope, liability, and fee terms should be finalised in engagement documents.</p>
        </div>
      </div>
    </section>
  );
}
