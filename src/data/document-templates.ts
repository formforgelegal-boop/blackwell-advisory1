export interface DocumentTemplate {
  slug: string;
  name: string;
  description: string;
  category: "landlord" | "employer" | "business";
  formPath: string; // deep-link into the form flow
}

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  // ── Landlord ──────────────────────────────────────────────
  {
    slug: "assured-shorthold-tenancy-agreement",
    name: "Assured Shorthold Tenancy Agreement",
    description: "Standard AST for a fixed-term residential letting under the Housing Act 1988.",
    category: "landlord",
    formPath: "/dashboard/documents/new/assured-shorthold-tenancy-agreement",
  },
  {
    slug: "assured-periodic-tenancy-agreement",
    name: "Assured Periodic Tenancy Agreement",
    description: "Rolling week-by-week or month-by-month tenancy agreement.",
    category: "landlord",
    formPath: "/dashboard/documents/new/assured-periodic-tenancy-agreement",
  },
  {
    slug: "section-13-rent-increase-notice",
    name: "Section 13 Rent Increase Notice",
    description: "Formal notice to increase rent on a periodic assured tenancy.",
    category: "landlord",
    formPath: "/dashboard/documents/new/section-13-rent-increase-notice",
  },
  {
    slug: "section-21-notice",
    name: "Section 21 Notice",
    description: "No-fault notice requiring possession at the end of a fixed term.",
    category: "landlord",
    formPath: "/dashboard/documents/new/section-21-notice",
  },
  {
    slug: "section-8-notice",
    name: "Section 8 Notice",
    description: "Notice seeking possession citing specific grounds under Schedule 2 of the Housing Act 1988.",
    category: "landlord",
    formPath: "/dashboard/documents/new/section-8-notice",
  },
  {
    slug: "tenancy-deposit-prescribed-information",
    name: "Tenancy Deposit Prescribed Information",
    description: "Prescribed information notice required within 30 days of receiving a deposit.",
    category: "landlord",
    formPath: "/dashboard/documents/new/tenancy-deposit-prescribed-information",
  },
  {
    slug: "property-inspection-report",
    name: "Property Inspection Report",
    description: "Periodic mid-tenancy inspection report recording condition and any issues.",
    category: "landlord",
    formPath: "/dashboard/documents/new/property-inspection-report",
  },
  {
    slug: "rent-arrears-letter",
    name: "Rent Arrears Warning Letter",
    description: "Formal letter notifying a tenant of outstanding rent and next steps.",
    category: "landlord",
    formPath: "/dashboard/documents/new/rent-arrears-letter",
  },
  {
    slug: "check-in-inventory",
    name: "Check-In Inventory",
    description: "Detailed schedule of condition at the start of a tenancy.",
    category: "landlord",
    formPath: "/dashboard/documents/new/check-in-inventory",
  },
  {
    slug: "check-out-condition-report",
    name: "Check-Out Condition Report",
    description: "End-of-tenancy report comparing condition to the check-in inventory.",
    category: "landlord",
    formPath: "/dashboard/documents/new/check-out-condition-report",
  },
  {
    slug: "landlord-gas-safety-checklist",
    name: "Landlord Gas Safety Checklist",
    description: "Annual gas safety inspection record required under the Gas Safety Regulations 1998.",
    category: "landlord",
    formPath: "/dashboard/documents/new/landlord-gas-safety-checklist",
  },
  {
    slug: "tenancy-agreement-addendum",
    name: "Tenancy Agreement Addendum",
    description: "Supplementary clauses to attach to an existing tenancy agreement.",
    category: "landlord",
    formPath: "/dashboard/documents/new/tenancy-agreement-addendum",
  },
];

export const TEMPLATE_MAP = new Map<string, DocumentTemplate>(
  DOCUMENT_TEMPLATES.map((t) => [t.slug, t]),
);

/** All template slugs grouped by package slug. */
export const PACKAGE_TEMPLATE_SLUGS: Record<string, string[]> = {
  landlord: DOCUMENT_TEMPLATES.filter((t) => t.category === "landlord").map((t) => t.slug),
  employer: DOCUMENT_TEMPLATES.filter((t) => t.category === "employer").map((t) => t.slug),
  "business-startup": DOCUMENT_TEMPLATES.filter((t) => t.category === "business").map((t) => t.slug),
};
