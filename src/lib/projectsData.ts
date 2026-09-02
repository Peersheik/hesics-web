export interface CaseStudyProject {
  id: string;
  tag: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  whatWeBuilt: string[];
  result: string;
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  accentColor?: string;
  coordinates: [number, number, number]; // 3D spatial coordinate for screen object
}

export const ARCHIVED_PROJECTS: CaseStudyProject[] = [
  {
    id: "project-01",
    tag: "CASE 01 // ENTERPRISE PLATFORM",
    name: "CORE SYSTEMS ARCHITECTURE",
    category: "Web & Distributed Systems",
    summary: "High-throughput operational platform engineered for zero-latency data coordination.",
    problem: "[Client Problem / Friction statement to be populated]",
    approach: "[Technical Strategy & Architectural approach to be populated]",
    whatWeBuilt: [
      "Real-time Distributed Infrastructure Layer",
      "High-Performance Reactive Web Interface",
      "Low-Latency API Gateway & Event Pipeline",
      "Comprehensive Observability & Telemetry Suite"
    ],
    result: "[Measurable Business Impact & Performance metrics to be populated]",
    clientTestimonial: {
      quote: "[Verified Client Testimonial to be populated]",
      author: "[Client Name / Designation]",
      role: "[Enterprise / Organization]",
    },
    accentColor: "#0c745d",
    coordinates: [-2.2, 0.4, -2.5],
  },
  {
    id: "project-02",
    tag: "CASE 02 // INTELLIGENT PIPELINE",
    name: "AI AUTOMATION ENGINE",
    category: "AI & Automated Decisioning",
    summary: "Autonomous decision-making engine and adaptive data automation pipeline.",
    problem: "[Operational bottleneck & Manual workflow constraints to be populated]",
    approach: "[Machine Learning & Algorithmic architecture to be populated]",
    whatWeBuilt: [
      "Autonomous Decision Intelligence Engine",
      "Event-Driven Data Processing Workflows",
      "Custom Neural Integration Adapters",
      "Secure Automated Verification Protocol"
    ],
    result: "[Operational efficiency gains & Throughput benchmarks to be populated]",
    clientTestimonial: {
      quote: "[Verified Client Testimonial to be populated]",
      author: "[Client Name / Designation]",
      role: "[Enterprise / Organization]",
    },
    accentColor: "#149a7c",
    coordinates: [2.2, -0.4, 0.0],
  },
  {
    id: "project-03",
    tag: "CASE 03 // CLOUD INFRASTRUCTURE",
    name: "SAAS PLATFORM ECOSYSTEM",
    category: "Cloud Native & Multi-Tenant SaaS",
    summary: "Multi-tenant cloud ecosystem built for global scalability and enterprise isolation.",
    problem: "[Legacy software limitation & Scalability ceiling to be populated]",
    approach: "[Distributed micro-services & Cloud-native isolation strategy to be populated]",
    whatWeBuilt: [
      "Multi-Tenant Tenant Isolation Kernel",
      "Automated Provisioning & Billing Orchestration",
      "Modular Micro-Frontend Architecture",
      "Role-Based Access & Cryptographic Security"
    ],
    result: "[System uptime, Latency reductions & User capacity scaling to be populated]",
    clientTestimonial: {
      quote: "[Verified Client Testimonial to be populated]",
      author: "[Client Name / Designation]",
      role: "[Enterprise / Organization]",
    },
    accentColor: "#0c745d",
    coordinates: [-2.2, 0.4, 2.5],
  },
  {
    id: "project-04",
    tag: "CASE 04 // SPATIAL INTERACTION",
    name: "DIGITAL PRODUCT SUITE",
    category: "Interactive 3D & Digital Product",
    summary: "Next-generation digital product experience combining spatial interfaces and rapid execution.",
    problem: "[User conversion friction & Legacy interface constraints to be populated]",
    approach: "[Spatial UX engineering & WebGL performance optimization to be populated]",
    whatWeBuilt: [
      "Interactive 3D Product Configurator",
      "High-Conversion Digital Storytelling Experience",
      "Cross-Platform Responsive Component Framework",
      "Sub-second Asset Streaming Pipeline"
    ],
    result: "[Conversion optimization & Engagement duration benchmarks to be populated]",
    clientTestimonial: {
      quote: "[Verified Client Testimonial to be populated]",
      author: "[Client Name / Designation]",
      role: "[Enterprise / Organization]",
    },
    accentColor: "#149a7c",
    coordinates: [2.2, -0.4, 5.0],
  },
];
