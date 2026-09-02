export interface StorySectionData {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  cameraPosition: [number, number, number];
  targetPosition: [number, number, number];
  meshRotation: [number, number, number];
  meshPosition: [number, number, number];
  meshScale: number;
  colorTone: string;
}

export const STORY_SECTIONS: StorySectionData[] = [
  {
    id: "hero",
    tag: "01 // SYSTEM OVERVIEW",
    title: "INTELLIGENT COMPUTING & NEXT-GEN ENGINEERING",
    subtitle: "HESICS ARCHITECTURE",
    description: "Pioneering high-precision technical systems and deep spatial intelligence to power tomorrow's enterprise foundations.",
    cameraPosition: [0, 0, 5],
    targetPosition: [0, 0, 0],
    meshRotation: [0, 0, 0],
    meshPosition: [0, 0, 0],
    meshScale: 1.4,
    colorTone: "#0c745d",
  },
  {
    id: "problem",
    tag: "02 // THE FRICTION",
    title: "FRAGMENTED INFRASTRUCTURE & SCALABILITY CEILINGS",
    description: "Modern enterprises face extreme complexity with disconnected data silos, fragile legacy stacks, and slow execution velocity.",
    details: [
      "Monolithic data silos preventing real-time adaptation",
      "Prohibitive compute overhead and latency bottlenecks",
      "Lack of unified intelligence layer across platforms"
    ],
    cameraPosition: [2, -0.5, 4.5],
    targetPosition: [0.5, 0, 0],
    meshRotation: [0.4, 0.8, 0],
    meshPosition: [-1.2, 0, 0],
    meshScale: 1.2,
    colorTone: "#0c745d",
  },
  {
    id: "vision",
    tag: "03 // HORIZON",
    title: "SEAMLESS COGNITIVE ARCHITECTURES",
    description: "We envision a synchronized computing ecosystem where intelligent systems adapt in real-time, delivering uncompromised efficiency and resilience.",
    details: [
      "Autonomous optimization loops",
      "Unified spatial and operational data fabrics",
      "Predictive engineering at enterprise scale"
    ],
    cameraPosition: [-2, 0.5, 4.2],
    targetPosition: [-0.5, 0, 0],
    meshRotation: [-0.3, -1.2, 0.2],
    meshPosition: [1.2, 0, 0],
    meshScale: 1.5,
    colorTone: "#149a7c",
  },
  {
    id: "mission",
    tag: "04 // PURPOSE",
    title: "ENGINEERING RESILIENT, SCALABLE SOLUTIONS",
    description: "Our mission is to eliminate digital entropy by developing robust, secure, and intuitive platforms engineered for high-stakes environments.",
    details: [
      "Zero-downtime architecture principles",
      "Defensible end-to-end security protocols",
      "Human-centric computational interfaces"
    ],
    cameraPosition: [0, 1.5, 4.8],
    targetPosition: [0, 0.2, 0],
    meshRotation: [0.9, 0.4, -0.5],
    meshPosition: [0, -0.4, 0],
    meshScale: 1.3,
    colorTone: "#0c745d",
  },
  {
    id: "services",
    tag: "05 // CAPABILITIES",
    title: "CORE ENGINEERING & STRATEGIC SUITES",
    description: "Full-stack high-performance development, cloud-native orchestration, and bespoke spatial intelligence tailored for modern enterprises.",
    details: [
      "Custom Enterprise Software Engineering",
      "Distributed Cloud Architecture & Orchestration",
      "Real-time Spatial Computing & Interactive 3D",
      "Applied AI & Automated Decision Systems"
    ],
    cameraPosition: [1.8, -1.2, 4.0],
    targetPosition: [0, -0.2, 0],
    meshRotation: [-0.6, 1.8, 0.3],
    meshPosition: [-1.4, 0.2, 0],
    meshScale: 1.6,
    colorTone: "#06382d",
  },
  {
    id: "process",
    tag: "06 // METHODOLOGY",
    title: "RIGOROUS EXECUTION LIFECYCLE",
    description: "A disciplined, iterative framework designed to move from foundational discovery to fault-tolerant deployment with speed and clarity.",
    details: [
      "1. Architectural Discovery & Threat Modeling",
      "2. Rapid Prototyping & Stress Simulation",
      "3. Distributed Implementation & Hardening",
      "4. Continuous Monitoring & Automated Scaling"
    ],
    cameraPosition: [-1.5, 1.0, 4.5],
    targetPosition: [0, 0, 0],
    meshRotation: [1.2, -0.5, 0.8],
    meshPosition: [1.3, -0.2, 0],
    meshScale: 1.4,
    colorTone: "#149a7c",
  },
  {
    id: "projects",
    tag: "07 // PROVEN WORK",
    title: "HIGH-IMPACT CASE STUDIES",
    description: "Delivering transformational digital solutions across aerospace, logistics, finance, and advanced manufacturing sectors.",
    details: [
      "Real-time telemetry pipelines handling 5M+ ops/sec",
      "Decentralized identity & verification networks",
      "Spatial simulation engines for industrial digital twins"
    ],
    cameraPosition: [0, -1.0, 5.2],
    targetPosition: [0, 0, 0],
    meshRotation: [-0.8, -1.5, 0.2],
    meshPosition: [0, 0.5, 0],
    meshScale: 1.5,
    colorTone: "#0c745d",
  },
  {
    id: "testimonials",
    tag: "08 // ENDORSEMENTS",
    title: "TRUSTED BY INDUSTRY LEADERS",
    description: "Collaborating with visionary leaders who demand technical excellence, uncompromising reliability, and breakthrough performance.",
    details: [
      "\"HESICS re-architected our core infrastructure with zero downtime and 4x throughput gains.\"",
      "\"A rare combination of rigorous systems engineering and intuitive user experience.\""
    ],
    cameraPosition: [1.6, 0.8, 4.4],
    targetPosition: [0.2, 0, 0],
    meshRotation: [0.5, 2.2, -0.4],
    meshPosition: [-1.1, 0, 0],
    meshScale: 1.3,
    colorTone: "#149a7c",
  },
  {
    id: "about",
    tag: "09 // THE COLLECTIVE",
    title: "ENGINEERS, ARCHITECTS & THINKERS",
    description: "We are a multidisciplinary technology collective driven by deep-rooted curiosity and precision craftsmanship in computational systems.",
    details: [
      "Cross-domain expertise in low-level systems & modern web",
      "Committed to open standards and verifiable code quality",
      "Global distributed presence with deep domain focus"
    ],
    cameraPosition: [-1.8, -0.6, 4.6],
    targetPosition: [-0.2, 0, 0],
    meshRotation: [-1.0, -0.8, 1.1],
    meshPosition: [1.2, 0.2, 0],
    meshScale: 1.5,
    colorTone: "#0c745d",
  },
  {
    id: "values",
    tag: "10 // PRINCIPLES",
    title: "FOUNDATIONAL TENETS",
    description: "The core principles guiding every architectural decision, line of code, and client partnership we form.",
    details: [
      "Precision Over Hype: Engineering solutions that endure",
      "Radical Transparency: Clear benchmarks and open communication",
      "Continuous Evolution: Staying ahead of technological paradigms"
    ],
    cameraPosition: [0, 1.2, 4.2],
    targetPosition: [0, 0, 0],
    meshRotation: [0.7, -1.4, 0.3],
    meshPosition: [0, -0.3, 0],
    meshScale: 1.3,
    colorTone: "#06382d",
  },
  {
    id: "future",
    tag: "11 // THE ROAD AHEAD",
    title: "NEXT-GENERATION FRONTIERS",
    description: "Exploring spatial AI orchestration, quantum-resilient cryptographic foundations, and hyper-scalable edge mesh networks.",
    details: [
      "Edge-native intelligence deployment",
      "Post-quantum security layer integrations",
      "Ambient human-machine interfaces"
    ],
    cameraPosition: [1.5, -0.5, 4.8],
    targetPosition: [0, 0, 0],
    meshRotation: [-0.4, 2.8, -0.6],
    meshPosition: [-1.2, 0, 0],
    meshScale: 1.6,
    colorTone: "#149a7c",
  },
  {
    id: "contact",
    tag: "12 // INITIATE",
    title: "START YOUR TRANSFORMATION",
    description: "Connect with our engineering team to evaluate your architecture, discuss strategic initiatives, or explore custom solutions.",
    details: [
      "Email: contact@hesics.com",
      "Location: Global Distributed Engineering Hubs",
      "Available for Q3/Q4 Enterprise Deployments"
    ],
    cameraPosition: [0, 0, 5.0],
    targetPosition: [0, 0, 0],
    meshRotation: [0, Math.PI * 2, 0],
    meshPosition: [0, 0, 0],
    meshScale: 1.4,
    colorTone: "#0c745d",
  },
];
