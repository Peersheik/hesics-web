"use client";

import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

/**
 * GTAHud — top HUD bar.
 * Left: HESICS wordmark. Right: current district name + chapter progress.
 * NO separators, no /, no —.
 */
export default function GTAHud() {
  const activeId      = useChapterNav((s) => s.activeChapterId);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);
  const activeChapter = CHAPTERS.find((c) => c.id === activeId);
  const total         = CHAPTERS.length;
  const progress      = ((activeId - 1) / (total - 1)) * 100;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4"
      role="banner"
      aria-label="HESICS HUD"
    >
      {/* Left — HESICS wordmark */}
      <div className="flex items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            letterSpacing: "0.08em",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          HESICS
        </span>
        <span
          className="font-mono hidden sm:block"
          style={{ fontSize: "0.6rem", color: "var(--neon, #00e5c8)", letterSpacing: "0.2em", opacity: 0.8 }}
        >
          EMPIRE
        </span>
      </div>

      {/* Right — district name + progress */}
      <div className="flex items-center gap-6">
        {activeChapter && (
          <div className="hidden sm:flex flex-col items-end gap-1">
            <span
              className="font-mono"
              style={{ fontSize: "0.6rem", color: "var(--neon, #00e5c8)", letterSpacing: "0.2em" }}
            >
              DISTRICT {String(activeId).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1,
              }}
            >
              {activeChapter.codename.replace("THE ", "")}
            </span>
          </div>
        )}

        {/* Skip to next district */}
        {activeId < total && (
          <button
            onClick={() => jumpToChapter(activeId + 1, globalLenis || undefined)}
            aria-label="Next district"
            className="font-mono flex items-center gap-2 transition-all duration-200 group"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.35)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--neon, #00e5c8)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)"; }}
          >
            NEXT
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom progress line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
            background: "var(--neon, #00e5c8)",
            boxShadow: "0 0 6px rgba(0,229,200,0.5)",
          }}
        />
      </div>
    </header>
  );
}
