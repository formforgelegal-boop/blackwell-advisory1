import type { Metadata } from "next";
import ServicePageTemplate from "@/components/common/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const service = getServiceBySlug("workplace-dispute-advisory");

export const metadata: Metadata = {
  title: "Workplace Dispute Advisory",
  description: "Commercially focused support for UK employers handling workplace disputes and grievance risk.",
  alternates: { canonical: `${SITE_URL}/workplace-dispute-advisory` },
};

export default function WorkplaceDisputeAdvisoryPage() {
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
