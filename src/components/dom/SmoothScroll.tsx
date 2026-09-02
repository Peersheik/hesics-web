"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useChapterNav } from "@/lib/navigation/useChapterNav";
import { CHAPTERS } from "@/data/chapters";

gsap.registerPlugin(ScrollTrigger);

// Expose lenis instance so other components can use lenis.scrollTo
export let globalLenis: Lenis | null = null;

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const setActiveChapter = useChapterNav((s) => s.setActiveChapter);

  useEffect(() => {
    // ─── Lenis initialization ──────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    // ─── GSAP + Lenis sync ─────────────────────────────────────────────
    gsap.ticker.lagSmoothing(0);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);

    // Sync ScrollTrigger with Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // ─── Chapter detection via scroll position ────────────────────────
    // IntersectionObserver struggles with tall sticky sections.
    // Instead, compare scroll.y against each chapter section's top offset.
    const detectChapter = (scrollY: number) => {
      let detected = 1;
      for (const chapter of CHAPTERS) {
        const el = document.getElementById(chapter.sectionId);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollY >= top - window.innerHeight * 0.4) {
          detected = chapter.id;
        }
      }
      setActiveChapter(detected);
    };

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      detectChapter(scroll);
    });

    // Also detect on mount
    detectChapter(window.scrollY);

    // ─── Cleanup ───────────────────────────────────────────────────────
    return () => {
      gsap.ticker.remove(ticker);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      globalLenis = null;
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [setActiveChapter]);

  return <>{children}</>;
}
