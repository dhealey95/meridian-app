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
