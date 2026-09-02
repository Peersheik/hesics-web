// THE HESICS EMPIRE — Projects Data
// To add a new project: add a new object to the PROJECTS array below.
// Use placeholder strings (e.g. "[CLIENT NAME]") where real data is not yet available.
// DO NOT invent statistics, testimonials, or client information.

export interface ProjectResult {
  label: string;
  value: string; // Use placeholder if real result not available
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  id: number;
  code: string;           // "01", "02", etc.
  name: string;
  client: string;         // Use "[CLIENT NAME]" if not available
  industry: string;
  problem: string;
  strategy: string;
  solution: string;
  technology: string[];
  results: ProjectResult[];
  testimonial: ProjectTestimonial | null; // null if not yet available
  // 3D world position inside the Vault
  worldPosition: [number, number, number];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    code: "01",
    name: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    problem:
      "[Describe the core problem or challenge the client faced before engaging HESICS.]",
    strategy:
      "[Describe the strategic approach HESICS took to address the problem.]",
    solution:
      "[Describe what was built — the digital system, product, or solution delivered.]",
    technology: ["[Technology 01]", "[Technology 02]", "[Technology 03]"],
    results: [
      { label: "[Result Metric]", value: "[Value]" },
      { label: "[Result Metric]", value: "[Value]" },
    ],
    testimonial: null,
    worldPosition: [-8, 0, -68],
  },
  {
    id: 2,
    code: "02",
    name: "[PROJECT NAME]",
    client: "[CLIENT NAME]",
    industry: "[INDUSTRY]",
    problem:
      "[Describe the core problem or challenge the client faced before engaging HESICS.]",
    strategy:
      "[Describe the strategic approach HESICS took to address the problem.]",
    solution:
      "[Describe what was built — the digital system, product, or solution delivered.]",
    technology: ["[Technology 01]", "[Technology 02]"],
    results: [
      { label: "[Result Metric]", value: "[Value]" },
      { label: "[Result Metric]", value: "[Value]" },
    ],
    testimonial: null,
    worldPosition: [8, 0, -68],
  },
];

// Add more projects here as they become available. Each project auto-generates
// a 3D installation in the Vault chapter.
