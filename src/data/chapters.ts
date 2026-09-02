// THE HESICS EMPIRE — Master Chapter Configuration
// Edit this file to rearrange chapters, update camera targets, or rename chapters.

export interface CameraTarget {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export interface Chapter {
  id: number;
  slug: string;
  codename: string;       // Display name shown in map: "THE RECRUITMENT"
  shortName: string;      // Short name for nav indicator: "RECRUITMENT"
  description: string;    // Brief descriptor shown in map
  cameraTarget: CameraTarget;
  sectionId: string;      // HTML section element id
  color: string;          // Accent color for this chapter in the map
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    slug: "recruitment",
    codename: "THE RECRUITMENT",
    shortName: "ENTRANCE",
    description: "Enter the empire",
    cameraTarget: {
      position: [0, 2, 28],
      lookAt: [0, 0, 0],
    },
    sectionId: "chapter-recruitment",
    color: "#149a7c",
  },
  {
    id: 2,
    slug: "origin",
    codename: "THE ORIGIN",
    shortName: "ORIGIN",
    description: "Why HESICS exists",
    cameraTarget: {
      position: [0, 2, 10],
      lookAt: [0, 0, -5],
    },
    sectionId: "chapter-origin",
    color: "#0c745d",
  },
  {
    id: 3,
    slug: "blueprint",
    codename: "THE BLUEPRINT",
    shortName: "BLUEPRINT",
    description: "Vision & Mission",
    cameraTarget: {
      position: [0, 4, -5],
      lookAt: [0, 0, -20],
    },
    sectionId: "chapter-blueprint",
    color: "#149a7c",
  },
  {
    id: 4,
    slug: "arsenal",
    codename: "THE ARSENAL",
    shortName: "ARSENAL",
    description: "Our capabilities",
    cameraTarget: {
      position: [0, 2, -22],
      lookAt: [0, 0, -35],
    },
    sectionId: "chapter-arsenal",
    color: "#0c745d",
  },
  {
    id: 5,
    slug: "operations",
    codename: "OPERATIONS",
    shortName: "OPERATIONS",
    description: "How we work",
    cameraTarget: {
      position: [0, 3, -42],
      lookAt: [0, 0, -55],
    },
    sectionId: "chapter-operations",
    color: "#149a7c",
  },
  {
    id: 6,
    slug: "vault",
    codename: "THE VAULT",
    shortName: "VAULT",
    description: "Projects & case studies",
    cameraTarget: {
      position: [0, 2, -62],
      lookAt: [0, 0, -75],
    },
    sectionId: "chapter-vault",
    color: "#0c745d",
  },
  {
    id: 7,
    slug: "crew",
    codename: "THE CREW",
    shortName: "CREW",
    description: "People & values",
    cameraTarget: {
      position: [0, 2, -82],
      lookAt: [0, 0, -95],
    },
    sectionId: "chapter-crew",
    color: "#149a7c",
  },
  {
    id: 8,
    slug: "empire",
    codename: "THE EMPIRE",
    shortName: "EMPIRE",
    description: "The final revelation",
    cameraTarget: {
      position: [0, 35, -80],
      lookAt: [0, 0, -80],
    },
    sectionId: "chapter-empire",
    color: "#149a7c",
  },
];

export const TOTAL_CHAPTERS = CHAPTERS.length;

export function getChapterById(id: number): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}
