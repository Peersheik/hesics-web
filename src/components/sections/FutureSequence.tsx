"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FutureSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // 8 Elements Streams Ref
  const streamsGridRef = useRef<HTMLDivElement>(null);
  const streamItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Climax Statements Refs
  const notTodayRef = useRef<HTMLDivElement>(null);
  const whatsNextRef = useRef<HTMLDivElement>(null);
  const brandManifestoRef = useRef<HTMLDivElement>(null);

  const STREAMS = [
    { label: "WEB", desc: "Digital Architecture" },
    { label: "AI", desc: "Cognitive Intelligence" },
    { label: "SAAS", desc: "Scalable Platforms" },
    { label: "AUTOMATION", desc: "Operational Velocity" },
    { label: "MARKETING", desc: "Authority & Reach" },
    { label: "PROJECTS", desc: "Proof of Craft" },
    { label: "PEOPLE", desc: "Human Dedication" },
    { label: "IDEAS", desc: "Enduring Vision" },
  ];

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
      gsap.set(headerRef.current, { opacity: 0, y: 25, filter: "blur(6px)" });
      gsap.set(streamsGridRef.current, { opacity: 0, scale: 0.9, filter: "blur(8px)" });
      streamItemRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, scale: 0.85, filter: "blur(6px)" });
      });
      gsap.set(notTodayRef.current, { opacity: 0, y: 35, filter: "blur(10px)" });
      gsap.set(whatsNextRef.current, { opacity: 0, y: 35, filter: "blur(10px)" });
      gsap.set(brandManifestoRef.current, { opacity: 0, scale: 0.92, filter: "blur(14px)" });

      // Step 1: Reveal Header & 8 Elements Converging
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.08 })
        .to(streamsGridRef.current, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.12 }, "-=0.04");

      streamItemRefs.current.forEach((el, idx) => {
        if (el) {
          tl.to(el, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.06 }, `-=${0.04}`);
        }
      });

      // Hold streams briefly, then converge/dissolve
      tl.to([streamsGridRef.current, headerRef.current], {
        opacity: 0,
        scale: 0.8,
        filter: "blur(12px)",
        duration: 0.14,
      }, "+=0.1");

      // Step 2: "WE'RE NOT BUILDING FOR TODAY."
      tl.to(notTodayRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.18,
      })
      .to(notTodayRef.current, {
        opacity: 0,
        y: -30,
        filter: "blur(8px)",
        duration: 0.12,
      }, "+=0.1");

      // Step 3: "WE'RE BUILDING FOR WHAT'S NEXT."
      tl.to(whatsNextRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
      })
      .to(whatsNextRef.current, {
        opacity: 0,
        y: -30,
        filter: "blur(8px)",
        duration: 0.12,
      }, "+=0.1");

      // Step 4: GRAND CLIMAX MANIFESTO "ONE VISION. ONE MISSION. ONE US."
      tl.to(brandManifestoRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.28,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="future-experience"
      ref={containerRef}
      className="relative w-full h-[650vh] pointer-events-none"
    >
      {/* Sticky Centered Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-16 md:px-24 text-center pointer-events-none select-none">
        
        {/* Top Future Header */}
        <div ref={headerRef} className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/40 bg-hesics-primary/15 backdrop-blur-md shadow-[0_0_20px_rgba(12,116,93,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-ping" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase font-bold">
              THE CONVERGENCE // WHAT'S NEXT
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase">
            EVERY SYSTEM CONVERGING INTO ONE UNIFIED WHOLE
          </p>
        </div>

        {/* 1. Convergence of 8 Streams Grid */}
        <div
          ref={streamsGridRef}
          className="absolute inset-0 flex flex-col items-center justify-center max-w-5xl mx-auto pointer-events-auto px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full">
            {STREAMS.map((s, idx) => (
              <div
                key={s.label}
                ref={(el) => { streamItemRefs.current[idx] = el; }}
                className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#040405]/80 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 hover:border-hesics-teal/50 hover:shadow-[0_0_30px_rgba(20,154,124,0.2)]"
              >
                <span className="font-mono text-[10px] text-hesics-teal tracking-[0.25em] mb-1 uppercase">
                  0{idx + 1} //
                </span>
                <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
                  {s.label}
                </span>
                <span className="font-mono text-[11px] text-neutral-400 mt-1 uppercase tracking-wider">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs text-neutral-400 tracking-widest uppercase">
            SYNCHRONIZING INDEPENDENT CAPABILITIES INTO A UNIFIED ENGINE
          </p>
        </div>

        {/* 2. "WE'RE NOT BUILDING FOR TODAY." */}
        <div
          ref={notTodayRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
        >
          <span className="font-mono text-xs text-neutral-400 tracking-[0.3em] uppercase mb-4">
            THE TIME HORIZON
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-neutral-400 uppercase tracking-tight max-w-4xl leading-tight font-sans drop-shadow-[0_0_40px_rgba(4,4,5,0.9)]">
            WE&apos;RE NOT BUILDING <br />
            <span className="text-neutral-500 font-extrabold line-through decoration-hesics-teal/60">FOR TODAY.</span>
          </h2>
        </div>

        {/* 3. "WE'RE BUILDING FOR WHAT'S NEXT." */}
        <div
          ref={whatsNextRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
        >
          <span className="font-mono text-xs text-hesics-teal tracking-[0.35em] uppercase mb-4">
            OUR PURPOSE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight max-w-5xl leading-tight font-sans drop-shadow-[0_0_60px_rgba(12,116,93,0.5)]">
            WE&apos;RE BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-hesics-teal to-hesics-primary">
              FOR WHAT&apos;S NEXT.
            </span>
          </h2>
        </div>

        {/* 4. GRAND CLIMAX MANIFESTO: "ONE VISION. ONE MISSION. ONE US." */}
        <div
          ref={brandManifestoRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hesics-teal/40 bg-hesics-teal/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] text-white uppercase font-bold">
              THE HESICS MANIFESTO
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 my-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-sans drop-shadow-[0_0_50px_rgba(20,154,124,0.4)]">
              ONE VISION.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-hesics-teal uppercase font-sans drop-shadow-[0_0_50px_rgba(20,154,124,0.4)]">
              ONE MISSION.
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-hesics-teal to-white uppercase font-sans drop-shadow-[0_0_80px_rgba(12,116,93,0.7)]">
              ONE US.
            </h1>
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 tracking-[0.25em] uppercase mt-8 max-w-xl">
            A GLOBAL TECHNOLOGY COMPANY FORGED FOR THE INTELLIGENT ERA.
          </p>
        </div>

      </div>
    </div>
  );
}
