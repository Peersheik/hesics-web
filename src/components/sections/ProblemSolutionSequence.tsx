"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProblemSolutionSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Problem statements refs
  const prob1Ref = useRef<HTMLDivElement>(null);
  const prob2Ref = useRef<HTMLDivElement>(null);
  const prob3Ref = useRef<HTMLDivElement>(null);
  const prob4Ref = useRef<HTMLDivElement>(null);

  // Solution statements refs
  const sol1Ref = useRef<HTMLDivElement>(null);
  const sol2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Master scrubbing timeline pinned across the entire storytelling section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      // Initial state: hide all statements
      gsap.set(
        [
          prob1Ref.current,
          prob2Ref.current,
          prob3Ref.current,
          prob4Ref.current,
          sol1Ref.current,
          sol2Ref.current,
        ],
        { opacity: 0, y: 30, filter: "blur(6px)" }
      );

      // --- PHASE 1: PROBLEM STATEMENTS (0.0 to 0.48) ---
      // 1. "Too many tools."
      tl.to(prob1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.08 })
        .to(prob1Ref.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.06");

      // 2. "Too much manual work."
      tl.to(prob2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.08 })
        .to(prob2Ref.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.06");

      // 3. "Disconnected systems."
      tl.to(prob3Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.08 })
        .to(prob3Ref.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.06");

      // 4. "Digital experiences that don't convert."
      tl.to(prob4Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.08 })
        .to(prob4Ref.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.06");

      // --- PHASE 2: CONVERGENCE & SOLUTION REVEALS (0.50 to 1.0) ---
      // 5. "Technology should feel simpler."
      tl.to(sol1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.12 })
        .to(sol1Ref.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.08");

      // 6. "WE DON'T JUST BUILD. WE SOLVE."
      tl.to(sol2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.16 })
        .to(sol2Ref.current, { opacity: 0.15, y: -20, filter: "blur(2px)", duration: 0.08 }, "+=0.12");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="problem-solution-experience"
      ref={containerRef}
      className="relative w-full h-[550vh] pointer-events-none"
    >
      {/* Sticky Viewport Container keeping typography perfectly centered while user scrolls */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 text-center pointer-events-none select-none">
        
        {/* --- PROBLEM STATEMENTS --- */}
        {/* 1. Too many tools. */}
        <div
          ref={prob1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.25em] mb-4">
            01 // FRAGMENTATION
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-3xl leading-tight">
            Too many tools.
          </h2>
        </div>

        {/* 2. Too much manual work. */}
        <div
          ref={prob2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.25em] mb-4">
            02 // FRICTION
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-3xl leading-tight">
            Too much manual work.
          </h2>
        </div>

        {/* 3. Disconnected systems. */}
        <div
          ref={prob3Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.25em] mb-4">
            03 // ENTROPY
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-3xl leading-tight">
            Disconnected systems.
          </h2>
        </div>

        {/* 4. Digital experiences that don't convert. */}
        <div
          ref={prob4Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.25em] mb-4">
            04 // INEFFICIENCY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl leading-tight">
            Digital experiences that don’t convert.
          </h2>
        </div>

        {/* --- SOLUTION STATEMENTS --- */}
        {/* 5. Technology should feel simpler. */}
        <div
          ref={sol1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.25em] mb-4">
            THE REALIGNMENT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white font-sans max-w-3xl leading-tight">
            Technology should feel <span className="font-semibold text-hesics-teal">simpler</span>.
          </h2>
        </div>

        {/* 6. WE DON'T JUST BUILD. WE SOLVE. */}
        <div
          ref={sol2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] text-hesics-teal uppercase">
              OUR ARCHITECTURAL STANCE
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-sans leading-none uppercase max-w-4xl">
            <span className="block text-neutral-400 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 tracking-normal">
              WE DON’T JUST BUILD.
            </span>
            <span className="text-gradient drop-shadow-[0_0_35px_rgba(12,116,93,0.35)]">
              WE SOLVE.
            </span>
          </h2>
        </div>

      </div>
    </div>
  );
}
