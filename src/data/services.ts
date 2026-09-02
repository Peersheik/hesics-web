// THE HESICS EMPIRE — Services Data
// Edit this file to update service names, sub-steps, and descriptions.

export interface ServiceStep {
  label: string;
  description: string;
}

export interface Service {
  id: number;
  code: string;           // "01", "02", etc.
  name: string;
  shortName: string;
  tagline: string;
  steps: ServiceStep[];
  // 3D world position inside the Arsenal vault
  worldPosition: [number, number, number];
}

export const SERVICES: Service[] = [
  {
    id: 1,
    code: "01",
    name: "WEB DEVELOPMENT",
    shortName: "WEB",
    tagline: "Digital presence engineered for performance and conversion.",
    steps: [
      { label: "STRATEGY", description: "Research, architecture, and competitive positioning." },
      { label: "DESIGN", description: "Visual systems built for trust and clarity." },
      { label: "DEVELOPMENT", description: "Clean, scalable, and performant code." },
      { label: "SEO", description: "Structured for search authority from day one." },
      { label: "LAUNCH", description: "Deployed, tested, and ready to grow." },
    ],
    worldPosition: [-12, 0, -28],
  },
  {
    id: 2,
    code: "02",
    name: "AI & AUTOMATION",
    shortName: "AI",
    tagline: "Intelligent systems that work while you sleep.",
    steps: [
      { label: "PROBLEM", description: "Map the manual process or bottleneck." },
      { label: "INTELLIGENCE", description: "Design the AI model or decision engine." },
      { label: "AUTOMATION", description: "Build workflows that run without intervention." },
      { label: "RESULT", description: "Measurable output. Real time saved." },
    ],
    worldPosition: [12, 0, -28],
  },
  {
    id: 3,
    code: "03",
    name: "SAAS DEVELOPMENT",
    shortName: "SAAS",
    tagline: "Products that scale from idea to enterprise.",
    steps: [
      { label: "IDEA", description: "Define the market problem and user need." },
      { label: "PRODUCT", description: "Build the core product with tight scope." },
      { label: "USERS", description: "Ship to real users and iterate fast." },
      { label: "SCALE", description: "Architect for growth without rewrites." },
    ],
    worldPosition: [-12, 0, -40],
  },
  {
    id: 4,
    code: "04",
    name: "DIGITAL MARKETING",
    shortName: "MARKETING",
    tagline: "Reach that compounds. Growth that sustains.",
    steps: [
      { label: "CONTENT", description: "Authority-building content strategy." },
      { label: "REACH", description: "Targeted distribution across channels." },
      { label: "LEADS", description: "Conversion systems that turn traffic into business." },
      { label: "GROWTH", description: "Data-driven iteration for sustained results." },
    ],
    worldPosition: [12, 0, -40],
  },
];
