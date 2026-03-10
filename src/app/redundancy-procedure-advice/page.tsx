import type { Metadata } from "next";
import ServicePageTemplate from "@/components/common/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const service = getServiceBySlug("redundancy-procedure-advice");

export const metadata: Metadata = {
  title: "Redundancy Procedure Advice",
  description: "Plan and run redundancy procedures with stronger fairness, process integrity, and lower claim risk.",
  alternates: { canonical: `${SITE_URL}/redundancy-procedure-advice` },
};

export default function RedundancyProcedureAdvicePage() {
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
