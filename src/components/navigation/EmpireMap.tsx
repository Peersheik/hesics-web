"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import gsap from "gsap";
import { useChapterNav } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";
import { DISTRICTS, getRouteSegments, type District } from "@/data/districts";
import { DISTRICT_LINES } from "@/data/architectLines";
import { ArchitectEmblem } from "@/components/guide/ArchitectNote";

const SVG_W = 1000;
const SVG_H = 640;

// ─── SVG background grid ────────────────────────────────────────────────────
function MapGrid() {
  const lines: React.ReactElement[] = [];
  const STEP = 80;
  for (let x = 0; x <= SVG_W; x += STEP) {
    lines.push(
      <line key={`v${x}`} x1={x} y1={0} x2={x} y2={SVG_H}
        stroke="rgba(12,116,93,0.06)" strokeWidth={1} />
    );
  }
  for (let y = 0; y <= SVG_H; y += STEP) {
    lines.push(
      <line key={`h${y}`} x1={0} y1={y} x2={SVG_W} y2={y}
        stroke="rgba(12,116,93,0.06)" strokeWidth={1} />
    );
  }
  return <>{lines}</>;
}

// ─── Dashed route lines ──────────────────────────────────────────────────────
function RouteLines() {
  const segments = getRouteSegments();
  return (
    <>
      {segments.map(([from, to]) => (
        <line
          key={`${from.id}-${to.id}`}
          x1={from.mapX} y1={from.mapY}
          x2={to.mapX}   y2={to.mapY}
          stroke="rgba(20,154,124,0.22)"
          strokeWidth={1.5}
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

// ─── Single District node ────────────────────────────────────────────────────
interface DistrictNodeProps {
  district: District;
  isActive: boolean;
  /** chapter ids the visitor has scrolled past — visually dim others */
  visitedIds: Set<number>;
  isMobile: boolean;
  onHover: (d: District | null) => void;
  onClick: (d: District) => void;
}

function DistrictNode({
  district,
  isActive,
  visitedIds,
  isMobile,
  onHover,
  onClick,
}: DistrictNodeProps) {
  const nodeRef = useRef<SVGGElement>(null);
  const isVisited = visitedIds.has(district.id) || district.id === 1;
  const dimmed = !isVisited && !isActive; // soft-locked visual state

  // GSAP hover scale
  const handleMouseEnter = useCallback(() => {
    if (nodeRef.current) {
      gsap.to(nodeRef.current, { scale: 1.05, duration: 0.4, ease: "power4.out", transformOrigin: "center center" });
    }
    onHover(district);
  }, [district, onHover]);

  const handleMouseLeave = useCallback(() => {
    if (nodeRef.current) {
      gsap.to(nodeRef.current, { scale: 1, duration: 0.35, ease: "power4.out", transformOrigin: "center center" });
    }
    onHover(null);
  }, [onHover]);

  const { mapX: cx, mapY: cy, mapSize: r } = district;
  const label = district.mapLabel ?? district.shortName;

  return (
    <g
      ref={nodeRef}
      role="button"
      tabIndex={0}
      aria-label={`Travel to ${district.codename}`}
      aria-current={isActive ? "page" : undefined}
      style={{ cursor: "pointer", opacity: dimmed ? 0.38 : 1 }}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      onClick={() => onClick(district)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(district); }}
    >
      {/* Active district: pulsing --power ring */}
      {isActive && (
        <circle
          cx={cx} cy={cy} r={r + 12}
          fill="none"
          stroke="var(--power)"
          strokeWidth={1.5}
          opacity={0.6}
          style={{ animation: "empireMapPulse 2s ease-in-out infinite" }}
        />
      )}

      {/* Outer glow ring */}
      <circle
        cx={cx} cy={cy} r={r + 4}
        fill="none"
        stroke={isActive ? "var(--power)" : "var(--accent)"}
        strokeWidth={isActive ? 1.5 : 0.8}
        opacity={isActive ? 0.5 : 0.2}
      />

      {/* Main node circle */}
      <circle
        cx={cx} cy={cy} r={r}
        fill={isActive ? "rgba(138,28,28,0.12)" : "rgba(12,116,93,0.08)"}
        stroke={isActive ? "var(--power)" : "var(--accent-light)"}
        strokeWidth={isActive ? 2 : 1}
      />

      {/* District number */}
      <text
        x={cx} y={cy + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isActive ? "var(--power)" : "var(--accent-light)"}
        fontSize={isActive ? 13 : 11}
        fontFamily="'Courier New', monospace"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        {String(district.id).padStart(2, "0")}
      </text>

      {/* District label — below node */}
      <text
        x={cx} y={cy + r + 16}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)"}
        fontSize={9}
        fontFamily="'Courier New', monospace"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        {label}
      </text>

      {/* Mobile: always-visible briefing snippet */}
      {isMobile && (
        <text
          x={cx} y={cy + r + 28}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize={7}
          fontFamily="'Courier New', monospace"
          fontStyle="italic"
          letterSpacing="0.04em"
        >
          {DISTRICT_LINES[district.id]?.slice(0, 38) + "…"}
        </text>
      )}
    </g>
  );
}

// ─── Briefing note panel (shown on desktop district hover) ──────────────────
function BriefingPanel({ district }: { district: District | null }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (district) {
      gsap.fromTo(el, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power4.out" });
    } else {
      gsap.to(el, { opacity: 0, duration: 0.2, ease: "power2.in" });
    }
  }, [district]);

  return (
    <div
      ref={panelRef}
      className="absolute bottom-16 left-6 opacity-0 flex items-start gap-3 max-w-xs pointer-events-none"
      aria-live="polite"
    >
      <ArchitectEmblem size={14} />
      <p className="font-mono text-xs text-white/50 italic leading-relaxed" style={{ fontSize: "0.68rem" }}>
        {district ? DISTRICT_LINES[district.id] : ""}
      </p>
    </div>
  );
}

// ─── Main EmpireMap component ────────────────────────────────────────────────
export default function EmpireMap() {
  const isMapOpen     = useChapterNav((s) => s.isMapOpen);
  const closeMap      = useChapterNav((s) => s.closeMap);
  const activeChapter = useChapterNav((s) => s.activeChapterId);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Visited ids: all ids <= activeChapter (soft-lock visual)
  const visitedIds = new Set(DISTRICTS.filter((d) => d.id <= activeChapter).map((d) => d.id));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Keyboard: Escape closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && isMapOpen) closeMap(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMapOpen, closeMap]);

  const handleDistrictClick = useCallback((d: District) => {
    jumpToChapter(d.id, globalLenis || undefined);
  }, [jumpToChapter]);

  return (
    <>
      {/* ── Pulsing ring keyframe ── */}
      <style>{`
        @keyframes empireMapPulse {
          0%, 100% { r: ${0}; opacity: 0.6; }
          50%       { r: ${16}; opacity: 0.2; }
        }
        @keyframes empireMapPulse {
          0%   { opacity: 0.6; stroke-width: 1.5; }
          50%  { opacity: 0.15; stroke-width: 3; }
          100% { opacity: 0.6; stroke-width: 1.5; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isMapOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-md bg-[#040405]/92"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMap}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="HESICS Empire Map — select a district"
        className={`fixed inset-0 z-[70] flex flex-col transition-all duration-500 ${
          isMapOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05] shrink-0">
          <div className="flex items-center gap-3">
            <ArchitectEmblem size={18} />
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-accent-light" style={{ color: "var(--accent-light)", letterSpacing: "0.25em" }}>
                HESICS
              </p>
              <h2 className="font-mono text-lg font-bold tracking-[0.12em] text-white">
                THE EMPIRE MAP
              </h2>
            </div>
          </div>
          <button
            onClick={closeMap}
            aria-label="Close empire map"
            className="font-mono text-xs tracking-widest border border-white/10 hover:border-white/30 text-white/40 hover:text-white px-4 py-2 transition-all duration-200 rounded-sm"
          >
            CLOSE  ESC
          </button>
        </div>

        {/* Map canvas */}
        <div className="flex-1 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={3}
            centerOnInit
            limitToBounds={false}
            panning={{ velocityDisabled: false }}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
              contentStyle={{ width: "100%", height: "100%" }}
            >
              <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                width="100%"
                height="100%"
                style={{ display: "block", userSelect: "none" }}
                aria-label="HESICS Empire territory map"
              >
                {/* Background texture grid */}
                <MapGrid />

                {/* Route dashed lines */}
                <RouteLines />

                {/* District nodes */}
                {DISTRICTS.map((district) => (
                  <DistrictNode
                    key={district.id}
                    district={district}
                    isActive={district.id === activeChapter}
                    visitedIds={visitedIds}
                    isMobile={isMobile}
                    onHover={setHoveredDistrict}
                    onClick={handleDistrictClick}
                  />
                ))}

                {/* HESICS watermark at center of map */}
                <text
                  x={SVG_W / 2} y={SVG_H / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgba(12,116,93,0.04)"
                  fontSize={140}
                  fontFamily="'Arial Narrow', sans-serif"
                  fontWeight="900"
                  letterSpacing="-0.05em"
                  style={{ pointerEvents: "none", userSelect: "none" }}
                >
                  HESICS
                </text>
              </svg>
            </TransformComponent>
          </TransformWrapper>

          {/* Desktop: briefing note on hover */}
          {!isMobile && <BriefingPanel district={hoveredDistrict} />}

          {/* Footer hints */}
          <div className="absolute bottom-4 right-6 font-mono text-xs text-white/20 tracking-widest" style={{ fontSize: "0.6rem" }}>
            SCROLL TO ZOOM · DRAG TO PAN · CLICK TO TRAVEL
          </div>
        </div>
      </div>
    </>
  );
}
