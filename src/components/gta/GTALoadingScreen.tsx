"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TIPS = [
  "The best technology feels invisible.",
  "Systems that scale start with systems that think.",
  "Every empire starts with a decision.",
  "We don't ship fast. We ship right.",
  "AI without strategy is just automation theater.",
];

export default function GTALoadingScreen({ onDone }: { onDone: () => void }) {
  const screenRef  = useRef<HTMLDivElement>(null);
  const barRef     = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [tip] = useState(() => TIPS[Math.floor(Math.random() * TIPS.length)]);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Cinematic slide-out
        gsap.to(screenRef.current, {
          yPercent: -100,
          duration: 1.0,
          ease: "power4.inOut",
          onComplete: onDone,
        });
      },
    });

    // Letterbox bars slide in
    tl.fromTo(".gta-bar-top",
      { yPercent: -100 },
      { yPercent: 0, duration: 0.4, ease: "power2.out" }
    ).fromTo(".gta-bar-bottom",
      { yPercent: 100 },
      { yPercent: 0, duration: 0.4, ease: "power2.out" },
      "<"
    );

    // HESICS letters stagger in
    tl.fromTo(
      letterRefs.current.filter(Boolean),
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power4.out" },
      "-=0.1"
    );

    // Subtitle
    tl.fromTo(".gta-subtitle",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "none" },
      "+=0.2"
    );

    // Loading bar
    tl.to(barRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        setPct(progress);
      },
    }, "+=0.1");

    return () => { tl.kill(); };
  }, [onDone]);

  const LETTERS = "HESICS".split("");

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#070810" }}
      aria-label="Loading HESICS"
      aria-live="polite"
    >
      {/* Cinematic bars */}
      <div
        className="gta-bar-top fixed top-0 left-0 right-0 h-16 z-10"
        style={{ background: "#000" }}
      />
      <div
        className="gta-bar-bottom fixed bottom-0 left-0 right-0 h-16 z-10"
        style={{ background: "#000" }}
      />

      {/* Center content */}
      <div className="flex flex-col items-center gap-8">
        {/* Big HESICS letters */}
        <div className="flex items-end gap-1 overflow-hidden">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={(el) => { letterRefs.current[i] = el; }}
              className="opacity-0 select-none"
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
                fontSize: "clamp(5rem, 18vw, 16rem)",
                lineHeight: 1,
                letterSpacing: "0.04em",
                color: "#ffffff",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="gta-subtitle opacity-0 font-mono tracking-[0.3em] text-center"
          style={{ color: "var(--neon, #00e5c8)", fontSize: "0.75rem" }}
        >
          DIGITAL SYSTEMS FOR WHAT'S NEXT
        </p>

        {/* Loading bar */}
        <div className="w-64 flex flex-col gap-2">
          <div
            className="h-px w-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              ref={barRef}
              className="h-full w-0"
              style={{
                background: "var(--neon, #00e5c8)",
                boxShadow: "0 0 8px rgba(0,229,200,0.6)",
              }}
            />
          </div>
          <div className="flex justify-between font-mono" style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)" }}>
            <span>LOADING</span>
            <span>{pct}%</span>
          </div>
        </div>

        {/* Tip */}
        <p
          className="font-mono text-center max-w-xs"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", letterSpacing: "0.08em" }}
        >
          TIP: {tip}
        </p>
      </div>
    </div>
  );
}
