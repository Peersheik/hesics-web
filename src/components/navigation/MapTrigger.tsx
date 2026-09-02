"use client";

import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";
import { ArchitectEmblem } from "@/components/guide/ArchitectNote";

/**
 * MapTrigger — small persistent bottom-right button that opens EmpireMap.
 *
 * Replaces the old ChapterNav top bar and side dots.
 * Shows current chapter codename above the button.
 * Progress shown as a thin teal arc indicator.
 */
export default function MapTrigger() {
  const toggleMap     = useChapterNav((s) => s.toggleMap);
  const isMapOpen     = useChapterNav((s) => s.isMapOpen);
  const activeId      = useChapterNav((s) => s.activeChapterId);
  const total         = CHAPTERS.length;
  const activeChapter = CHAPTERS.find((c) => c.id === activeId);

  // Arc progress — 0 to 1
  const progress = (activeId - 1) / (total - 1);

  // SVG arc for the progress indicator (r=18, stroke on 24×24 viewBox)
  const R    = 18;
  const CIRC = 2 * Math.PI * R;
  const dash = progress * CIRC;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Active chapter label (above button) */}
      {activeChapter && (
        <p
          className="font-mono text-white/40 tracking-widest"
          style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
        >
          {String(activeId).padStart(2, "0")} — {activeChapter.codename}
        </p>
      )}

      {/* MAP button */}
      <button
        onClick={toggleMap}
        aria-label={isMapOpen ? "Close Empire Map" : "Open Empire Map"}
        aria-expanded={isMapOpen}
        className="relative flex items-center gap-2 px-4 py-3 border transition-all duration-300 group"
        style={{
          background: "rgba(4,4,5,0.85)",
          borderColor: isMapOpen ? "var(--accent-light)" : "rgba(12,116,93,0.3)",
          boxShadow: isMapOpen ? "0 0 16px var(--accent-glow)" : "none",
        }}
      >
        {/* Arc progress ring */}
        <svg
          width={24} height={24}
          viewBox="-24 -24 48 48"
          className="shrink-0"
          aria-hidden="true"
        >
          {/* Track */}
          <circle r={R} fill="none" stroke="rgba(12,116,93,0.15)" strokeWidth={2} />
          {/* Progress */}
          <circle
            r={R}
            fill="none"
            stroke="var(--accent-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${CIRC}`}
            transform="rotate(-90)"
            style={{ transition: "stroke-dasharray 0.6s ease" }}
          />
        </svg>

        {/* Architect emblem — acts as the "compass" icon */}
        <ArchitectEmblem size={14} />

        <span
          className="font-mono font-bold tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-200"
          style={{ fontSize: "0.65rem" }}
        >
          MAP
        </span>
      </button>
    </div>
  );
}
