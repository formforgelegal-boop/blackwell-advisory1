import type { Metadata } from "next";
import ServicePageTemplate from "@/components/common/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";
import { SITE_URL } from "@/lib/site";

const service = getServiceBySlug("hr-compliance-review");

export const metadata: Metadata = {
  title: "HR Compliance Review",
  description: "Structured HR compliance review for UK SMEs to reduce hidden employment risk.",
  alternates: { canonical: `${SITE_URL}/hr-compliance-review` },
};

export default function HrComplianceReviewPage() {
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
