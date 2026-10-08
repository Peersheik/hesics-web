"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

const DEFAULT_CONFIG = {
  gravity: 1250,
  damping: 0.94,
  iterations: 20,
  stretchMax: 35,
  stretchToggle: 15,
  maxVelocity: 22,
  sleepVelocity: 0.15,
};

const W = 64;
const ANCHOR_X = W / 2;
const REST_Y = 176;
const SVG_H = 340;
const SEGMENTS = 16;
const REST_SEG = REST_Y / SEGMENTS;
const KNOB_R = 7;
const HIT = 50;

interface Point {
  x: number;
  y: number;
  ox: number;
  oy: number;
  fixed: boolean;
}

function buildPath(p: Point[]): string {
  let d = `M ${p[0].x.toFixed(1)} ${p[0].y.toFixed(1)}`;
  for (let i = 1; i < p.length - 1; i++) {
    const xc = (p[i].x + p[i + 1].x) / 2;
    const yc = (p[i].y + p[i + 1].y) / 2;
    d += ` Q ${p[i].x.toFixed(1)} ${p[i].y.toFixed(1)} ${xc.toFixed(1)} ${yc.toFixed(1)}`;
  }
  const n = p.length - 1;
  d += ` L ${p[n].x.toFixed(1)} ${p[n].y.toFixed(1)}`;
  return d;
}

function makeNodes(): Point[] {
  const arr: Point[] = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const y = REST_SEG * i;
    arr.push({ x: ANCHOR_X, y, ox: ANCHOR_X, oy: y, fixed: i === 0 });
  }
  return arr;
}

const INITIAL_PATH = buildPath(makeNodes());

export interface PullCordProps {
  onPull?: () => void;
  pulled?: boolean;
  ariaLabel?: string;
  noEntrance?: boolean;
  config?: Partial<typeof DEFAULT_CONFIG>;
  className?: string;
}

export function PullCord({
  onPull,
  pulled = false,
  ariaLabel = "Pull the cord to toggle theme",
  noEntrance = false,
  config,
  className,
}: PullCordProps) {
  const cfgRef = useRef({ ...DEFAULT_CONFIG });
  Object.assign(cfgRef.current, DEFAULT_CONFIG, config);

  const knobRef = useRef<HTMLButtonElement>(null);
  const cordRef = useRef<SVGPathElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const dragging = useRef(false);
  const didDrag = useRef(false);
  const clicked = useRef(false);
  const target = useRef({ x: ANCHOR_X, y: REST_Y });
  const pointerStart = useRef({ x: 0, y: 0 });
  const wake = useRef(() => {});
  const onPullRef = useRef(onPull);
  onPullRef.current = onPull;

  const nodesRef = useRef<Point[] | null>(null);
  if (nodesRef.current === null) nodesRef.current = makeNodes();

  const [drop, setDrop] = useState(!noEntrance);
  const dropDone = useRef(noEntrance);

  useEffect(() => {
    const pts = nodesRef.current;
    if (!pts) return;
    const last = pts.length - 1;
    let raf = 0;
    let running = false;
    let prevT = 0;
    let prevDt = 0;

    const render = () => {
      cordRef.current?.setAttribute("d", buildPath(pts));
      const tx = (pts[last].x - ANCHOR_X).toFixed(2);
      const ty = (pts[last].y - REST_Y).toFixed(2);
      groupRef.current?.setAttribute("transform", `translate(${tx} ${ty})`);
      if (knobRef.current) {
        knobRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }
    };

    const step = (now: number) => {
      const { gravity, damping, iterations, sleepVelocity } = cfgRef.current;
      const dt = prevT ? Math.min(0.04, Math.max(4e-3, (now - prevT) / 1e3)) : 1 / 60;
      prevT = now;
      const tc = prevDt > 0 ? dt / prevDt : 1;
      const velCoef = tc * Math.pow(damping, dt * 60);
      const accCoef = dt * dt;

      pts[last].fixed = dragging.current;
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i];
        if (p.fixed) continue;
        const vx = p.x - p.ox;
        const vy = p.y - p.oy;
        p.ox = p.x;
        p.oy = p.y;
        p.x += vx * velCoef;
        p.y += vy * velCoef + gravity * accCoef;
      }

      pts[0].x = ANCHOR_X;
      pts[0].y = 0;

      if (dragging.current) {
        pts[last].ox = pts[last].x;
        pts[last].oy = pts[last].y;
        pts[last].x = target.current.x;
        pts[last].y = target.current.y;
      }

      for (let k = 0; k < iterations; k++) {
        for (let i = 0; i < last; i++) {
          const a = pts[i];
          const b = pts[i + 1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 1e-4;
          const diff = ((REST_SEG - dist) / dist) * 0.5;
          const ox = dx * diff;
          const oy = dy * diff;
          if (!a.fixed) {
            a.x -= ox;
            a.y -= oy;
          }
          if (!b.fixed) {
            b.x += ox;
            b.y += oy;
          }
        }
      }

      prevDt = dt;
      render();

      let speed = 0;
      for (let i = 1; i < pts.length; i++) {
        speed += Math.abs(pts[i].x - pts[i].ox) + Math.abs(pts[i].y - pts[i].oy);
      }

      if (!dragging.current && speed < sleepVelocity * dt * 60) {
        render();
        running = false;
        return;
      }

      raf = requestAnimationFrame(step);
    };

    wake.current = () => {
      if (running) return;
      running = true;
      prevT = 0;
      prevDt = 0;
      raf = requestAnimationFrame(step);
    };

    render();
    return () => cancelAnimationFrame(raf);
  }, []);

  const doToggle = () => onPullRef.current?.();

  const triggerPullAnimation = () => {
    doToggle();
    const pts = nodesRef.current;
    if (pts) {
      const last = pts.length - 1;
      // Impart downward velocity (y increases downward, so oy = y - 50 means vy = +50 downward pull)
      pts[last].oy = pts[last].y - 50;
      pts[last].ox = pts[last].x + (Math.random() > 0.5 ? 8 : -8);
      wake.current();
    }
  };

  // Direct robust PointerEvent handlers for dragging and click
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    dragging.current = true;
    didDrag.current = false;
    clicked.current = false;
    pointerStart.current = { x: e.clientX, y: e.clientY };
    wake.current();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - pointerStart.current.x;
    const dy = e.clientY - pointerStart.current.y;
    if (Math.hypot(dx, dy) > 3) {
      didDrag.current = true;
    }

    const { stretchMax, stretchToggle } = cfgRef.current;
    const rx = dx;
    const ry = REST_Y + Math.max(0, dy);
    const dist = Math.hypot(rx, ry) || 1e-4;
    const maxD = REST_Y + stretchMax;
    const k = dist > maxD ? maxD / dist : 1;
    target.current = { x: ANCHOR_X + rx * k, y: ry * k };

    const clickAt = Math.min(stretchToggle, stretchMax - 1);
    if (!clicked.current && dist - REST_Y >= clickAt) {
      clicked.current = true;
      triggerPullAnimation();
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging.current) return;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}

    const wasDragging = didDrag.current;
    dragging.current = false;

    const pts = nodesRef.current;
    if (pts) {
      const p = pts[pts.length - 1];
      const vx = p.x - p.ox;
      const vy = p.y - p.oy;
      const v = Math.hypot(vx, vy);
      const { maxVelocity } = cfgRef.current;
      if (v > maxVelocity) {
        const k = maxVelocity / v;
        p.ox = p.x - vx * k;
        p.oy = p.y - vy * k;
      }
      wake.current();
    }

    // If it was just a tap / click without reaching stretch threshold, pull and toggle
    if (!wasDragging && !clicked.current) {
      triggerPullAnimation();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If not already dragged and clicked during pointer move/up
    if (!clicked.current && !didDrag.current) {
      triggerPullAnimation();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
      e.preventDefault();
      triggerPullAnimation();
    }
  };

  const endDrop = useCallback(() => {
    if (dropDone.current) return;
    dropDone.current = true;
    setDrop(false);
    const pts = nodesRef.current;
    if (!pts) return;
    pts[pts.length - 1].oy -= 15;
    pts[pts.length - 1].ox -= 6;
    wake.current();
  }, []);

  useEffect(() => {
    if (noEntrance) return;
    const fb = window.setTimeout(endDrop, 1500);
    return () => window.clearTimeout(fb);
  }, [endDrop, noEntrance]);

  const onDropEnd = (e: React.AnimationEvent) => {
    if (e.animationName !== "pullcord-drop") return;
    endDrop();
  };

  return (
    <div
      className={className ? `pullcord ${className}` : "pullcord"}
      style={{
        position: "fixed",
        top: "var(--pullcord-top, 0px)",
        right: "var(--pullcord-right, 2rem)",
        zIndex: 99999,
        width: W,
        height: SVG_H,
        pointerEvents: "none",
      }}
    >
      <div
        className={drop ? "pullcord-inner pullcord-inner--drop" : "pullcord-inner"}
        onAnimationEnd={onDropEnd}
      >
        <svg
          viewBox={`0 0 ${W} ${SVG_H}`}
          width={W}
          height={SVG_H}
          aria-hidden="true"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="pc-knob" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3ce5e" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="pc-knob-sh" x="-70%" y="-70%" width="240%" height="240%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.5)" />
            </filter>
          </defs>
          <path
            ref={cordRef}
            d={INITIAL_PATH}
            stroke="var(--pullcord-ink, rgba(212, 175, 55, 0.75))"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <g ref={groupRef}>
            <g filter="url(#pc-knob-sh)">
              <circle
                cx={ANCHOR_X}
                cy={REST_Y}
                r={KNOB_R}
                fill="url(#pc-knob)"
                stroke="rgba(0,0,0,0.25)"
                strokeWidth={1}
              />
            </g>
          </g>
        </svg>

        <button
          ref={knobRef}
          type="button"
          className="pullcord-knob"
          aria-label={ariaLabel}
          aria-pressed={pulled}
          title={ariaLabel}
          onClick={handleClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
          style={{
            position: "absolute",
            left: ANCHOR_X - HIT / 2,
            top: REST_Y - HIT / 2,
            width: HIT,
            height: HIT,
            padding: 0,
            border: "none",
            background: "transparent",
            cursor: "grab",
            touchAction: "none",
            pointerEvents: "auto",
            zIndex: 100000,
          }}
        />
      </div>
    </div>
  );
}

export function ThemePullCord() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? localStorage.getItem("hesics-theme") : null;
    const isLight = saved === "light";
    setDark(!isLight);
    if (isLight) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, []);

  const handleToggle = () => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        // Going to dark
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        try { localStorage.setItem("hesics-theme", "dark"); } catch {}
      } else {
        // Going to light
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.body.style.backgroundColor = "#f8fafc";
        document.body.style.color = "#0f172a";
        try { localStorage.setItem("hesics-theme", "light"); } catch {}
      }
      return next;
    });
  };

  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", top: 0, right: 0, zIndex: 99999, pointerEvents: "none" }}>
      <PullCord
        onPull={handleToggle}
        pulled={!dark}
        ariaLabel="Toggle between Dark and Light mode"
        config={{
          gravity: 1250,
          damping: 0.94,
          iterations: 20,
          stretchMax: 35,
        }}
      />
    </div>
  );
}

export default ThemePullCord;
