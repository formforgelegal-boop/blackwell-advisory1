export type ServicePage = {
  slug:
    | "employment-tribunal-prevention"
    | "hr-compliance-review"
    | "workplace-dispute-advisory"
    | "redundancy-procedure-advice";
  title: string;
  hero: string;
  problem: string;
  involves: string[];
  whatYouGet: string[];
  whoFor: string[];
  process: string[];
  commercialClosing: string;
  cardHeadline: string;
  cardDescription: string;
  cardBullets: string[];
  featured?: boolean;
  cardCta: string;
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "employment-tribunal-prevention",
    title: "Employment Tribunal Prevention",
    hero: "Prevent costly tribunal claims before they start with fixed-scope, practical employment risk advisory for UK SMEs.",
    problem:
      "Most tribunal exposure builds long before a claim is filed: inconsistent contracts, uneven disciplinary practice, and weak management records reduce your ability to defend decisions commercially and legally.",
    involves: [
      "Contract and policy risk review focused on likely tribunal pressure points.",
      "Disciplinary and grievance process alignment against ACAS-consistent standards.",
      "Manager escalation framework for high-risk conduct, capability, and exit situations.",
    ],
    whatYouGet: [
      "A clear risk map showing where current employment exposure is concentrated.",
      "Prioritised remediation actions with practical implementation sequence.",
      "Stronger documentation discipline and decision consistency across managers.",
    ],
    whoFor: [
      "SMEs with recurring people-management risk or active pre-dispute pressure.",
      "Leadership teams that need preventative support before formal claims emerge.",
    ],
    process: [
      "Identify risk: targeted intake of contracts, policies, and recent employee-relations activity.",
      "Apply structured framework: assess process quality, records, and escalation controls.",
      "Deliver defensible outcome: issue practical actions, templates, and leadership guidance.",
    ],
    commercialClosing:
      "Done early, this work is usually a fraction of the cost and management drag of a single defended tribunal claim.",
    cardHeadline: "Prevent costly tribunal claims before they start",
    cardDescription: "Practical employment risk work for SMEs that want to avoid disputes escalating into claims.",
    cardBullets: [
      "Contract and policy risk review",
      "Disciplinary and grievance process alignment",
      "Manager escalation framework",
    ],
    featured: true,
    cardCta: "View service →",
    faqs: [
      {
        question: "Is this legal representation?",
        answer: "No. We provide commercial advisory support and highlight where solicitor-led representation is needed.",
      },
      {
        question: "How quickly can we start?",
        answer: "Most engagements begin within one week of scope confirmation.",
      },
    ],
  },
  {
    slug: "hr-compliance-review",
    title: "HR Compliance Review",
    hero: "Find and fix hidden HR compliance risks through a focused review of contracts, policies, and management process quality.",
    problem:
      "Growing SMEs often operate with mixed contract versions, policy drift, and unclear process ownership. That creates hidden legal exposure and slows confident decision-making.",
    involves: [
      "Full documentation audit across contracts, handbook, and key people-process controls.",
      "Policy and contract gap analysis prioritised by legal and operational impact.",
      "Remediation planning aligned to available internal capacity.",
    ],
    whatYouGet: [
      "A ranked compliance risk view rather than a generic compliance checklist.",
      "Updated wording priorities for contracts and core policies.",
      "A practical action plan leadership can execute without unnecessary complexity.",
    ],
    whoFor: [
      "SMEs scaling headcount or formalising people operations.",
      "Leadership teams preparing for investment, restructuring, or governance scrutiny.",
    ],
    process: [
      "Identify risk: audit current documentation and process ownership.",
      "Apply structured framework: classify gaps by urgency, impact, and implementation effort.",
      "Deliver defensible outcome: issue a clear remediation plan and support rollout sequencing.",
    ],
    commercialClosing:
      "A strong compliance baseline reduces avoidable disputes, protects management time, and improves decision confidence as you scale.",
    cardHeadline: "Find and fix hidden HR compliance risks",
    cardDescription: "A focused review of your contracts, policies, and processes with clear, prioritised actions.",
    cardBullets: [
      "Full documentation audit",
      "Policy and contract gap analysis",
      "Action plan for remediation",
    ],
    cardCta: "View service →",
    faqs: [
      {
        question: "Can you work with our existing HR team?",
        answer: "Yes. We slot into existing teams and provide specialist risk clarity.",
      },
      {
        question: "Do you rewrite all policies?",
        answer: "Only where needed. We focus on high-impact remediation first.",
      },
    ],
  },
  {
    slug: "workplace-dispute-advisory",
    title: "Workplace Dispute Advisory",
    hero: "Resolve employee issues without unnecessary escalation through measured, commercially focused advisory support.",
    problem:
      "Employee relations issues become expensive when responses are inconsistent, evidence is weak, or managers act before the facts and risk position are clear.",
    involves: [
      "Guidance on live employee issues and immediate response options.",
      "Investigation and documentation support to strengthen evidence quality.",
      "Outcome strategy and risk positioning before decisions are finalised.",
    ],
    whatYouGet: [
      "A clearer response plan for sensitive disputes and grievances.",
      "Better quality records for negotiation or formal defence if needed.",
      "Management support to reduce reactive decisions under pressure.",
    ],
    whoFor: [
      "SMEs handling active disputes, grievances, or capability conflict.",
      "Leaders who need fast, commercially grounded guidance on live issues.",
    ],
    process: [
      "Identify risk: rapid issue triage and fact pattern review.",
      "Apply structured framework: test options against legal, commercial, and operational risk.",
      "Deliver defensible outcome: support decision execution and evidence quality through resolution.",
    ],
    commercialClosing:
      "Early structure in live disputes usually lowers settlement pressure and protects leadership focus.",
    cardHeadline: "Resolve employee issues without unnecessary escalation",
    cardDescription: "Measured, commercially focused support for handling disputes before they become expensive.",
    cardBullets: [
      "Guidance on live employee issues",
      "Investigation and documentation support",
      "Outcome strategy and risk positioning",
    ],
    cardCta: "View service →",
    faqs: [
      {
        question: "Can this run alongside external solicitors?",
        answer: "Yes. We complement legal counsel with commercial risk structuring.",
      },
      {
        question: "Is this only for serious disputes?",
        answer: "No. Early intervention is often where value is highest.",
      },
    ],
  },
  {
    slug: "redundancy-procedure-advice",
    title: "Redundancy Procedure Advice",
    hero: "Run redundancy processes with confidence and control through clear procedural guidance and practical decision support.",
    problem:
      "Redundancy risk rises quickly where planning, consultation records, and decision rationale are inconsistent. Process errors create avoidable claim exposure and operational delay.",
    involves: [
      "Process design and planning based on your restructuring scope and timeline.",
      "Documentation and consultation guidance for each key stage.",
      "Live support through sensitive restructuring decisions and communications.",
    ],
    whatYouGet: [
      "A clearer restructuring pathway with defensible process checkpoints.",
      "Improved documentation quality for consultation and decision outcomes.",
      "Greater leadership confidence during high-impact workforce change.",
    ],
    whoFor: [
      "SMEs preparing role reductions, team redesign, or cost-led restructuring.",
      "Leaders who need process integrity without overcomplicating delivery.",
    ],
    process: [
      "Identify risk: review current plan, documentation readiness, and timeline pressure.",
      "Apply structured framework: align consultation, selection, and communications process.",
      "Deliver defensible outcome: support implementation with clearer records and governance.",
    ],
    commercialClosing:
      "Structured redundancy delivery reduces legal downside while helping businesses implement change without avoidable disruption.",
    cardHeadline: "Run redundancy processes with confidence and control",
    cardDescription: "Clear procedural guidance to reduce legal risk and support defensible decision-making.",
    cardBullets: [
      "Process design and planning",
      "Documentation and consultation guidance",
      "Support through live restructuring",
    ],
    cardCta: "View service →",
    faqs: [
      {
        question: "Can you support group consultation planning?",
        answer: "Yes, we can help structure the process and evidence trail.",
      },
      {
        question: "What if we already started the process?",
        answer: "We can assess current position and stabilise the remaining stages.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
