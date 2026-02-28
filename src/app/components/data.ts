export type ServiceStatus = "healthy" | "degraded" | "down";

export type ServiceType = "API" | "Library" | "Frontend" | "Data";

export interface Service {
  id: string;
  name: string;
  type: ServiceType;
  team: string;
  language: string;
  status: ServiceStatus;
  lastDeployed: string;
  description: string;
}

export interface RadarEntry {
  name: string;
  ring: "Adopt" | "Trial" | "Assess" | "Hold";
  quadrant: "Languages & Frameworks" | "Platforms" | "Tools" | "Techniques";
}

export interface ScorecardDimension {
  name: string;
  score: number;
}

export interface Scorecard {
  serviceId: string;
  dimensions: ScorecardDimension[];
}

export const services: Service[] = [
  {
    id: "svc-001",
    name: "auth-service",
    type: "API",
    team: "Platform",
    language: "Go",
    status: "healthy",
    lastDeployed: "2026-02-25",
    description: "Handles authentication and authorization for all services.",
  },
  {
    id: "svc-002",
    name: "user-profile-api",
    type: "API",
    team: "Identity",
    language: "TypeScript",
    status: "healthy",
    lastDeployed: "2026-02-24",
    description: "Manages user profile data and preferences.",
  },
  {
    id: "svc-003",
    name: "payment-gateway",
    type: "API",
    team: "Payments",
    language: "Java",
    status: "degraded",
    lastDeployed: "2026-02-20",
    description: "Processes payment transactions and manages billing.",
  },
  {
    id: "svc-004",
    name: "design-system",
    type: "Library",
    team: "Frontend",
    language: "TypeScript",
    status: "healthy",
    lastDeployed: "2026-02-22",
    description: "Shared UI component library used across all web apps.",
  },
  {
    id: "svc-005",
    name: "data-pipeline",
    type: "Data",
    team: "Analytics",
    language: "Python",
    status: "healthy",
    lastDeployed: "2026-02-26",
    description: "ETL pipeline for ingesting and processing analytics events.",
  },
  {
    id: "svc-006",
    name: "web-app",
    type: "Frontend",
    team: "Consumer",
    language: "TypeScript",
    status: "healthy",
    lastDeployed: "2026-02-27",
    description: "Main customer-facing web application.",
  },
  {
    id: "svc-007",
    name: "notification-service",
    type: "API",
    team: "Platform",
    language: "Go",
    status: "down",
    lastDeployed: "2026-02-18",
    description: "Sends email, SMS, and push notifications.",
  },
  {
    id: "svc-008",
    name: "search-service",
    type: "API",
    team: "Discovery",
    language: "Rust",
    status: "healthy",
    lastDeployed: "2026-02-23",
    description: "Full-text search powered by custom indexing engine.",
  },
  {
    id: "svc-009",
    name: "admin-dashboard",
    type: "Frontend",
    team: "Internal Tools",
    language: "TypeScript",
    status: "healthy",
    lastDeployed: "2026-02-21",
    description: "Internal admin portal for ops and support teams.",
  },
  {
    id: "svc-010",
    name: "ml-feature-store",
    type: "Data",
    team: "ML Platform",
    language: "Python",
    status: "degraded",
    lastDeployed: "2026-02-15",
    description: "Feature store for training and serving ML models.",
  },
];

export const radarEntries: RadarEntry[] = [
  // Languages & Frameworks
  { name: "TypeScript", ring: "Adopt", quadrant: "Languages & Frameworks" },
  { name: "React", ring: "Adopt", quadrant: "Languages & Frameworks" },
  { name: "Go", ring: "Adopt", quadrant: "Languages & Frameworks" },
  { name: "Next.js", ring: "Adopt", quadrant: "Languages & Frameworks" },
  { name: "Rust", ring: "Trial", quadrant: "Languages & Frameworks" },
  { name: "Bun", ring: "Trial", quadrant: "Languages & Frameworks" },
  { name: "Elixir", ring: "Assess", quadrant: "Languages & Frameworks" },
  { name: "Svelte", ring: "Assess", quadrant: "Languages & Frameworks" },
  { name: "PHP", ring: "Hold", quadrant: "Languages & Frameworks" },
  { name: "Ruby on Rails", ring: "Hold", quadrant: "Languages & Frameworks" },

  // Platforms
  { name: "Kubernetes", ring: "Adopt", quadrant: "Platforms" },
  { name: "AWS ECS", ring: "Adopt", quadrant: "Platforms" },
  { name: "PostgreSQL", ring: "Adopt", quadrant: "Platforms" },
  { name: "Redis", ring: "Adopt", quadrant: "Platforms" },
  { name: "Cloudflare Workers", ring: "Trial", quadrant: "Platforms" },
  { name: "PlanetScale", ring: "Trial", quadrant: "Platforms" },
  { name: "Neon DB", ring: "Assess", quadrant: "Platforms" },
  { name: "Deno Deploy", ring: "Assess", quadrant: "Platforms" },
  { name: "Heroku", ring: "Hold", quadrant: "Platforms" },
  { name: "MongoDB", ring: "Hold", quadrant: "Platforms" },

  // Tools
  { name: "GitHub Actions", ring: "Adopt", quadrant: "Tools" },
  { name: "Terraform", ring: "Adopt", quadrant: "Tools" },
  { name: "Datadog", ring: "Adopt", quadrant: "Tools" },
  { name: "Sentry", ring: "Adopt", quadrant: "Tools" },
  { name: "Pulumi", ring: "Trial", quadrant: "Tools" },
  { name: "Grafana Alloy", ring: "Trial", quadrant: "Tools" },
  { name: "Dagger", ring: "Assess", quadrant: "Tools" },
  { name: "Bazel", ring: "Assess", quadrant: "Tools" },
  { name: "Jenkins", ring: "Hold", quadrant: "Tools" },
  { name: "CircleCI", ring: "Hold", quadrant: "Tools" },

  // Techniques
  { name: "Trunk-based dev", ring: "Adopt", quadrant: "Techniques" },
  { name: "Feature flags", ring: "Adopt", quadrant: "Techniques" },
  { name: "OpenTelemetry", ring: "Adopt", quadrant: "Techniques" },
  { name: "Service mesh", ring: "Trial", quadrant: "Techniques" },
  { name: "Platform engineering", ring: "Trial", quadrant: "Techniques" },
  { name: "eBPF observability", ring: "Assess", quadrant: "Techniques" },
  { name: "Wasm modules", ring: "Assess", quadrant: "Techniques" },
  { name: "Microservices", ring: "Hold", quadrant: "Techniques" },
  { name: "Long-lived branches", ring: "Hold", quadrant: "Techniques" },
];

export const scorecards: Scorecard[] = services.map((svc) => ({
  serviceId: svc.id,
  dimensions: [
    {
      name: "Documentation",
      score: Math.floor(40 + Math.random() * 60),
    },
    {
      name: "Testing",
      score: Math.floor(30 + Math.random() * 70),
    },
    {
      name: "Security",
      score: Math.floor(50 + Math.random() * 50),
    },
    {
      name: "Observability",
      score: Math.floor(20 + Math.random() * 80),
    },
    {
      name: "CI/CD",
      score: Math.floor(40 + Math.random() * 60),
    },
  ],
}));

// Builder types and data

export interface BuilderTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  stack: string[];
  requiredGuardrails: string[];
  estimatedSetupMins: number;
}

export interface RequiredGuardrail {
  id: string;
  label: string;
  description: string;
  category: string;
}

export interface OptionalGuardrail {
  id: string;
  label: string;
  description: string;
  defaultEnabled: boolean;
}

export interface BuilderApp {
  id: string;
  name: string;
  templateId: string;
  team: string;
  status: "running" | "building" | "failed";
  createdAt: string;
  enabledOptionalGuardrails: string[];
}

export const builderTemplates: BuilderTemplate[] = [
  {
    id: "tmpl-001",
    name: "Next.js App",
    description: "Full-stack web application with App Router, TypeScript, and Tailwind CSS. Pre-wired with auth middleware and org design tokens.",
    category: "Frontend",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
    requiredGuardrails: ["guard-sso", "guard-https", "guard-dep-audit", "guard-audit-log"],
    estimatedSetupMins: 8,
  },
  {
    id: "tmpl-002",
    name: "Go API Service",
    description: "Production-ready REST API in Go with chi router, structured logging, and OpenTelemetry instrumentation baked in.",
    category: "Backend",
    stack: ["Go", "chi", "PostgreSQL", "OpenTelemetry"],
    requiredGuardrails: ["guard-sso", "guard-https", "guard-dep-audit", "guard-audit-log"],
    estimatedSetupMins: 6,
  },
  {
    id: "tmpl-003",
    name: "Python Lambda",
    description: "AWS Lambda function in Python with SAM template, structured logging, and X-Ray tracing configured out of the box.",
    category: "Serverless",
    stack: ["Python", "AWS Lambda", "SAM", "X-Ray"],
    requiredGuardrails: ["guard-sso", "guard-https", "guard-dep-audit", "guard-audit-log"],
    estimatedSetupMins: 5,
  },
  {
    id: "tmpl-004",
    name: "React Library",
    description: "Shareable React component library with Storybook, Vitest, and automated npm publishing via GitHub Actions.",
    category: "Library",
    stack: ["TypeScript", "React", "Storybook", "Vitest"],
    requiredGuardrails: ["guard-sso", "guard-dep-audit", "guard-audit-log"],
    estimatedSetupMins: 10,
  },
  {
    id: "tmpl-005",
    name: "Data Pipeline",
    description: "Apache Airflow DAG with dbt transformations, Great Expectations data quality checks, and Slack alerting.",
    category: "Data",
    stack: ["Python", "Airflow", "dbt", "PostgreSQL"],
    requiredGuardrails: ["guard-sso", "guard-https", "guard-dep-audit", "guard-audit-log"],
    estimatedSetupMins: 12,
  },
];

export const requiredGuardrails: RequiredGuardrail[] = [
  {
    id: "guard-sso",
    label: "SSO Required",
    description: "All human access must go through the org SSO provider. Service accounts use OIDC workload identity.",
    category: "Access Control",
  },
  {
    id: "guard-https",
    label: "HTTPS Only",
    description: "All endpoints enforce TLS 1.2+. HTTP traffic is rejected at the load balancer with 301 redirect.",
    category: "Transport Security",
  },
  {
    id: "guard-dep-audit",
    label: "Dependency Audit",
    description: "CI pipeline runs dependency vulnerability scanning on every pull request. Critical CVEs block merge.",
    category: "Supply Chain",
  },
  {
    id: "guard-audit-log",
    label: "Audit Logging",
    description: "All state-changing operations are written to the immutable audit log with actor, timestamp, and diff.",
    category: "Compliance",
  },
];

export const optionalGuardrails: OptionalGuardrail[] = [
  {
    id: "opt-rate-limit",
    label: "Rate Limiting",
    description: "Enforce per-client request rate limits at the API gateway layer.",
    defaultEnabled: true,
  },
  {
    id: "opt-pii-detect",
    label: "PII Detection",
    description: "Scan request/response payloads for PII and redact before logging.",
    defaultEnabled: false,
  },
  {
    id: "opt-data-residency",
    label: "Data Residency: US",
    description: "Restrict data storage and processing to US-based AWS regions only.",
    defaultEnabled: true,
  },
  {
    id: "opt-waf",
    label: "WAF Protection",
    description: "Attach an AWS WAF with OWASP Core Rule Set to all public endpoints.",
    defaultEnabled: false,
  },
];

export const builderApps: BuilderApp[] = [
  {
    id: "app-001",
    name: "consumer-portal-v2",
    templateId: "tmpl-001",
    team: "Consumer",
    status: "running",
    createdAt: "2026-02-10",
    enabledOptionalGuardrails: ["opt-rate-limit", "opt-data-residency", "opt-waf"],
  },
  {
    id: "app-002",
    name: "payments-api",
    templateId: "tmpl-002",
    team: "Payments",
    status: "running",
    createdAt: "2026-01-28",
    enabledOptionalGuardrails: ["opt-rate-limit", "opt-pii-detect", "opt-data-residency"],
  },
  {
    id: "app-003",
    name: "invoice-mailer",
    templateId: "tmpl-003",
    team: "Platform",
    status: "building",
    createdAt: "2026-02-26",
    enabledOptionalGuardrails: ["opt-rate-limit"],
  },
  {
    id: "app-004",
    name: "events-ingest",
    templateId: "tmpl-005",
    team: "Analytics",
    status: "failed",
    createdAt: "2026-02-25",
    enabledOptionalGuardrails: ["opt-rate-limit", "opt-data-residency"],
  },
];

// Stable scorecard data (no random values for consistent SSR)
export const stablescorecards: Scorecard[] = [
  { serviceId: "svc-001", dimensions: [{ name: "Documentation", score: 90 }, { name: "Testing", score: 85 }, { name: "Security", score: 95 }, { name: "Observability", score: 80 }, { name: "CI/CD", score: 92 }] },
  { serviceId: "svc-002", dimensions: [{ name: "Documentation", score: 75 }, { name: "Testing", score: 70 }, { name: "Security", score: 80 }, { name: "Observability", score: 65 }, { name: "CI/CD", score: 78 }] },
  { serviceId: "svc-003", dimensions: [{ name: "Documentation", score: 60 }, { name: "Testing", score: 55 }, { name: "Security", score: 70 }, { name: "Observability", score: 45 }, { name: "CI/CD", score: 62 }] },
  { serviceId: "svc-004", dimensions: [{ name: "Documentation", score: 95 }, { name: "Testing", score: 88 }, { name: "Security", score: 72 }, { name: "Observability", score: 50 }, { name: "CI/CD", score: 85 }] },
  { serviceId: "svc-005", dimensions: [{ name: "Documentation", score: 55 }, { name: "Testing", score: 60 }, { name: "Security", score: 65 }, { name: "Observability", score: 75 }, { name: "CI/CD", score: 70 }] },
  { serviceId: "svc-006", dimensions: [{ name: "Documentation", score: 80 }, { name: "Testing", score: 75 }, { name: "Security", score: 85 }, { name: "Observability", score: 70 }, { name: "CI/CD", score: 90 }] },
  { serviceId: "svc-007", dimensions: [{ name: "Documentation", score: 40 }, { name: "Testing", score: 35 }, { name: "Security", score: 50 }, { name: "Observability", score: 30 }, { name: "CI/CD", score: 45 }] },
  { serviceId: "svc-008", dimensions: [{ name: "Documentation", score: 70 }, { name: "Testing", score: 80 }, { name: "Security", score: 75 }, { name: "Observability", score: 85 }, { name: "CI/CD", score: 88 }] },
  { serviceId: "svc-009", dimensions: [{ name: "Documentation", score: 65 }, { name: "Testing", score: 60 }, { name: "Security", score: 70 }, { name: "Observability", score: 55 }, { name: "CI/CD", score: 72 }] },
  { serviceId: "svc-010", dimensions: [{ name: "Documentation", score: 45 }, { name: "Testing", score: 50 }, { name: "Security", score: 55 }, { name: "Observability", score: 60 }, { name: "CI/CD", score: 40 }] },
];
