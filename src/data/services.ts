export type ServicePage = {
  slug:
    | "employment-tribunal-prevention"
    | "hr-compliance-review"
    | "workplace-dispute-advisory"
    | "redundancy-procedure-advice";
  title: string;
  hero: string;
  problem: string;
  includes: string[];
  whoFor: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "employment-tribunal-prevention",
    title: "Employment Tribunal Prevention",
    hero: "Reduce tribunal risk before claims become expensive.",
    problem:
      "Most employers face tribunal risk from inconsistent contracts, weak process records, and reactive dispute handling.",
    includes: ["Contract and policy risk scan", "High-risk clause remediation priorities", "Manager escalation guidance"],
    whoFor: ["SMEs with active people-management pressure", "Leadership teams wanting predictable risk controls"],
    process: ["Discovery and document intake", "Risk scoring against a 12-point framework", "Action plan and implementation support"],
    faqs: [
      { question: "Is this legal representation?", answer: "No. We provide commercial advisory support and highlight where solicitor-led representation is needed." },
      { question: "How quickly can we start?", answer: "Most engagements begin within one week of scope confirmation." },
    ],
  },
  {
    slug: "hr-compliance-review",
    title: "HR Compliance Review",
    hero: "Build a practical compliance baseline for a growing SME workforce.",
    problem: "Growth often outpaces HR documentation, creating hidden exposure across contracts, handbook wording, and manager execution.",
    includes: ["Contract consistency check", "Policy incorporation and hierarchy review", "Priority remediation roadmap"],
    whoFor: ["SMEs scaling headcount", "Operations and HR leaders preparing for audit or investment scrutiny"],
    process: ["Current-state assessment", "Gap and exposure scoring", "Prioritised implementation sprint"],
    faqs: [
      { question: "Can you work with our existing HR team?", answer: "Yes. We slot into existing teams and provide specialist risk clarity." },
      { question: "Do you rewrite all policies?", answer: "Only where needed. We focus on high-impact remediation first." },
    ],
  },
  {
    slug: "workplace-dispute-advisory",
    title: "Workplace Dispute Advisory",
    hero: "Manage workplace disputes with commercial control and lower legal downside.",
    problem: "Disputes escalate quickly when process discipline and documentation quality are inconsistent.",
    includes: ["Dispute triage and response strategy", "Evidence and chronology structuring", "Settlement and escalation risk support"],
    whoFor: ["Employers handling active grievances or conflict", "Leaders needing rapid decision support"],
    process: ["Rapid intake call", "Risk-position memo", "Decision support through resolution stage"],
    faqs: [
      { question: "Can this run alongside external solicitors?", answer: "Yes. We complement legal counsel with commercial risk structuring." },
      { question: "Is this only for serious disputes?", answer: "No. Early intervention is often where value is highest." },
    ],
  },
  {
    slug: "redundancy-procedure-advice",
    title: "Redundancy Procedure Advice",
    hero: "Plan and run redundancy processes with stronger fairness and defensibility.",
    problem: "Redundancy projects fail when consultation, scoring, and communication standards are not tightly managed.",
    includes: ["Redundancy process map", "Documentation and consultation templates", "Manager briefing for risk-sensitive meetings"],
    whoFor: ["SMEs restructuring teams", "Leaders preparing role reductions"],
    process: ["Scope and risk review", "Procedure design and communications", "Live support during consultation"],
    faqs: [
      { question: "Can you support group consultation planning?", answer: "Yes, we can help structure the process and evidence trail." },
      { question: "What if we already started the process?", answer: "We can assess current position and stabilise the remaining stages." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
