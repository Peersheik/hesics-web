"use client";

import { useEffect, useCallback } from "react";
import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

export default function MapOverlay() {
  const isMapOpen = useChapterNav((s) => s.isMapOpen);
  const closeMap = useChapterNav((s) => s.closeMap);
  const activeChapterId = useChapterNav((s) => s.activeChapterId);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMapOpen) closeMap();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMapOpen, closeMap]);

  const handleJump = useCallback(
    (id: number) => {
      jumpToChapter(id, globalLenis || undefined);
    },
    [jumpToChapter]
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-[#040405]/90 backdrop-blur-lg transition-opacity duration-500 ${
          isMapOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMap}
        aria-hidden="true"
      />

      {/* Map panel */}
      <div
        role="dialog"
        aria-label="HESICS Empire Map"
        aria-modal="true"
        className={`fixed inset-0 z-[70] flex items-center justify-center p-6 transition-all duration-500 ${
          isMapOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Map header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-empire-light mb-1">
                HESICS
              </p>
              <h2 className="font-mono text-2xl font-bold tracking-[0.15em] text-white">
                THE MAP
              </h2>
            </div>
            <button
              onClick={closeMap}
              aria-label="Close map"
              className="font-mono text-xs tracking-widest text-empire-muted/60 hover:text-white transition-colors duration-200 border border-white/10 hover:border-white/30 px-4 py-2 rounded-sm"
            >
              CLOSE
            </button>
          </div>

          {/* Chapter list */}
          <div className="flex flex-col gap-1">
            {CHAPTERS.map((chapter, index) => {
              const isActive = chapter.id === activeChapterId;
              const isPast = chapter.id < activeChapterId;

              return (
                <button
                  key={chapter.id}
                  onClick={() => handleJump(chapter.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center gap-5 px-5 py-4 rounded-sm border transition-all duration-300 text-left ${
                    isActive
                      ? "border-empire-light/40 bg-empire-light/5"
                      : "border-white/[0.04] hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Chapter number */}
                  <span
                    className={`font-mono text-sm font-bold tabular-nums transition-colors duration-200 ${
                      isActive ? "text-empire-light" : isPast ? "text-empire-muted/50" : "text-white/30"
                    }`}
                  >
                    {String(chapter.id).padStart(2, "0")}
                  </span>

                  {/* Connector line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-px transition-all duration-300 ${
                        index === 0 ? "h-0" : "h-2"
                      } ${isPast ? "bg-empire-light/40" : "bg-white/10"}`}
                    />
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-empire-light shadow-[0_0_8px_rgba(20,154,124,0.8)] scale-125"
                          : isPast
                          ? "bg-empire-light/40"
                          : "bg-white/20"
                      }`}
                    />
                  </div>

                  {/* Chapter info */}
                  <div className="flex-1">
                    <p
                      className={`font-mono text-xs font-bold tracking-[0.2em] transition-colors duration-200 ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {chapter.codename}
                    </p>
                    <p className="font-mono text-xs text-empire-muted/50 mt-0.5 tracking-wider">
                      {chapter.description}
                    </p>
                  </div>

                  {/* Active indicator arrow */}
                  {isActive && (
                    <span className="font-mono text-empire-light text-xs animate-pulse">
                      ▶
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between">
            <p className="font-mono text-xs text-empire-muted/40 tracking-widest">
              CLICK ANY CHAPTER TO TRAVEL THERE
            </p>
            <p className="font-mono text-xs text-empire-muted/40">
              ESC TO CLOSE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
