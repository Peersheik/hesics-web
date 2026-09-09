"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useChapterNav } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

// ─── Shared chapter background colours per chapter id ───────────────
const CHAPTER_THEMES: Record<number, { grad: string; accent: string }> = {
  1: { grad: "radial-gradient(ellipse at 20% 50%, rgba(0,60,80,0.8) 0%, rgba(7,8,16,0) 70%)",  accent: "#00e5c8" },
  2: { grad: "radial-gradient(ellipse at 80% 30%, rgba(20,40,80,0.7) 0%, rgba(7,8,16,0) 70%)", accent: "#00e5c8" },
  3: { grad: "radial-gradient(ellipse at 50% 80%, rgba(0,40,70,0.8) 0%, rgba(7,8,16,0) 70%)",  accent: "#00e5c8" },
  4: { grad: "radial-gradient(ellipse at 10% 60%, rgba(60,10,10,0.7) 0%, rgba(7,8,16,0) 70%)", accent: "#e62020" },
  5: { grad: "radial-gradient(ellipse at 90% 40%, rgba(0,50,30,0.7) 0%, rgba(7,8,16,0) 70%)",  accent: "#00e5c8" },
  6: { grad: "radial-gradient(ellipse at 40% 70%, rgba(50,35,0,0.8) 0%, rgba(7,8,16,0) 70%)",  accent: "#f5c518" },
  7: { grad: "radial-gradient(ellipse at 60% 20%, rgba(20,0,60,0.8) 0%, rgba(7,8,16,0) 70%)",  accent: "#a060ff" },
  8: { grad: "radial-gradient(ellipse at 50% 50%, rgba(0,229,200,0.12) 0%, rgba(7,8,16,0) 70%)", accent: "#00e5c8" },
};

interface ChapterBgProps {
  id: number;
  sectionRef: React.RefObject<HTMLElement | null>;
}

/** Animated background gradient that parallax-shifts on scroll */
export function ChapterBackground({ id, sectionRef }: ChapterBgProps) {
  const bgRef  = useRef<HTMLDivElement>(null);
  const theme  = CHAPTER_THEMES[id] ?? CHAPTER_THEMES[1];

  useEffect(() => {
    const el  = bgRef.current;
    const sec = sectionRef.current;
    if (!el || !sec) return;

    const st = ScrollTrigger.create({
      trigger: sec,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(el, { yPercent: (p - 0.5) * 20 });
      },
    });

    return () => st.kill();
  }, [sectionRef]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={bgRef}
        className="absolute"
        style={{
          inset: "-20%",
          background: theme.grad,
          opacity: 0.9,
        }}
      />
    </div>
  );
}

/** Standard chapter wrapper — tall scroll space + sticky viewport */
export function ChapterShell({
  id,
  sectionId,
  scrollHeight = "380vh",
  children,
}: {
  id: number;
  sectionId: string;
  scrollHeight?: string;
  children: (sectionRef: React.RefObject<HTMLElement | null>) => React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      aria-label={`Chapter ${id}`}
      className="relative w-full"
      style={{ background: "var(--bg, #070810)" }}
    >
      <div style={{ height: scrollHeight }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Gradient background */}
          <ChapterBackground id={id} sectionRef={sectionRef} />

          {/* Grid overlay — subtle city-block texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,229,200,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,229,200,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col justify-center"
            style={{ padding: "6rem clamp(2rem, 8vw, 7rem) 4rem" }}
          >
            {children(sectionRef)}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Ghost chapter number — huge watermark */
export function ChapterNum({ id }: { id: number }) {
  return (
    <span
      className="absolute pointer-events-none select-none"
      aria-hidden="true"
      style={{
        fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
        fontSize: "clamp(10rem, 35vw, 40rem)",
        lineHeight: 1,
        color: "rgba(255,255,255,0.025)",
        right: "-2vw",
        bottom: "5vh",
        letterSpacing: "-0.05em",
      }}
    >
      {String(id).padStart(2, "0")}
    </span>
  );
}

/** Next district CTA — placed at bottom of each chapter */
export function NextDistrict({ currentId }: { currentId: number }) {
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);
  const total = 8;
  if (currentId >= total) return null;

  return (
    <div className="mt-14 flex items-center gap-5">
      <div
        className="h-px w-10"
        style={{ background: "var(--neon, #00e5c8)", opacity: 0.4 }}
      />
      <button
        onClick={() => jumpToChapter(currentId + 1, globalLenis || undefined)}
        aria-label={`Proceed to district ${currentId + 1}`}
        className="font-mono flex items-center gap-3 transition-all duration-300 group"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          color: "var(--neon, #00e5c8)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.color = "#ffffff";
          el.style.textShadow = "0 0 12px rgba(0,229,200,0.5)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.color = "var(--neon, #00e5c8)";
          el.style.textShadow = "none";
        }}
      >
        NEXT DISTRICT
        <span style={{ transition: "transform 0.3s", display: "inline-block" }}
          className="group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}

/** District label above each chapter heading — NO dashes or slashes */
export function DistrictTag({ id, label }: { id: number; label: string }) {
  return (
    <p
      className="font-mono mb-5"
      style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--neon, #00e5c8)" }}
    >
      DISTRICT {String(id).padStart(2, "0")} &nbsp; {label}
    </p>
  );
}
