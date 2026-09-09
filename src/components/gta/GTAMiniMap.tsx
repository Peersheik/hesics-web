"use client";

import { useCallback } from "react";
import { useChapterNav, CHAPTERS } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

/**
 * GTA V-style mini-map — fixed bottom-left corner.
 *
 * Circular HUD with:
 *  - Animated radar sweep
 *  - District dots connected by road lines
 *  - Pulsing player blip on current chapter
 *  - Visited districts brighter than unvisited
 *  - Click any dot to navigate
 *  - Location label below
 */

// Mini-map district positions inside 160×160 grid (centered in 200px circle)
// Arranged as a city-block layout — EMPIRE at center
const MAP_SIZE   = 200; // total element size px
const GRID       = 160; // usable inner grid px
const OFFSET     = 20;  // padding from edge to grid

const MINI_POSITIONS: Record<number, { x: number; y: number }> = {
  1: { x: 138, y: 38  }, // ENTRANCE   — outer top-right
  2: { x: 152, y: 88  }, // ORIGIN     — right edge
  3: { x: 128, y: 138 }, // BLUEPRINT  — bottom-right
  4: { x: 80,  y: 155 }, // ARSENAL    — bottom center
  5: { x: 32,  y: 128 }, // OPERATIONS — bottom-left
  6: { x: 18,  y: 80  }, // VAULT      — left edge
  7: { x: 42,  y: 32  }, // CREW       — top-left
  8: { x: 100, y: 85  }, // EMPIRE     — center
};

// Route: 1→2→3→4→5→6→7→8
const ROUTE = [1,2,3,4,5,6,7,8];

export default function GTAMiniMap() {
  const activeId      = useChapterNav((s) => s.activeChapterId);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);
  const activeChapter = CHAPTERS.find((c) => c.id === activeId);

  const handleClick = useCallback((id: number) => {
    jumpToChapter(id, globalLenis || undefined);
  }, [jumpToChapter]);

  const cx = MAP_SIZE / 2; // 100
  const cy = MAP_SIZE / 2; // 100
  const R  = cx - 2;       // clip radius

  return (
    <div
      className="fixed bottom-5 left-5 z-[200] select-none"
      aria-label="HESICS District Map"
      role="navigation"
    >
      {/* Location label above mini-map */}
      <div
        className="mb-1.5 font-mono flex items-center gap-2"
        style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)" }}
      >
        <span style={{ color: "var(--neon, #00e5c8)" }}>◆</span>
        <span style={{ color: "var(--neon, #00e5c8)", fontWeight: 700 }}>
          {activeChapter?.codename ?? "HESICS"}
        </span>
      </div>

      {/* Circular container */}
      <div
        style={{
          width: MAP_SIZE,
          height: MAP_SIZE,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid rgba(0,229,200,0.35)",
          boxShadow: "0 0 20px rgba(0,229,200,0.15), inset 0 0 20px rgba(0,0,0,0.8)",
          position: "relative",
        }}
      >
        <svg
          width={MAP_SIZE}
          height={MAP_SIZE}
          viewBox={`0 0 ${MAP_SIZE} ${MAP_SIZE}`}
          style={{ display: "block" }}
        >
          {/* Dark base */}
          <circle cx={cx} cy={cy} r={R} fill="rgba(7,8,16,0.92)" />

          {/* Subtle concentric rings (city-block feel) */}
          {[30, 55, 75].map((r) => (
            <circle
              key={r}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="rgba(0,229,200,0.04)"
              strokeWidth={1}
            />
          ))}

          {/* Cross-hair lines */}
          <line x1={cx} y1={4} x2={cx} y2={MAP_SIZE-4} stroke="rgba(0,229,200,0.05)" strokeWidth={0.5} />
          <line x1={4} y1={cy} x2={MAP_SIZE-4} y2={cy} stroke="rgba(0,229,200,0.05)" strokeWidth={0.5} />

          {/* Route lines (dashed roads) */}
          {ROUTE.slice(0, -1).map((id, i) => {
            const from = MINI_POSITIONS[id];
            const to   = MINI_POSITIONS[ROUTE[i + 1]];
            const isActive = id <= activeId && ROUTE[i + 1] <= activeId;
            return (
              <line
                key={`r${id}`}
                x1={from.x} y1={from.y}
                x2={to.x}   y2={to.y}
                stroke={isActive ? "rgba(0,229,200,0.5)" : "rgba(255,255,255,0.1)"}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray={isActive ? "none" : "4 4"}
                strokeLinecap="round"
              />
            );
          })}

          {/* District dots */}
          {CHAPTERS.map((chapter) => {
            const pos      = MINI_POSITIONS[chapter.id];
            const isActive = chapter.id === activeId;
            const isVisited= chapter.id < activeId;

            return (
              <g
                key={chapter.id}
                role="button"
                tabIndex={0}
                aria-label={`Travel to ${chapter.codename}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(chapter.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick(chapter.id); }}
              >
                {/* Outer glow for active */}
                {isActive && (
                  <circle
                    cx={pos.x} cy={pos.y} r={10}
                    fill="rgba(0,229,200,0.1)"
                    stroke="rgba(0,229,200,0.3)"
                    strokeWidth={1}
                  />
                )}

                {/* Main dot */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 5 : chapter.id === 8 ? 6 : 3.5}
                  fill={
                    isActive  ? "#ffffff"
                    : isVisited ? "rgba(0,229,200,0.7)"
                    : chapter.id === 8 ? "rgba(245,197,24,0.5)"
                    : "rgba(255,255,255,0.2)"
                  }
                  stroke={isActive ? "var(--neon, #00e5c8)" : "none"}
                  strokeWidth={isActive ? 1.5 : 0}
                  style={isActive ? { animation: "blipPulse 1.2s ease-in-out infinite" } : undefined}
                />

                {/* Chapter number label (tiny) */}
                <text
                  x={pos.x}
                  y={pos.y - 8}
                  textAnchor="middle"
                  fill={isActive ? "var(--neon, #00e5c8)" : "rgba(255,255,255,0.25)"}
                  fontSize={7}
                  fontFamily="'Courier New', monospace"
                  fontWeight="700"
                >
                  {chapter.id}
                </text>
              </g>
            );
          })}

          {/* Radar sweep */}
          <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: "radarSweep 4s linear infinite" }}>
            <path
              d={`M ${cx} ${cy} L ${cx} ${cy - R} A ${R} ${R} 0 0 1 ${cx + R * Math.sin(Math.PI/3)} ${cy - R * Math.cos(Math.PI/3)} Z`}
              fill="url(#radarGrad)"
              opacity={0.18}
            />
          </g>

          {/* Radar gradient */}
          <defs>
            <radialGradient id="radarGrad" cx="0%" cy="100%">
              <stop offset="0%" stopColor="rgba(0,229,200,0.6)" />
              <stop offset="100%" stopColor="rgba(0,229,200,0)" />
            </radialGradient>
          </defs>

          {/* Clip circle */}
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(0,229,200,0.2)" strokeWidth={0.5} />

          {/* North indicator */}
          <text
            x={cx} y={10}
            textAnchor="middle"
            fill="rgba(255,255,255,0.25)"
            fontSize={7}
            fontFamily="'Courier New', monospace"
          >
            N
          </text>
        </svg>
      </div>

      {/* Chapter number badge */}
      <div
        className="mt-1.5 font-mono text-center"
        style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }}
      >
        DISTRICT {String(activeId).padStart(2, "0")} OF 08
      </div>
    </div>
  );
}
