import type { Metadata } from "next";
import Link from "next/link";
import { servicePages } from "@/data/services";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description: "Employment risk reduction services for UK SMEs.",
};

export default function ServicesPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="font-serif text-4xl font-bold text-navy mb-4">Services</h1>
        <p className="text-navy/70 max-w-2xl mb-10">Focused support for tribunal prevention, HR compliance, workplace disputes, and redundancy process risk.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {servicePages.map((service) => (
            <article key={service.slug} className="border border-muted rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">{service.title}</h2>
              <p className="text-navy/70 mb-4">{service.hero}</p>
              <Link href={`/${service.slug}`} className="text-sm font-semibold text-navy hover:text-gold">View service →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
