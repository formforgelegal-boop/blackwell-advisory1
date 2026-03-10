import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="font-serif text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-navy/75">
          <p>This placeholder policy should be replaced with your final legal text.</p>
          <p>We collect enquiry and form details to respond to requests and provide advisory services.</p>
          <p>Lawful basis, retention schedules, and processor lists should be confirmed by your legal/data protection advisor before publication.</p>
        </div>
      </div>
    </section>
  );
}
