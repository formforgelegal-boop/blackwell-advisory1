export type BlogFaq = { question: string; answer: string };

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: "employment-tribunal-risk" | "hr-compliance-for-smes" | "redundancy-and-dismissal-procedures" | "settlement-agreements" | "workplace-disputes";
  readingTime: string;
  featuredImage: string;
  metaTitle?: string;
  metaDescription: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  relatedServices: string[];
  sections: BlogSection[];
  faqs?: BlogFaq[];
};

export const categoryLabels: Record<BlogPost["category"], string> = {
  "employment-tribunal-risk": "Employment Tribunal Risk",
  "hr-compliance-for-smes": "HR Compliance for SMEs",
  "redundancy-and-dismissal-procedures": "Redundancy and Dismissal Procedures",
  "settlement-agreements": "Settlement Agreements",
  "workplace-disputes": "Workplace Disputes",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "employment-tribunal-process-for-small-uk-businesses",
    title: "Employment Tribunal Process for Small UK Businesses: A Practical Guide",
    excerpt: "A step-by-step breakdown of what happens in an employment tribunal claim and where SMEs usually lose control of risk.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-01-15",
    category: "employment-tribunal-risk",
    readingTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1400&q=80",
    metaDescription: "Learn the UK employment tribunal process for SMEs and how to reduce legal cost, management time, and claim exposure.",
    relatedServices: ["/employment-tribunal-prevention", "/workplace-dispute-advisory"],
    sections: [
      { id: "why-this-matters", heading: "Why the process matters commercially", paragraphs: ["For most SMEs, tribunal exposure is less about one hearing and more about cumulative cost: management distraction, legal spend, settlement pressure, and reputational drag.", "Understanding each stage allows you to make better decisions earlier and prevent avoidable escalation."] },
      { id: "core-stages", heading: "The core stages of a tribunal claim", paragraphs: ["Most claims move from ACAS Early Conciliation to ET1 claim submission, ET3 response, case management, disclosure, witness evidence, and hearing.", "The highest leverage point is normally the first response window and document quality."], bullets: ["Preserve evidence and chronology within 48 hours", "Align manager notes with contract terms", "Avoid informal statements that undermine the defence"] },
      { id: "prevention-links", heading: "How to reduce risk before a claim lands", paragraphs: ["Contract language, disciplinary process quality, and consistency of management conduct are the biggest controllable factors.", "Use structured reviews to find gaps before they become pleaded allegations."], bullets: ["Annual contract and handbook review", "Manager training on dismissal and grievance handling", "Escalation protocol for sensitive exits"] }
    ],
    faqs: [
      { question: "How long does an employment tribunal claim usually take?", answer: "Simple claims may resolve in months, but defended claims can run much longer depending on listing pressure and complexity." },
      { question: "Do most claims reach a hearing?", answer: "No. Many claims settle or narrow before final hearing, but poor preparation increases settlement pressure." }
    ],
  },
  {
    slug: "how-to-avoid-unfair-dismissal-claims",
    title: "How to Avoid Unfair Dismissal Claims in UK SMEs",
    excerpt: "Unfair dismissal risk is usually procedural. This guide covers the process controls UK SME employers need before, during, and after dismissal.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-03-12",
    category: "redundancy-and-dismissal-procedures",
    readingTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    metaTitle: "How to Avoid Unfair Dismissal Claims in UK SMEs | Blackwell Advisory",
    metaDescription: "Unfair dismissal risk is almost always procedural. Here is what SME employers need to do before, during, and after a dismissal to stay on the right side of a tribunal.",
    primaryKeyword: "how to avoid unfair dismissal claims UK",
    secondaryKeywords: ["unfair dismissal SME", "dismissal procedure UK employer", "avoiding employment tribunal", "fair dismissal process"],
    relatedServices: ["/redundancy-procedure-advice", "/employment-tribunal-prevention"],
    sections: [
      {
        id: "what-triggers-claims",
        heading: "What actually triggers an unfair dismissal claim?",
        paragraphs: [
          "Most unfair dismissal claims are not decided by whether the employer had a valid concern. They are decided by whether the employer followed a fair process. That procedural gap is where SMEs most often lose otherwise defensible cases.",
          "Employees with two or more years' service can usually bring unfair dismissal claims, with important exceptions for automatically unfair reasons such as whistleblowing, pregnancy, and asserting statutory rights.",
          "Tribunals assess whether your decision sat within the range of reasonable responses available to a reasonable employer. Good grounds handled badly still produce liability."
        ],
      },
      {
        id: "common-procedural-failures",
        heading: "Common procedural failures that increase tribunal exposure",
        paragraphs: [
          "Patterns are consistent across SME claims: no adequate warning before final warning, investigations without reliable notes, pre-judged outcomes before formal hearing, no meaningful appeal stage, and inconsistent treatment across teams.",
          "These failures are avoidable when managers use a documented process and escalate early in potentially contentious cases."
        ],
        bullets: [
          "Skipping investigation or running it informally",
          "Issuing dismissal outcomes without clear written reasons",
          "Failing to offer a right of appeal",
          "Treating similar conduct differently without explanation"
        ]
      },
      {
        id: "minimum-process-controls",
        heading: "The minimum process controls every SME needs",
        paragraphs: [
          "Start with a current disciplinary and grievance policy aligned with the ACAS Code of Practice. Non-compliance can increase awards by up to 25%.",
          "Investigation should be proportionate but genuine: gather facts, interview relevant people, keep contemporaneous notes, and document findings before any hearing takes place.",
          "Outcome letters must hold up under scrutiny. They should state the reason for decision, evidence relied upon, expectations (where relevant), and appeal rights."
        ],
        bullets: [
          "A compliant disciplinary and grievance policy",
          "Documented investigation standard",
          "Consistent hearing and decision templates",
          "A mandatory internal review before dismissal is confirmed"
        ]
      },
      {
        id: "manager-discipline",
        heading: "Manager behaviour is a legal control",
        paragraphs: [
          "Line managers often make sensitive people decisions under time pressure. Without clear guardrails, they improvise — and that creates legal exposure quickly.",
          "The practical solution is not over-complex training. It is disciplined escalation. Any matter likely to lead to formal warning or dismissal should trigger internal review before action.",
          "Consistency across the workforce is equally important. If one employee is dismissed for conduct another received an informal warning for, you need a clear, documented reason for that difference."
        ]
      }
    ],
    faqs: [
      {
        question: "Does an employee need two years' service to bring an unfair dismissal claim?",
        answer: "Generally yes, but important exceptions apply for automatically unfair reasons such as whistleblowing, pregnancy, and asserting statutory rights."
      },
      {
        question: "Can I dismiss someone during probation without process?",
        answer: "You can dismiss during probation, but a basic fair process is still recommended, including a chance to respond and a right of appeal."
      },
      {
        question: "What happens if I do not offer a right of appeal?",
        answer: "Failure to offer appeal is a procedural breach under the ACAS Code and can contribute to unfair dismissal findings and compensation uplift."
      },
      {
        question: "What counts as gross misconduct?",
        answer: "Gross misconduct is serious conduct that may justify dismissal without notice, such as theft, fraud, violence, or serious confidentiality breach, and should be defined clearly in policy."
      }
    ]
  },
  {
    slug: "average-cost-of-an-employment-tribunal-in-the-uk",
    title: "Average Cost of an Employment Tribunal in the UK for Employers",
    excerpt: "Employment tribunal costs for UK employers extend beyond legal fees. Understand direct and hidden cost drivers and how to reduce exposure early.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-03-13",
    category: "employment-tribunal-risk",
    readingTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1400&q=80",
    metaTitle: "Average Cost of an Employment Tribunal in the UK (2025) | Blackwell Advisory",
    metaDescription: "Employment tribunals cost UK employers far more than legal fees. Understand the real direct and hidden costs — and how to reduce exposure before a claim lands.",
    primaryKeyword: "average cost of employment tribunal UK",
    secondaryKeywords: ["employment tribunal costs employer", "how much does an employment tribunal cost", "defending tribunal claim UK SME"],
    relatedServices: ["/employment-tribunal-prevention", "/workplace-dispute-advisory"],
    sections: [
      {
        id: "real-costs-overview",
        heading: "What does an employment tribunal actually cost an employer?",
        paragraphs: [
          "There is no single figure, but for SMEs the range is commercially significant. Straightforward unfair dismissal claims that settle early often sit in a broad £8,000 to £20,000 all-in range. Claims progressing to a full hearing can reach £30,000 to £60,000 or more when legal spend, management time, and potential award are considered.",
          "Employers no longer pay tribunal issue fees. The financial exposure sits in defence costs, settlement pressure, and internal disruption rather than court filing charges.",
          "If you only budget for solicitor invoices, you will usually underestimate total exposure."
        ]
      },
      {
        id: "four-cost-categories",
        heading: "The four cost categories employers consistently underestimate",
        paragraphs: [
          "Direct legal spend rises as a claim matures from response drafting to disclosure, witness preparation, and hearing advocacy.",
          "Settlement sums are often paid for commercial reasons even where merits are arguable, especially when management bandwidth is stretched.",
          "Internal time cost is frequently substantial, with 20 to 40 days of cumulative management and HR effort in defended cases.",
          "Operational drag and morale effects in small teams are harder to price, but can be commercially material."
        ],
        bullets: [
          "Direct legal spend (solicitors, counsel, procedural work)",
          "Settlement payments and tax treatment considerations",
          "Management and HR productivity loss",
          "Disruption, retention risk, and team confidence impact"
        ]
      },
      {
        id: "paperwork-and-leverage",
        heading: "Why paperwork quality determines settlement leverage",
        paragraphs: [
          "The most reliable predictor of negotiating leverage is documentation quality. Clear contracts, followed procedures, contemporaneous notes, and coherent warning history materially change claimant strategy.",
          "When records are inconsistent or outdated, claimant solicitors push harder because they expect employers to settle to avoid hearing risk.",
          "When records are disciplined and internally coherent, weak claims are more likely to narrow early or settle on better terms."
        ]
      },
      {
        id: "commercial-response",
        heading: "A practical commercial response model",
        paragraphs: [
          "Treat tribunal exposure like operational risk: map likelihood, impact, controls, and remediation timeline. Prevention work before a live dispute is routinely cheaper than reactive defence.",
          "For most SMEs, the highest return actions are contract and policy refresh, manager process discipline, and early escalation protocol for sensitive exits.",
          "Fixed-scope employment advisory can reduce uncertainty by identifying weak points before they are tested under disclosure and witness evidence."
        ],
        bullets: [
          "Run an annual contract and policy review",
          "Set documented standards for investigations and decisions",
          "Escalate high-risk cases early for specialist input",
          "Keep records contemporaneous and auditable"
        ]
      }
    ],
    faqs: [
      {
        question: "Can an employee recover legal costs from an employer at tribunal?",
        answer: "Usually no. Tribunals generally follow a no-costs approach unless a party has behaved unreasonably, vexatiously, or disruptively."
      },
      {
        question: "What is the maximum unfair dismissal award?",
        answer: "For claims presented from April 2024, the compensatory award cap is the lower of one year's gross pay or £115,115, with the basic award calculated separately."
      },
      {
        question: "Does ACAS early conciliation affect cost?",
        answer: "Yes. Constructive ACAS engagement often resolves claims faster and at lower cost than defended hearings."
      },
      {
        question: "If I win at tribunal, have I avoided cost?",
        answer: "You may avoid a claimant award, but you still bear your own legal and management costs. Prevention remains cheaper than defence in most SME scenarios."
      }
    ]
  },
  {
    slug: "hr-compliance-checklist-for-smes-uk",
    title: "HR Compliance Checklist for SMEs in the UK",
    excerpt: "A practical HR compliance checklist for UK SMEs covering contracts, essential policies, documentation standards, and a sustainable review rhythm.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-03-11",
    category: "hr-compliance-for-smes",
    readingTime: "11 min read",
    featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    metaTitle: "HR Compliance Checklist for UK SMEs (2025) | Blackwell Advisory",
    metaDescription: "A practical HR compliance baseline for UK SMEs. Covers employment contracts, essential policies, documentation standards, and how to build a maintainable review rhythm.",
    primaryKeyword: "HR compliance checklist SME UK",
    secondaryKeywords: ["employment law compliance small business UK", "HR checklist employer UK", "SME employment compliance 2025"],
    relatedServices: ["/hr-compliance-review", "/employment-tribunal-prevention"],
    sections: [
      {
        id: "contracts-and-statements",
        heading: "Employment contracts and written statements",
        paragraphs: [
          "Every employee should receive a compliant written statement of particulars on or before day one. That is the statutory baseline, not the commercial finish line.",
          "Many SMEs rely on old templates that do not reflect current operations. Common gaps include weak variation clauses, outdated statutory references, holiday pay wording that ignores variable pay, and restrictive covenants that are either unenforceable or ineffective.",
          "A targeted contract audit is usually a high-return activity because contractual weaknesses are often exposed first in live disputes."
        ],
        bullets: [
          "Check notice, pay, and role-defining clauses",
          "Review variation wording for operational flexibility",
          "Stress-test restrictive covenants for enforceability",
          "Update holiday pay wording where variable pay applies"
        ]
      },
      {
        id: "core-policy-stack",
        heading: "The core policy stack every SME should have live",
        paragraphs: [
          "A practical policy framework does not need to be lengthy, but it does need to be coherent, current, and used consistently by managers.",
          "Policies should be clearly marked contractual or non-contractual. Accidental contractual wording can reduce flexibility and create unnecessary legal commitments."
        ],
        bullets: [
          "Disciplinary and grievance policy aligned to ACAS Code",
          "Absence and sickness management policy",
          "Flexible and remote working policy",
          "Data protection and confidentiality policy",
          "Equal opportunities and anti-harassment policy"
        ]
      },
      {
        id: "documentation-standards",
        heading: "Documentation standards that hold up under scrutiny",
        paragraphs: [
          "Tribunals place substantial weight on contemporaneous records. Documentation created at the time is far more persuasive than retrospective reconstruction.",
          "At minimum, employers should maintain signed contracts, disciplinary and grievance records, warning confirmations, absence records, and written records of contractual changes with employee acknowledgement.",
          "Retention schedules should align with both employment risk and UK GDPR obligations."
        ]
      },
      {
        id: "governance-rhythm",
        heading: "Build a governance rhythm that is sustainable",
        paragraphs: [
          "The most common SME failure mode is not lack of awareness but lack of cadence. Policies drift out of date as law and working practices change.",
          "A workable model is annual full review, quarterly light-touch checks, and immediate review after high-risk events such as grievances, dismissals, or disputes.",
          "You do not need a large in-house HR team to maintain this if ownership is clear and escalation pathways are disciplined."
        ]
      }
    ],
    faqs: [
      {
        question: "Do SMEs need a full HR team to stay compliant?",
        answer: "No. Many SMEs remain compliant with lean teams, clear foundations, and periodic specialist advisory input."
      },
      {
        question: "Can I use a template employment contract?",
        answer: "Templates can be a starting point, but they need tailoring to your workforce model, sector, and current legal position."
      },
      {
        question: "What is the risk of not having a written grievance procedure?",
        answer: "In successful claims, unreasonable failure to follow the ACAS Code can increase awards by up to 25% and weaken your evidence of fair process."
      },
      {
        question: "How often should contracts and policies be reviewed?",
        answer: "For most SMEs: annual full review, quarterly currency checks, and immediate updates after major legal or operational change."
      }
    ]
  },
  {
    slug: "documents-employers-need-to-reduce-tribunal-risk",
    title: "What Documents Employers Need to Reduce Tribunal Risk",
    excerpt: "The core document pack UK employers should maintain to reduce tribunal risk and defend employment claims with confidence.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-03-10",
    category: "workplace-disputes",
    readingTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1400&q=80",
    metaTitle: "What Documents Employers Need to Reduce Tribunal Risk | Blackwell Advisory",
    metaDescription: "Employment tribunal risk is reduced by having the right documents in the right condition. Here is the core document pack every UK employer should maintain — and what makes each one defensible.",
    primaryKeyword: "documents employers need tribunal risk UK",
    secondaryKeywords: ["employment tribunal documentation", "employer document checklist UK", "reduce tribunal risk SME", "employment records employer"],
    relatedServices: ["/workplace-dispute-advisory", "/hr-compliance-review"],
    sections: [
      {
        id: "why-document-pack-matters",
        heading: "Why document quality drives tribunal outcomes",
        paragraphs: [
          "When disclosure begins, documentation quality is tested immediately. SMEs with incomplete or inconsistent records lose leverage quickly, even where core facts are defensible.",
          "The required pack is not overly complex, but each document must be current, coherent, and actually used in practice."
        ]
      },
      {
        id: "core-document-pack",
        heading: "The core document pack every employer should maintain",
        paragraphs: [
          "Every employee should have signed, current terms that reflect role, pay, hours, and key obligations. Outdated or unsigned contracts create uncertainty that claimant representatives exploit.",
          "You also need a current disciplinary and grievance policy aligned to ACAS Code, plus contemporaneous investigation records, hearing notes, written outcomes, and documented appeal decisions.",
          "Sickness and absence records are essential where capability, attendance, or potential disability issues arise."
        ],
        bullets: [
          "Signed current employment contracts",
          "Dated disciplinary and grievance policy",
          "Investigation notes and evidence logs",
          "Formal hearing records and decision letters",
          "Appeal documentation",
          "Sickness and absence records"
        ]
      },
      {
        id: "defensible-document-standard",
        heading: "What makes a document defensible",
        paragraphs: [
          "Having a document is not enough. It should be version-controlled, internally consistent, and aligned with related policies and letters.",
          "Generic templates often introduce hidden risk through outdated statutory references or wording that conflicts with how your business actually operates.",
          "Consistency across employees also matters. Unexplained differences in treatment become evidence points in unfairness and discrimination arguments."
        ]
      },
      {
        id: "ownership-model",
        heading: "A practical ownership model for SMEs",
        paragraphs: [
          "A simple structure works best: one named internal owner, annual review cadence, and clear escalation to specialist advisory support before high-risk action.",
          "Annual checks should confirm contracts are current and signed, policies remain legally up to date, and disciplinary/grievance documentation from the prior year is complete and auditable.",
          "This approach keeps compliance practical and avoids reactive firefighting when a claim lands."
        ]
      }
    ],
    faqs: [
      {
        question: "How long should employment records be retained?",
        answer: "Most employment records are commonly retained for at least six years after employment ends, with specific categories (such as payroll and right-to-work) having separate minimum periods."
      },
      {
        question: "Should informal warnings be documented?",
        answer: "Yes. Brief dated notes of informal warnings help demonstrate that standards were communicated before formal action is taken."
      },
      {
        question: "What if only a few contracts are outdated?",
        answer: "That still creates two-tier risk and inconsistency. A targeted contract update can usually resolve this without reissuing every document."
      },
      {
        question: "Do policies need employee acknowledgement?",
        answer: "Signed acknowledgement of key policies is strongly recommended to evidence communication and reduce disputes about employee awareness."
      }
    ]
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogPost["category"]) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(slug: string, category: BlogPost["category"]) {
  return getAllPosts()
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, 3);
}
