"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { TRANSITION_LINES, DISTRICT_LINES, LANDING_LINE } from "@/data/architectLines";

export type ArchitectNoteMode = "transition" | "district" | "landing";

interface ArchitectNoteProps {
  /** Chapter or district id (1–8). Ignored when mode="landing". */
  chapterId?: number;
  mode?: ArchitectNoteMode;
  /** For district mode: show immediately (no auto-dismiss). */
  persistent?: boolean;
  className?: string;
}

/**
 * THE ARCHITECT — voice note component.
 *
 * Renders a single line attributed to the Architect character.
 * GSAP: power4.out fade-in + 8px upward drift. Auto-dismisses after 4s
 * unless `persistent` is true.
 *
 * Respects prefers-reduced-motion — shows text immediately with no animation.
 */
export default function ArchitectNote({
  chapterId,
  mode = "transition",
  persistent = false,
  className = "",
}: ArchitectNoteProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const getLine = useCallback((): string | null => {
    if (mode === "landing") return LANDING_LINE;
    if (!chapterId) return null;
    if (mode === "district") return DISTRICT_LINES[chapterId] ?? null;
    return TRANSITION_LINES[chapterId] ?? null;
  }, [chapterId, mode]);

  useEffect(() => {
    const el = wrapperRef.current;
    const line = getLine();
    if (!el || !line) return;

    // Clear previous timer
    if (timerRef.current) clearTimeout(timerRef.current);

    if (prefersReducedMotion) {
      // Skip animation — show immediately
      gsap.set(el, { opacity: 1, y: 0, display: "flex" });
    } else {
      gsap.fromTo(
        el,
        { opacity: 0, y: 8, display: "flex" },
        { opacity: 1, y: 0, duration: 0.4, ease: "power4.out" }
      );
    }

    if (!persistent) {
      timerRef.current = setTimeout(() => {
        if (prefersReducedMotion) {
          gsap.set(el, { opacity: 0 });
        } else {
          gsap.to(el, { opacity: 0, y: -4, duration: 0.35, ease: "power2.in" });
        }
      }, 4000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [chapterId, mode, persistent, prefersReducedMotion, getLine]);

  const line = getLine();
  if (!line) return null;

  return (
    <div
      ref={wrapperRef}
      className={`opacity-0 hidden items-center gap-3 ${className}`}
      aria-live="polite"
      aria-label="The Architect speaks"
    >
      {/* The Architect's emblem — compass/blueprint mark in --power red */}
      <ArchitectEmblem />

      {/* Voice line */}
      <p
        className="font-mono text-xs tracking-[0.12em] text-white/55 italic leading-snug max-w-xs"
        style={{ fontSize: "0.7rem" }}
      >
        {line}
      </p>
    </div>
  );
}

/**
 * THE ARCHITECT's emblem — original compass/blueprint mark.
 * An H-form compass: horizontal bar + two vertical legs + central pivot dot.
 * Rendered entirely in SVG — no external assets, no IP.
 * Color: var(--power) red — the only element on the site that uses it consistently.
 */
export function ArchitectEmblem({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="The Architect"
      role="img"
      className="shrink-0"
      style={{ color: "var(--power)" }}
    >
      {/* Compass legs */}
      <line x1="8" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="4" x2="14" y2="20" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
      {/* Crossbar — blueprint H-form */}
      <line x1="8.8" y1="11" x2="15.2" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Central pivot */}
      <circle cx="12" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}
