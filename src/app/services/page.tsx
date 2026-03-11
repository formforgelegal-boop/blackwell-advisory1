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
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="font-serif text-5xl text-ink">Services</h1>
        <p className="mt-4 max-w-2xl text-ink/70">Focused support for tribunal prevention, HR compliance, workplace disputes and redundancy process risk.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {servicePages.map((service) => (
            <article key={service.slug} className="border-t border-line pt-6">
              <h2 className="font-serif text-3xl text-ink">{service.title}</h2>
              <p className="mt-3 text-ink/70">{service.hero}</p>
              <Link href={`/${service.slug}`} className="mt-4 inline-block text-sm text-ink/70 hover:text-ink">View service →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
