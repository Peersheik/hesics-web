export interface TestimonialItem {
  id: string;
  tag: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  impactMetrics?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-01",
    tag: "01 // ENTERPRISE ARCHITECTURE",
    quote: "[Real Client Testimonial: Detail on technical reliability, execution speed, and systems architecture impact to be populated.]",
    author: "[Client Name]",
    role: "[Chief Technology Officer / VP of Engineering]",
    company: "[Enterprise Organization]",
    impactMetrics: "CORE INFRASTRUCTURE & SCALABILITY",
  },
  {
    id: "testimonial-02",
    tag: "02 // AI & AUTOMATION SYSTEMS",
    quote: "[Real Client Testimonial: Detail on operational efficiency gains, automation resilience, and AI workflow integration to be populated.]",
    author: "[Client Name]",
    role: "[Head of Operations / Chief Product Officer]",
    company: "[Global Technology Partner]",
    impactMetrics: "WORKFLOW AUTOMATION & THROUGHPUT",
  },
  {
    id: "testimonial-03",
    tag: "03 // DIGITAL PRODUCTS & SAAS",
    quote: "[Real Client Testimonial: Detail on product engineering quality, user adoption, and long-term partnership commitment to be populated.]",
    author: "[Client Name]",
    role: "[Founder & CEO / Managing Director]",
    company: "[Enterprise Client Group]",
    impactMetrics: "PLATFORM ADOPTION & RETENTION",
  },
];
