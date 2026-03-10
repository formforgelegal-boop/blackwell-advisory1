export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  problem: string;
  approach: string[];
  outcome: string;
  metrics?: string[];
  relatedServices: string[];
  relatedPosts: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-site-retail-tribunal-risk-reset",
    title: "Retail Employer Reduced Tribunal Exposure Across 4 Sites",
    clientType: "Anonymised UK retail employer (120 staff)",
    problem:
      "The business had inconsistent contracts and ad-hoc disciplinary handling, with two active disputes and high settlement anxiety.",
    approach: [
      "Ran contract and policy gap analysis against a structured risk framework.",
      "Introduced a manager escalation playbook for disciplinaries and grievances.",
      "Prioritised high-risk clause remediation for customer-facing teams.",
    ],
    outcome:
      "The employer moved to a consistent process baseline, improved evidence quality, and resolved both disputes with controlled commercial outcomes.",
    metrics: ["Estimated £65k downside avoided in projected dispute scenarios"],
    relatedServices: ["/employment-tribunal-prevention", "/workplace-dispute-advisory"],
    relatedPosts: ["employment-tribunal-process-for-small-uk-businesses"],
  },
  {
    slug: "engineering-sme-dismissal-process-overhaul",
    title: "Engineering SME Rebuilt Dismissal Process Before Restructure",
    clientType: "Anonymised engineering SME (75 staff)",
    problem:
      "Leadership planned role exits but had no consistent investigation or decision documentation standard.",
    approach: [
      "Mapped existing process against unfair dismissal risk points.",
      "Implemented clear stage gates for investigation, hearing, and outcome letters.",
      "Delivered concise manager briefing for high-stakes conversations.",
    ],
    outcome:
      "Redundancy and capability actions were delivered with stronger process integrity and reduced claim risk during a sensitive restructuring period.",
    relatedServices: ["/redundancy-procedure-advice"],
    relatedPosts: ["how-to-avoid-unfair-dismissal-claims"],
  },
  {
    slug: "professional-services-hr-compliance-foundation",
    title: "Professional Services Firm Built a Defensible HR Compliance Baseline",
    clientType: "Anonymised professional services business (48 staff)",
    problem:
      "Rapid growth outpaced HR documentation, leaving outdated contracts and policy drift.",
    approach: [
      "Delivered a full compliance checklist audit with priority scoring.",
      "Updated contracts, handbook references, and key procedure language.",
      "Set a quarterly review cadence to maintain compliance momentum.",
    ],
    outcome:
      "The firm now operates with a documented compliance rhythm and materially improved confidence around employee relations decisions.",
    metrics: ["90-day implementation across contracts, handbook, and procedure controls"],
    relatedServices: ["/hr-compliance-review"],
    relatedPosts: ["hr-compliance-checklist-for-smes-uk"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
