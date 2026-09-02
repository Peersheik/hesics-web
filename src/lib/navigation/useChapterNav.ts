"use client";

import { create } from "zustand";
import { CHAPTERS, type Chapter } from "@/data/chapters";

interface ChapterNavState {
  activeChapterId: number;
  isMapOpen: boolean;
  isTransitioning: boolean;
  setActiveChapter: (id: number) => void;
  openMap: () => void;
  closeMap: () => void;
  toggleMap: () => void;
  jumpToChapter: (id: number, lenis?: { scrollTo: (target: HTMLElement | number | string, options?: object) => void }) => void;
}

export const useChapterNav = create<ChapterNavState>((set, get) => ({
  activeChapterId: 1,
  isMapOpen: false,
  isTransitioning: false,

  setActiveChapter: (id: number) => {
    set({ activeChapterId: id });
  },

  openMap: () => set({ isMapOpen: true }),
  closeMap: () => set({ isMapOpen: false }),
  toggleMap: () => set((s) => ({ isMapOpen: !s.isMapOpen })),

  jumpToChapter: (id: number, lenis?) => {
    const chapter = CHAPTERS.find((c) => c.id === id);
    if (!chapter) return;

    const { isMapOpen } = get();
    if (isMapOpen) set({ isMapOpen: false });

    set({ isTransitioning: true });

    const target = document.getElementById(chapter.sectionId);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { duration: 2.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    setTimeout(() => set({ isTransitioning: false }), 2200);
  },
}));

export { CHAPTERS, type Chapter };
