"use client";

import { useEffect, useRef } from "react";
import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

export default function ChapterNav() {
  const activeChapterId = useChapterNav((s) => s.activeChapterId);
  const toggleMap = useChapterNav((s) => s.toggleMap);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);
  const isMapOpen = useChapterNav((s) => s.isMapOpen);

  const activeChapter = CHAPTERS.find((c) => c.id === activeChapterId);
  const total = CHAPTERS.length;
  const progress = ((activeChapterId - 1) / (total - 1)) * 100;

  return (
    <>
      {/* ─── Top Bar ─────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        role="banner"
        aria-label="HESICS Empire Navigation"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span
            className="text-white font-mono text-sm font-bold tracking-[0.3em] select-none"
            style={{ letterSpacing: "0.3em" }}
          >
            HESICS
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-xs font-mono text-empire-muted tracking-widest uppercase">
            THE EMPIRE
          </span>
        </div>

        {/* Chapter indicator */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-empire-muted">
              {String(activeChapterId).padStart(2, "0")}
            </span>
            <span className="text-white/20 font-mono text-xs">/</span>
            <span className="font-mono text-xs text-empire-muted/50">
              {String(total).padStart(2, "0")}
            </span>
          </div>
          {activeChapter && (
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-empire-light uppercase">
              {activeChapter.codename}
            </span>
          )}
        </div>

        {/* Map button */}
        <button
          onClick={toggleMap}
          aria-label={isMapOpen ? "Close HESICS Map" : "Open HESICS Map"}
          aria-expanded={isMapOpen}
          className="flex items-center gap-2 font-mono text-xs tracking-widest text-empire-muted hover:text-empire-light transition-colors duration-200 group"
        >
          <span className="uppercase tracking-[0.2em]">MAP</span>
          <span
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isMapOpen
                ? "bg-empire-light shadow-[0_0_8px_rgba(20,154,124,0.8)]"
                : "bg-empire-muted/40 group-hover:bg-empire-accent"
            }`}
          />
        </button>
      </header>

      {/* ─── Progress Bar ────────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-40 h-0.5 bg-white/5"
        role="progressbar"
        aria-valuenow={activeChapterId}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label="Chapter progress"
      >
        <div
          className="h-full bg-empire-light transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 8px rgba(20,154,124,0.6)",
          }}
        />
      </div>

      {/* ─── Side Chapter Dots ───────────────────────────────────────── */}
      <nav
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
        aria-label="Chapter quick navigation"
      >
        {CHAPTERS.map((chapter) => {
          const isActive = chapter.id === activeChapterId;
          return (
            <button
              key={chapter.id}
              onClick={() => jumpToChapter(chapter.id, globalLenis || undefined)}
              aria-label={`Go to ${chapter.codename}`}
              aria-current={isActive ? "page" : undefined}
              title={chapter.codename}
              className="group relative flex items-center justify-end gap-2"
            >
              {/* Label on hover */}
              <span
                className="absolute right-5 font-mono text-xs tracking-widest text-empire-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none pr-1"
                style={{ fontSize: "0.6rem" }}
              >
                {chapter.shortName}
              </span>
              {/* Dot */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-empire-light shadow-[0_0_6px_rgba(20,154,124,0.7)]"
                    : "w-1.5 h-1.5 bg-white/20 group-hover:bg-empire-muted"
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ─── Bottom Skip / Next ──────────────────────────────────────── */}
      {activeChapterId < total && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
          <button
            onClick={() => jumpToChapter(activeChapterId + 1, globalLenis || undefined)}
            aria-label={`Skip to next chapter`}
            className="flex flex-col items-center gap-1 font-mono text-xs text-empire-muted/60 hover:text-empire-muted transition-colors duration-200 group"
          >
            <span className="tracking-widest text-xs" style={{ fontSize: "0.6rem" }}>
              NEXT
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce opacity-50 group-hover:opacity-100" />
          </button>
        </div>
      )}
    </>
  );
}

// Minimal inline chevron icon (no lucide dependency needed)
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
