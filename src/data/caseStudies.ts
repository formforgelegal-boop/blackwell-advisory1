export type CaseStudy = {
  slug: string;
  title: string;
  clientLabel: string;
  sector: string;
  summary: string;
  executiveSummary: string;
  heroImage: string;
  keyResults: string[];
  clientContext: string[];
  problem: string[];
  whatWeDid: string[];
  outcome: string[];
  commercialImpact: string[];
  relatedServices: string[];
  relatedPosts: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-site-retail-tribunal-risk-reset",
    title: "Retail employer stabilised employee relations risk across four sites",
    clientLabel: "Anonymised UK Retail Employer · 120 staff",
    sector: "Retail operations",
    summary:
      "A fast-growing retail employer with inconsistent people processes engaged Blackwell Advisory to improve tribunal readiness, tighten documentation standards, and restore leadership confidence.",
    executiveSummary:
      "Over a focused 12-week advisory programme, the business moved from reactive dispute handling to a consistent, manager-led process model across all locations.",
    heroImage:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "4 sites moved onto one disciplinary and grievance operating standard",
      "2 live disputes resolved on controlled commercial terms",
      "Estimated £65k downside avoided across projected dispute scenarios",
    ],
    clientContext: [
      "The client operated multiple customer-facing sites with different local management practices and legacy documentation.",
      "Rapid hiring had outpaced governance, creating variation in contracts, warning standards, and escalation quality.",
    ],
    problem: [
      "Leadership faced two active disputes and had limited confidence in whether records would stand up under scrutiny.",
      "Policies existed, but process execution varied materially between locations, increasing unfairness and inconsistency risk.",
    ],
    whatWeDid: [
      "Ran a targeted contract and policy gap assessment against a structured tribunal risk framework.",
      "Introduced a practical escalation playbook for disciplinaries and grievances with clear stage-gates.",
      "Prioritised high-risk clause remediation and evidence standards for line managers in customer-facing teams.",
    ],
    outcome: [
      "The business established a single process baseline across all sites and improved consistency in decision records.",
      "Management teams gained confidence in handling sensitive employee issues without defaulting to reactive settlement pressure.",
    ],
    commercialImpact: [
      "Reduced management time spent firefighting process disputes.",
      "Improved negotiating position in active matters through stronger documentation discipline.",
      "Created a repeatable governance model for future expansion.",
    ],
    relatedServices: ["/employment-tribunal-prevention", "/workplace-dispute-advisory"],
    relatedPosts: ["average-cost-of-an-employment-tribunal-in-the-uk", "documents-employers-need-to-reduce-tribunal-risk"],
  },
  {
    slug: "engineering-sme-dismissal-process-overhaul",
    title: "Engineering SME rebuilt dismissal process ahead of restructure",
    clientLabel: "Anonymised Engineering SME · 75 staff",
    sector: "Engineering and manufacturing",
    summary:
      "Before implementing role changes, an engineering SME needed a defensible dismissal framework that managers could execute consistently under operational pressure.",
    executiveSummary:
      "Blackwell Advisory redesigned the practical dismissal workflow, introduced evidence standards, and supported leadership through a sensitive restructuring phase.",
    heroImage:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "Documented stage-gates introduced for investigation, hearing, and appeal",
      "Manager decision-letter quality standardised before restructure activity",
      "Restructure process completed with materially lower procedural risk",
    ],
    clientContext: [
      "The business was preparing for role redesign and selective exits due to operational and demand changes.",
      "Leadership wanted to act decisively while avoiding unnecessary claim exposure during a high-sensitivity period.",
    ],
    problem: [
      "There was no consistent investigation template, hearing structure, or written outcome standard.",
      "Managers were making people decisions in different ways, creating inconsistency and avoidable legal vulnerability.",
    ],
    whatWeDid: [
      "Mapped existing practices against common unfair dismissal failure points in SME tribunals.",
      "Implemented concise process controls for investigation scope, hearing documentation, and appeal integrity.",
      "Delivered decision support for managers handling difficult conversations and high-impact outcomes.",
    ],
    outcome: [
      "Leadership executed planned actions with stronger procedural discipline and clearer supporting records.",
      "The business moved from ad-hoc management judgement to a repeatable process that aligned legal risk and operational reality.",
    ],
    commercialImpact: [
      "Reduced probability of avoidable procedural claims during restructuring.",
      "Protected leadership time through faster, clearer decision pathways.",
      "Improved confidence for future capability and conduct decisions.",
    ],
    relatedServices: ["/redundancy-procedure-advice", "/employment-tribunal-prevention"],
    relatedPosts: ["how-to-avoid-unfair-dismissal-claims"],
  },
  {
    slug: "professional-services-hr-compliance-foundation",
    title: "Professional services business built a defensible HR compliance baseline",
    clientLabel: "Anonymised Professional Services Business · 48 staff",
    sector: "Professional services",
    summary:
      "A growing professional services firm needed to modernise contracts and policy governance so employee relations decisions could be made with greater clarity and control.",
    executiveSummary:
      "Through a structured compliance review and phased implementation plan, Blackwell Advisory helped the firm replace policy drift with an auditable operating rhythm.",
    heroImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "Full contract and policy baseline refreshed in a 90-day delivery window",
      "Quarterly governance cadence introduced with named internal ownership",
      "Higher confidence in grievance, capability, and conduct decision-making",
    ],
    clientContext: [
      "The firm had scaled headcount quickly across advisory teams and support functions.",
      "Core documentation had not kept pace with growth, leaving different cohorts on mixed contract standards.",
    ],
    problem: [
      "Outdated contracts, inconsistent handbook language, and weak review cadence created compounding compliance risk.",
      "Leadership lacked a clear view of which documentation gaps presented the most immediate legal and commercial exposure.",
    ],
    whatWeDid: [
      "Completed a full compliance checklist audit with priority scoring by legal and operational impact.",
      "Updated key contracts, policy wording, and procedure references to align with current practice.",
      "Established a lightweight quarterly review structure to maintain compliance without unnecessary bureaucracy.",
    ],
    outcome: [
      "The business now operates on a coherent contract and policy baseline with clearer internal accountability.",
      "People decisions are supported by better documentation and more consistent process application.",
    ],
    commercialImpact: [
      "Reduced risk of reactive legal spend from avoidable documentation failures.",
      "Improved leadership confidence in scaling workforce decisions.",
      "Created sustainable compliance discipline suitable for continued growth.",
    ],
    relatedServices: ["/hr-compliance-review", "/workplace-dispute-advisory"],
    relatedPosts: ["hr-compliance-checklist-for-smes-uk", "documents-employers-need-to-reduce-tribunal-risk"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
