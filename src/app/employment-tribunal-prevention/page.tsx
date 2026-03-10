import type { Metadata } from "next";
import ServicePageTemplate from "@/components/common/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const service = getServiceBySlug("employment-tribunal-prevention");

export const metadata: Metadata = {
  title: "Employment Tribunal Prevention",
  description: "Reduce tribunal claim exposure with practical employment risk controls for UK SMEs.",
  alternates: { canonical: `${SITE_URL}/employment-tribunal-prevention` },
};

export default function EmploymentTribunalPreventionPage() {
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
