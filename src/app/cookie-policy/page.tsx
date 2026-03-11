import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[860px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
        <h1 className="font-serif text-4xl font-bold mb-6">Cookie Policy</h1>
        <div className="space-y-4 text-navy/75">
          <p>This placeholder cookie policy should be updated once analytics and tracking tools are finalised.</p>
          <p>Document the cookie categories used, legal basis, retention period, and opt-out mechanisms.</p>
        </div>
      </div>
    </section>
  );
}
