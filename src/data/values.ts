// THE HESICS EMPIRE — Values Data
// Edit this array to update, add, or reorder HESICS values.
// Each value creates a dedicated visual moment in The Crew chapter.

export interface Value {
  id: number;
  word: string;
  definition: string;
  // Subtle accent direction for 3D environment during this value's moment
  envAccent: "left" | "right" | "center" | "up" | "down";
}

export const VALUES: Value[] = [
  {
    id: 1,
    word: "SIMPLICITY",
    definition: "We remove complexity, not add to it. Every system we build should feel obvious to the people using it.",
    envAccent: "center",
  },
  {
    id: 2,
    word: "PRECISION",
    definition: "Details are not decoration. They are the difference between a product that works and one that earns trust.",
    envAccent: "right",
  },
  {
    id: 3,
    word: "CURIOSITY",
    definition: "We question everything before we build anything. The best solutions come from asking better questions.",
    envAccent: "up",
  },
  {
    id: 4,
    word: "OWNERSHIP",
    definition: "We treat every project as if it were our own business. Because the outcome matters to us personally.",
    envAccent: "left",
  },
  {
    id: 5,
    word: "IMPACT",
    definition: "Technology without impact is just complexity. We measure success by the difference we create.",
    envAccent: "down",
  },
];
