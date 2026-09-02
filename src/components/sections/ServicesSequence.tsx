"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Stages refs: Overview + 4 Nodes
  const overviewRef = useRef<HTMLDivElement>(null);
  const webDevRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const saasRef = useRef<HTMLDivElement>(null);
  const marketingRef = useRef<HTMLDivElement>(null);

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
      gsap.set(
        [
          overviewRef.current,
          webDevRef.current,
          aiRef.current,
          saasRef.current,
          marketingRef.current,
        ],
        { opacity: 0, y: 35, filter: "blur(8px)" }
      );

      // Phase 0: Central HESICS System Hub (0.0 to 0.18)
      tl.to(overviewRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.1 })
        .to(overviewRef.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.06");

      // Phase 1: Web Development (0.20 to 0.38)
      tl.to(webDevRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.1 })
        .to(webDevRef.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.08");

      // Phase 2: AI & Automation (0.40 to 0.58)
      tl.to(aiRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.1 })
        .to(aiRef.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.08");

      // Phase 3: SaaS Development (0.60 to 0.78)
      tl.to(saasRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.1 })
        .to(saasRef.current, { opacity: 0, y: -30, filter: "blur(6px)", duration: 0.08 }, "+=0.08");

      // Phase 4: Digital Marketing (0.80 to 1.0)
      tl.to(marketingRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.1 })
        .to(marketingRef.current, { opacity: 0.2, y: -20, filter: "blur(2px)", duration: 0.08 }, "+=0.08");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="services-experience"
      ref={containerRef}
      className="relative w-full h-[550vh] pointer-events-none"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-center pointer-events-none select-none">
        
        {/* PHASE 0: HESICS SYSTEM OVERVIEW */}
        <div
          ref={overviewRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              THE ECOSYSTEM // ARCHITECTURAL SUITE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans uppercase mb-4">
            HESICS SYSTEM
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            One interconnected digital architecture powering four foundational capability hubs.
          </p>
        </div>

        {/* PHASE 1: WEB DEVELOPMENT */}
        <div
          ref={webDevRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.3em] mb-4">
            NODE 01 // PRECISION INTERFACES
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans uppercase mb-8">
            Web Development
          </h2>

          {/* Workflow Sequence */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-3xl">
            {["Strategy", "Design", "Development", "Launch"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-mono text-sm sm:text-base tracking-wider hover:border-hesics-primary transition-colors">
                  <span className="text-hesics-teal font-bold mr-2">0{i + 1}</span>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-hesics-teal font-mono text-base">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PHASE 2: AI & AUTOMATION */}
        <div
          ref={aiRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.3em] mb-4">
            NODE 02 // INTELLIGENT SYSTEMS
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans uppercase mb-8">
            AI & Automation
          </h2>

          {/* Workflow Sequence */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-3xl">
            {["Problem", "AI", "Automation", "Result"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-mono text-sm sm:text-base tracking-wider hover:border-hesics-primary transition-colors">
                  <span className="text-hesics-teal font-bold mr-2">0{i + 1}</span>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-hesics-teal font-mono text-base">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PHASE 3: SAAS DEVELOPMENT */}
        <div
          ref={saasRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.3em] mb-4">
            NODE 03 // CLOUD ARCHITECTURES
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans uppercase mb-8">
            SaaS Development
          </h2>

          {/* Workflow Sequence */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-3xl">
            {["Problem", "Product", "Users", "Scale"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-mono text-sm sm:text-base tracking-wider hover:border-hesics-primary transition-colors">
                  <span className="text-hesics-teal font-bold mr-2">0{i + 1}</span>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-hesics-teal font-mono text-base">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PHASE 4: DIGITAL MARKETING */}
        <div
          ref={marketingRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        >
          <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.3em] mb-4">
            NODE 04 // EXPANSION & REACH
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans uppercase mb-8">
            Digital Marketing
          </h2>

          {/* Workflow Sequence */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-3xl">
            {["Content", "Reach", "Leads", "Growth"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-white font-mono text-sm sm:text-base tracking-wider hover:border-hesics-primary transition-colors">
                  <span className="text-hesics-teal font-bold mr-2">0{i + 1}</span>
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-hesics-teal font-mono text-base">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
