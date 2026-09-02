"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProcessSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // 6 Stages refs
  const stageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const completeOverviewRef = useRef<HTMLDivElement>(null);

  const PROCESS_STEPS = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "ARCHITECTURAL AUDIT & SCOPE",
      desc: "Deep analysis of system architecture, operational constraints, and high-impact digital opportunities.",
      accent: "INITIALIZATION // MAPPING",
    },
    {
      num: "02",
      title: "STRATEGIZE",
      subtitle: "TECHNICAL ROADMAP & SPEC",
      desc: "Architecting resilient data models, system design protocols, and measurable engineering milestones.",
      accent: "BLUEPRINT // PROTOCOLS",
    },
    {
      num: "03",
      title: "BUILD",
      subtitle: "PRECISION EXECUTION",
      desc: "Developing ultra-fast frontends, scalable backend infrastructures, and bespoke automated AI pipelines.",
      accent: "CONSTRUCTION // DEPLOYMENT",
    },
    {
      num: "04",
      title: "TEST",
      subtitle: "RIGOROUS HARDENING",
      desc: "Stress testing, automated failure simulation, end-to-end security audits, and latency optimization.",
      accent: "VERIFICATION // HARDENING",
    },
    {
      num: "05",
      title: "LAUNCH",
      subtitle: "ZERO-DOWNTIME GO-LIVE",
      desc: "Seamless cutover, real-time observability telemetry, and production deployment validation.",
      accent: "ACTIVATION // TELEMETRY",
    },
    {
      num: "06",
      title: "GROW",
      subtitle: "CONTINUOUS EVOLUTION",
      desc: "Iterative feature development, automated scaling loops, and sustained technological leadership.",
      accent: "EXPANSION // SCALE",
    },
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
      gsap.set(headerRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
      stageRefs.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 35, filter: "blur(8px)" });
      });
      gsap.set(completeOverviewRef.current, { opacity: 0, y: 35, filter: "blur(8px)" });

      // Header Tag reveal
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05 });

      // Animate stages 01 through 06 sequentially
      stageRefs.forEach((ref, idx) => {
        tl.to(ref.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.1,
        })
        .to(ref.current, {
          opacity: 0,
          y: -30,
          filter: "blur(6px)",
          duration: 0.06,
        }, "+=0.06");
      });

      // Final Conclusion: Complete Unified Workflow View
      tl.to(completeOverviewRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.15,
      })
      .to(completeOverviewRef.current, {
        opacity: 0.2,
        y: -15,
        filter: "blur(2px)",
        duration: 0.08,
      }, "+=0.1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="process-experience"
      ref={containerRef}
      className="relative w-full h-[650vh] pointer-events-none"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-center pointer-events-none select-none">
        
        {/* Top Process Header */}
        <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              THE METHODOLOGY // HOW WE WORK
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            A CONTINUOUS HIGH-PRECISION 3D JOURNEY
          </p>
        </div>

        {/* 6 Individual Stage Focus Overlays */}
        <div className="relative max-w-3xl w-full flex items-center justify-center">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.num}
              ref={stageRefs[idx]}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm sm:text-base text-hesics-teal font-bold tracking-widest px-3 py-1 rounded-lg bg-hesics-primary/20 border border-hesics-primary/40">
                  {step.num}
                </span>
                <span className="font-mono text-xs text-neutral-400 tracking-[0.3em] uppercase">
                  {step.accent}
                </span>
              </div>

              <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans uppercase mb-3 drop-shadow-[0_0_35px_rgba(12,116,93,0.35)]">
                {step.title}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-hesics-teal uppercase tracking-widest mb-4">
                {step.subtitle}
              </p>

              <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light max-w-xl leading-relaxed mx-auto">
                {step.desc}
              </p>
            </div>
          ))}

          {/* FINAL STATE: All 6 Stages connected into one complete workflow */}
          <div
            ref={completeOverviewRef}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto px-4"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-hesics-primary/40 bg-hesics-primary/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-hesics-teal animate-ping" />
              <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
                COMPLETE HESICS WORKFLOW
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans uppercase mb-8">
              UNIFIED CONTINUOUS SYSTEM
            </h2>

            {/* 6 Stage Interconnected Chain Flow */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl">
              {PROCESS_STEPS.map((step, i, arr) => (
                <div key={step.num} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md font-mono text-xs sm:text-sm text-neutral-200 tracking-wider">
                    <span className="text-hesics-teal font-bold mr-1.5">{step.num}</span>
                    {step.title}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-hesics-teal font-mono text-xs">▸</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
