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
  metaDescription: string;
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
    featuredImage: "/globe.svg",
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
    excerpt: "Unfair dismissal risk is usually procedural. This checklist shows where employer process most often breaks down.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-01-23",
    category: "redundancy-and-dismissal-procedures",
    readingTime: "7 min read",
    featuredImage: "/window.svg",
    metaDescription: "Reduce unfair dismissal claim risk with practical dismissal process controls for UK employers.",
    relatedServices: ["/redundancy-procedure-advice", "/employment-tribunal-prevention"],
    sections: [
      { id: "common-errors", heading: "Where unfair dismissal risk starts", paragraphs: ["Most claims are triggered by weak process, not extreme conduct. Inconsistent warnings, poor records, and unclear rationale are common failure points."] },
      { id: "minimum-controls", heading: "Minimum process controls every SME needs", paragraphs: ["You need a defensible framework that managers can actually follow under pressure."], bullets: ["Up-to-date disciplinary and grievance policy", "Documented investigation standards", "Clear decision letters linked to evidence"] },
      { id: "manager-discipline", heading: "Manager discipline is a legal control", paragraphs: ["Good documentation and consistent language reduce contradiction risk in witness evidence.", "Train line managers to escalate early rather than improvising dismissals."] }
    ],
  },
  {
    slug: "average-cost-of-an-employment-tribunal-in-the-uk",
    title: "Average Cost of an Employment Tribunal in the UK for Employers",
    excerpt: "A realistic view of direct and hidden cost drivers in tribunal claims, plus how to control downside early.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-02-02",
    category: "employment-tribunal-risk",
    readingTime: "6 min read",
    featuredImage: "/file.svg",
    metaDescription: "Understand the likely cost of UK employment tribunal claims for employers and what drives settlement pressure.",
    relatedServices: ["/employment-tribunal-prevention"],
    sections: [
      { id: "cost-buckets", heading: "Cost categories employers underestimate", paragraphs: ["Legal fees are only one line item. Leadership time, workflow disruption, replacement hiring, and team morale can outweigh pure legal spend."], bullets: ["Direct legal spend", "Settlement sums", "Internal time and productivity loss"] },
      { id: "settlement-pressure", heading: "Why weak paperwork increases settlement cost", paragraphs: ["If your contracts, procedures, and notes are inconsistent, your leverage drops. You may pay to settle a claim that could otherwise be defended strongly."] },
      { id: "commercial-response", heading: "A commercial response model", paragraphs: ["Treat employment risk like any operational risk: assess likelihood, impact, controls, and remediation timetable."] }
    ],
  },
  {
    slug: "hr-compliance-checklist-for-smes-uk",
    title: "HR Compliance Checklist for SMEs in the UK",
    excerpt: "A practical compliance baseline for business owners who want fewer surprises and better tribunal resilience.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-02-11",
    category: "hr-compliance-for-smes",
    readingTime: "9 min read",
    featuredImage: "/next.svg",
    metaDescription: "Use this SME HR compliance checklist to strengthen contracts, policies, and risk controls.",
    relatedServices: ["/hr-compliance-review"],
    sections: [
      { id: "contract-foundations", heading: "Contract and documentation foundations", paragraphs: ["Start with consistent written contracts and role-appropriate clauses on notice, pay, variation, and restrictive covenants."] },
      { id: "policy-stack", heading: "Policy stack that should be live", paragraphs: ["Every SME should have a working policy framework that is understood by managers and accessible by staff."], bullets: ["Disciplinary and grievance", "Absence and flexible working", "Data protection and confidentiality"] },
      { id: "governance-rhythm", heading: "Set a governance rhythm", paragraphs: ["Quarterly policy reviews and annual contract audits are often enough for most SMEs unless risk events trigger immediate review."] }
    ],
    faqs: [
      { question: "Do SMEs need a full HR team to stay compliant?", answer: "Not necessarily. Many SMEs operate with lean teams but use periodic specialist advisory review for risk hotspots." }
    ],
  },
  {
    slug: "documents-employers-need-to-reduce-tribunal-risk",
    title: "What Documents Employers Need to Reduce Tribunal Risk",
    excerpt: "The core document set every employer should maintain to defend disputes and reduce preventable exposure.",
    author: "Blackwell Advisory Editorial",
    publishedAt: "2026-02-20",
    category: "workplace-disputes",
    readingTime: "7 min read",
    featuredImage: "/vercel.svg",
    metaDescription: "Find out which HR and employment documents UK employers need to reduce tribunal risk.",
    relatedServices: ["/workplace-dispute-advisory", "/hr-compliance-review"],
    sections: [
      { id: "core-pack", heading: "The minimum defensible document pack", paragraphs: ["You need coherent contracts, policies, investigation notes, and decision records that align with each other."] },
      { id: "quality-standard", heading: "Document quality standards", paragraphs: ["A document is only useful if it is current, clearly versioned, and actually used in practice.", "Outdated templates often create more risk than no template."] },
      { id: "implementation", heading: "Implementation without complexity", paragraphs: ["Use a practical owner model: one accountable internal owner, a clear review cadence, and specialist audit support when needed."] }
    ],
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
