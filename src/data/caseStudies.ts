export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  image: string;
  keyResults: string[];
  clientContext: string[];
  problem: string;
  actions: string[];
  outcome: string;
  commercialImpact: string[];
  cta: string;
  relatedServices: string[];
  relatedPosts: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-site-retail-tribunal-risk-reset",
    title: "Reducing tribunal exposure across a four-site retail operation",
    label: "Anonymised UK retail employer · 120 staff",
    summary:
      "A growing retail employer faced inconsistent contracts and ad-hoc disciplinary handling across multiple sites, creating active disputes and significant settlement risk.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "£65k downside avoided",
      "2 disputes resolved",
      "4-site framework standardised",
    ],
    clientContext: [
      "UK retail employer",
      "4 locations",
      "~120 staff",
      "Customer-facing workforce with inconsistent management practices",
    ],
    problem:
      "The business had inconsistent contracts, no standardised disciplinary process, and weak documentation. Two active disputes had already escalated, and leadership had low confidence in defending future claims.",
    actions: [
      "Conducted contract and policy gap analysis across all sites",
      "Identified high-risk clauses and inconsistent practices",
      "Introduced standardised disciplinary and grievance framework",
      "Built manager escalation playbook",
      "Prioritised remediation for high-risk teams",
      "Supported leadership on live disputes",
    ],
    outcome:
      "A consistent employment framework was implemented across all locations, improving evidence quality and decision-making. Both active disputes were resolved with controlled commercial outcomes.",
    commercialImpact: [
      "Estimated £65k downside avoided",
      "Reduced likelihood of tribunal escalation",
      "Improved management confidence across sites",
    ],
    cta: "Reduce tribunal risk before issues escalate →",
    relatedServices: ["/employment-tribunal-prevention", "/workplace-dispute-advisory"],
    relatedPosts: [
      "average-cost-of-an-employment-tribunal-in-the-uk",
      "documents-employers-need-to-reduce-tribunal-risk",
    ],
  },
  {
    slug: "engineering-sme-dismissal-process-overhaul",
    title: "Rebuilding dismissal process before a restructuring programme",
    label: "Anonymised engineering SME · 75 staff",
    summary:
      "An engineering SME preparing for role exits lacked consistent investigation and decision-making processes, creating legal risk ahead of a planned restructure.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "Process standardised before restructure",
      "Documentation quality improved",
      "Reduced unfair dismissal risk",
    ],
    clientContext: [
      "UK engineering SME",
      "~75 staff",
      "Operationally complex roles",
      "Planned restructuring",
    ],
    problem:
      "The business intended to exit roles but had no consistent investigation framework, unclear documentation standards, and informal decision-making, creating high risk of unfair dismissal claims.",
    actions: [
      "Designed structured investigation framework",
      "Introduced documentation standards",
      "Built evidence-gathering and decision-making process",
      "Worked directly with leadership on live cases",
      "Provided practical manager guidance",
    ],
    outcome:
      "Dismissal processes were aligned to a consistent and defensible standard, allowing leadership to proceed with restructuring confidently.",
    commercialImpact: [
      "Reduced exposure to unfair dismissal claims",
      "Avoided delays to restructuring",
      "Lower reactive legal cost risk",
    ],
    cta: "Planning role exits? Get the process right first →",
    relatedServices: ["/redundancy-procedure-advice", "/employment-tribunal-prevention"],
    relatedPosts: ["how-to-avoid-unfair-dismissal-claims"],
  },
  {
    slug: "professional-services-hr-compliance-foundation",
    title: "Creating a defensible HR compliance baseline after rapid growth",
    label: "Anonymised professional services business · 48 staff",
    summary:
      "A fast-growing firm had outpaced its HR documentation, leaving contracts outdated and policies inconsistent across the business.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
    keyResults: [
      "Core HR baseline rebuilt",
      "Contracts and policies standardised",
      "Reduced compliance risk",
    ],
    clientContext: [
      "UK professional services firm",
      "~48 staff",
      "Rapid growth",
      "Limited HR infrastructure",
    ],
    problem:
      "Contracts were outdated, policies inconsistent, and expectations unclear. Growth had outpaced internal HR structure, increasing legal and operational risk.",
    actions: [
      "Conducted full HR documentation audit",
      "Identified gaps and inconsistencies",
      "Rebuilt contracts and core policies",
      "Standardised documentation across the business",
      "Provided implementation guidance",
    ],
    outcome:
      "A coherent, defensible HR baseline was established, aligning contracts and policies across the business and improving operational clarity.",
    commercialImpact: [
      "Reduced compliance-related risk",
      "Improved consistency across teams",
      "Stronger foundation for scaling",
    ],
    cta: "Stabilise your HR foundations as you grow →",
    relatedServices: ["/hr-compliance-review", "/workplace-dispute-advisory"],
    relatedPosts: [
      "hr-compliance-checklist-for-smes-uk",
      "documents-employers-need-to-reduce-tribunal-risk",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
