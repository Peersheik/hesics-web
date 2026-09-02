"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HESICS_VALUES_DATA } from "@/lib/valuesData";

export default function ValuesSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Dynamic refs for the 5 Values words & principles
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      valueRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 });
        }
      });

      // Header Tag reveal
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.04 });

      // Animate each value to hold focus across its scroll slice
      valueRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        tl.to(ref, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.14,
        })
        .to(ref, {
          opacity: idx === valueRefs.current.length - 1 ? 0.95 : 0,
          y: idx === valueRefs.current.length - 1 ? 0 : -40,
          scale: idx === valueRefs.current.length - 1 ? 1 : 1.05,
          filter: idx === valueRefs.current.length - 1 ? "blur(0px)" : "blur(10px)",
          duration: 0.08,
        }, "+=0.06");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="values-experience"
      ref={containerRef}
      className="relative w-full h-[600vh] pointer-events-none"
    >
      {/* Sticky Centered Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-16 md:px-24 text-center pointer-events-none select-none">
        
        {/* Top Values Header */}
        <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              CORE PRINCIPLES // VALUES
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            STRUCTURAL CONVICTIONS THAT GUIDE EVERY BUILD
          </p>
        </div>

        {/* Large Typography Values Display */}
        <div className="relative max-w-5xl w-full flex items-center justify-center">
          {HESICS_VALUES_DATA.map((val, idx) => (
            <div
              key={val.id}
              ref={(el) => { valueRefs.current[idx] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            >
              {/* Index & Tagline */}
              <div className="flex items-center gap-3 mb-4 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">
                <span className="text-hesics-teal font-bold">{val.index}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-neutral-400">{val.tagline}</span>
              </div>

              {/* Large Bold Typography */}
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase font-sans mb-6 drop-shadow-[0_0_60px_rgba(12,116,93,0.3)]">
                {val.word}
              </h2>

              {/* Principle Statement */}
              <p className="text-base sm:text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-[0_0_20px_rgba(4,4,5,0.9)]">
                {val.principle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
