"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_HESICS_DATA } from "@/lib/aboutData";

export default function AboutSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Dynamic refs for the 4 About story pillars
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      // Initial state
      gsap.set(headerRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
      pillarRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, { opacity: 0, y: 35, filter: "blur(8px)" });
        }
      });

      // Header Tag reveal
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05 });

      // Animate the 4 pillars sequentially with calm human pacing
      pillarRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        tl.to(ref, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.15,
        })
        .to(ref, {
          opacity: idx === pillarRefs.current.length - 1 ? 0.9 : 0,
          y: idx === pillarRefs.current.length - 1 ? 0 : -35,
          filter: idx === pillarRefs.current.length - 1 ? "blur(0px)" : "blur(6px)",
          duration: 0.08,
        }, "+=0.08");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about-experience"
      ref={containerRef}
      className="relative w-full h-[520vh] pointer-events-none"
    >
      {/* Sticky Centered Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-16 md:px-24 text-center pointer-events-none select-none">
        
        {/* Top About Header */}
        <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              ABOUT HESICS // HUMAN & PURPOSE
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            REAL PEOPLE & THOUGHTFUL ENGINEERING
          </p>
        </div>

        {/* 4 Story Pillars Sequence */}
        <div className="relative max-w-3xl w-full flex items-center justify-center">
          {ABOUT_HESICS_DATA.map((pillar, idx) => (
            <div
              key={pillar.id}
              ref={(el) => { pillarRefs.current[idx] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#040405]/60 backdrop-blur-xl"
            >
              {/* Pillar Tag & Highlight */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.25em]">
                  {pillar.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="font-mono text-[11px] text-neutral-400 tracking-wider">
                  {pillar.highlightNote}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans uppercase mb-2">
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p className="font-mono text-xs sm:text-sm text-hesics-teal uppercase tracking-widest mb-6">
                {pillar.subtitle}
              </p>

              {/* Body Text */}
              <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
