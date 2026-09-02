// THE HESICS EMPIRE — Team & Founder Data
// Edit this file to add real team member information.

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  isFounder?: boolean;
}

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "[Founder Name]",
    role: "Founder & Lead Strategist",
    bio: "[A short, genuine description of the founder's story, philosophy, and why they started HESICS. Not generic corporate copy — real thinking.]",
    isFounder: true,
  },
  {
    id: 2,
    name: "[Team Member Name]",
    role: "[Role / Discipline]",
    bio: "[What this person brings to HESICS. What they care about. What they build.]",
  },
];

export const COMPANY_STORY = {
  whoWeAre:
    "[Who is HESICS? Not what you do — who you are. The people, the thinking, the belief system behind the technology.]",
  whyWeExist:
    "[Why does HESICS exist? What was the gap in the market? What was the frustration that started it all?]",
  whatWeBelieve:
    "[What does HESICS believe about technology, business, and the future? What principles guide every decision?]",
  whatWeAreBuilding:
    "[Where is HESICS going? What is the long-term vision beyond individual projects?]",
};
