import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { COMPANY_DETAILS } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="font-serif text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-ink/75">
          <p>This placeholder policy should be replaced with your final legal text.</p>
          <p>We collect enquiry and form details to respond to requests and provide advisory services.</p>
          <p>Lawful basis, retention schedules, and processor lists should be confirmed by your legal/data protection advisor before publication.</p>
          <p className="pt-4 text-xs text-ink/55">
            Registered office: {COMPANY_DETAILS.registeredOffice} · Company number: {COMPANY_DETAILS.companyNumber}
          </p>
        </div>
      </div>
    </section>
  );
}
