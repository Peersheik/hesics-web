// THE HESICS EMPIRE — Testimonials Data
// Add real client testimonials below when available.
// Each testimonial will create a cinematic pause moment in The Vault chapter.

export interface Testimonial {
  id: number;
  quote: string;      // Use "[REAL CLIENT TESTIMONIAL]" as placeholder
  author: string;     // Use "[Client Name]" as placeholder
  role: string;
  company: string;
  project?: string;   // Optional: link to a project
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "[Real client testimonial will appear here. HESICS does not fabricate reviews or results.]",
    author: "[Client Name]",
    role: "[Title / Role]",
    company: "[Company Name]",
  },
  {
    id: 2,
    quote: "[Real client testimonial will appear here. HESICS does not fabricate reviews or results.]",
    author: "[Client Name]",
    role: "[Title / Role]",
    company: "[Company Name]",
  },
];
