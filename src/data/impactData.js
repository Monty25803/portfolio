// Machine-readable impact catalog driving the Impact constellation.
// Sourced from profile.js projects, experience, and certifications.

export const CATEGORY_META = {
  scale: { label: "Scale & Performance", color: "#22d3ee" },
  cost: { label: "Cost & Efficiency", color: "#10b981" },
  reliability: { label: "Reliability & Ops", color: "#a78bfa" },
  accuracy: { label: "Accuracy & Quality", color: "#eab308" },
  reach: { label: "Reach & Coverage", color: "#60a5fa" },
  systems: { label: "Systems Breadth", color: "#2dd4bf" },
  research: { label: "Research & Growth", color: "#f5ca40" },
};

export const CATEGORY_ORDER = [
  "scale",
  "cost",
  "reliability",
  "accuracy",
  "reach",
  "systems",
  "research",
];

// Per-project context (client + one-line description), keyed by `item`.
export const ITEM_META = {
  "Metropolis SCM": {
    client: "Metropolis Healthcare",
    context:
      "Live procurement platform — Django APIs + Angular frontend at scm.metropolisindia.com.",
  },
  "Medall Client Onboarding": {
    client: "Medall Corp",
    context:
      "Client channel onboarding portal — multi-step workflows at onboard.medallcorp.in.",
  },
  "Test Code Costing": {
    client: "Metropolis Healthcare",
    context:
      "Diagnostic test code costing module — centralized pricing and billing rules.",
  },
  PDCloudEx: {
    client: "PDCloudEx",
    context:
      "Enterprise healthcare systems — Django backends, Angular dashboards, production delivery.",
  },
  "AWS Cloud Foundations": {
    client: "Amazon Web Services",
    context: "AWS Academy Graduate certification — cloud infrastructure fundamentals.",
  },
  "Intent Engine": {
    client: "Open source",
    context:
      "Modular conversational AI intent detection pipeline for Python 3.8+.",
  },
  "Agentic AI Workflows": {
    client: "PDCloudEx",
    context:
      "Cursor-driven development — faster feature delivery with code review discipline.",
  },
  "VSSUT IT": {
    client: "VSSUT Burla",
    context: "Bachelor's in Information Technology — foundation in systems and software.",
  },
  "GitHub Portfolio": {
    client: "Personal",
    context:
      "10+ public repos — enterprise SCM, onboarding, desktop apps, and side projects.",
  },
};

export const impacts = [
  // ── Scale & Performance ──
  {
    value: "Live",
    label: "SCM platform at Metropolis Healthcare",
    item: "Metropolis SCM",
    category: "scale",
    magnitude: 5,
    href: "https://scm.metropolisindia.com/",
  },
  {
    value: "10+",
    label: "lab hubs tracked in real time",
    item: "Metropolis SCM",
    category: "scale",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "35+",
    label: "lab hubs integrated for costing",
    item: "Test Code Costing",
    category: "scale",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Real-time",
    label: "inventory visibility across locations",
    item: "Metropolis SCM",
    category: "scale",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "High-volume",
    label: "transaction processing on Django APIs",
    item: "Metropolis SCM",
    category: "scale",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "10+",
    label: "onboarding modules in production portal",
    item: "Medall Client Onboarding",
    category: "scale",
    magnitude: 4,
    href: "https://onboard.medallcorp.in/dashboard",
  },
  {
    value: "Multi-step",
    label: "registration & verification workflows",
    item: "Medall Client Onboarding",
    category: "scale",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Bulk",
    label: "test code lookups and cost reports",
    item: "Test Code Costing",
    category: "scale",
    magnitude: 2,
    href: "#projects",
  },

  // ── Cost & Efficiency ──
  {
    value: "30%",
    label: "stock discrepancy reduction",
    item: "Metropolis SCM",
    category: "cost",
    magnitude: 5,
    href: "#projects",
  },
  {
    value: "60%",
    label: "less manual cost consolidation",
    item: "Test Code Costing",
    category: "cost",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Automated",
    label: "low-stock alerts & PO generation",
    item: "Metropolis SCM",
    category: "cost",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Centralized",
    label: "procurement & inventory tracking",
    item: "Metropolis SCM",
    category: "cost",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Streamlined",
    label: "partner onboarding with workflow tracking",
    item: "Medall Client Onboarding",
    category: "cost",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "AI-assisted",
    label: "faster delivery without quality trade-offs",
    item: "Agentic AI Workflows",
    category: "cost",
    magnitude: 2,
  },

  // ── Reliability & Ops ──
  {
    value: "3+",
    label: "production systems shipped",
    item: "PDCloudEx",
    category: "reliability",
    magnitude: 5,
  },
  {
    value: "Live",
    label: "onboarding portal at onboard.medallcorp.in",
    item: "Medall Client Onboarding",
    category: "reliability",
    magnitude: 4,
    href: "https://onboard.medallcorp.in/dashboard",
  },
  {
    value: "2+ yrs",
    label: "production enterprise experience",
    item: "PDCloudEx",
    category: "reliability",
    magnitude: 4,
  },
  {
    value: "Multi-loc",
    label: "inventory sync with data integrity",
    item: "Metropolis SCM",
    category: "reliability",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "RBAC",
    label: "role-based access across all platforms",
    item: "Medall Client Onboarding",
    category: "reliability",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Audit",
    label: "trail for onboarding and pricing changes",
    item: "Medall Client Onboarding",
    category: "reliability",
    magnitude: 2,
    href: "#projects",
  },

  // ── Accuracy & Quality ──
  {
    value: "30%",
    label: "fewer stock discrepancies via centralized tracking",
    item: "Metropolis SCM",
    category: "accuracy",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Automated",
    label: "cost calculation from test code rules",
    item: "Test Code Costing",
    category: "accuracy",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Validation",
    label: "workflows preventing duplicate pricing configs",
    item: "Test Code Costing",
    category: "accuracy",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Batch",
    label: "and expiry management for medical supplies",
    item: "Metropolis SCM",
    category: "accuracy",
    magnitude: 2,
    href: "#projects",
  },

  // ── Reach & Coverage ──
  {
    value: "10+",
    label: "onboarding modules for channel partners",
    item: "Medall Client Onboarding",
    category: "reach",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "35+",
    label: "diagnostics hubs on costing platform",
    item: "Test Code Costing",
    category: "reach",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Network-wide",
    label: "procurement for Metropolis Healthcare",
    item: "Metropolis SCM",
    category: "reach",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Multi-client",
    label: "healthcare & corp onboarding delivery",
    item: "PDCloudEx",
    category: "reach",
    magnitude: 3,
  },
  {
    value: "Remote",
    label: "full-time + freelance project delivery",
    item: "PDCloudEx",
    category: "reach",
    magnitude: 2,
  },

  // ── Systems Breadth ──
  {
    value: "Django 5.2",
    label: "+ Angular 21 production stack",
    item: "Medall Client Onboarding",
    category: "systems",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Python",
    label: "Django REST APIs + PostgreSQL",
    item: "Metropolis SCM",
    category: "systems",
    magnitude: 4,
    href: "#projects",
  },
  {
    value: "Angular",
    label: "dashboards integrated with Django backends",
    item: "Metropolis SCM",
    category: "systems",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "AWS S3",
    label: "cloud data pipeline for costing module",
    item: "Test Code Costing",
    category: "systems",
    magnitude: 3,
    href: "#projects",
  },
  {
    value: "Agentic AI",
    label: "Cursor workflows across all projects",
    item: "Agentic AI Workflows",
    category: "systems",
    magnitude: 3,
  },
  {
    value: "REST",
    label: "API design with RBAC & validation layers",
    item: "PDCloudEx",
    category: "systems",
    magnitude: 2,
  },

  // ── Research & Growth ──
  {
    value: "AWS",
    label: "Cloud Foundations certified (2021)",
    item: "AWS Cloud Foundations",
    category: "research",
    magnitude: 4,
    href: "https://credly.com/badges/29bb5aed-7146-4300-8377-6bf8a563c008",
  },
  {
    value: "Intent Engine",
    label: "open-source NLP intent detection pipeline",
    item: "Intent Engine",
    category: "research",
    magnitude: 3,
    href: "https://github.com/Monty25803/intent-engine",
  },
  {
    value: "10+",
    label: "public GitHub repos shipped",
    item: "GitHub Portfolio",
    category: "research",
    magnitude: 3,
    href: "https://github.com/Monty25803",
  },
  {
    value: "VSSUT",
    label: "B.Tech Information Technology",
    item: "VSSUT IT",
    category: "research",
    magnitude: 2,
  },
  {
    value: "81.5%",
    label: "diploma in Information Technology",
    item: "VSSUT IT",
    category: "research",
    magnitude: 2,
  },
];
