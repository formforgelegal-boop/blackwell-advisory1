import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { COMPANY_DETAILS } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
        <h1 className="font-serif text-4xl font-bold mb-6">Cookie Policy</h1>
        <div className="space-y-4 text-ink/75">
          <p>This placeholder cookie policy should be updated once analytics and tracking tools are finalised.</p>
          <p>Document the cookie categories used, legal basis, retention period, and opt-out mechanisms.</p>
          <p className="pt-4 text-xs text-ink/55">
            Registered office: {COMPANY_DETAILS.registeredOffice} · Company number: {COMPANY_DETAILS.companyNumber}
          </p>
        </div>
      </div>
    </section>
  );
}
