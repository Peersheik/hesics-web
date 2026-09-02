"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function VisionSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const visionBodyRef = useRef<HTMLParagraphElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

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

      // Initial states
      gsap.set([tagRef.current, headingRef.current, visionBodyRef.current, statementRef.current], {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      });

      // Step 1: Tag & Headline reveal
      tl.to([tagRef.current, headingRef.current], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.15,
      })
      // Step 2: Progressive reveal of the exact vision statement
      .to(visionBodyRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.25,
      }, "+=0.05")
      // Step 3: Subtle accentuation of long-term global impact
      .to(statementRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
      }, "+=0.08")
      // Step 4: Gentle transition exit towards mission pathway
      .to([tagRef.current, headingRef.current, visionBodyRef.current, statementRef.current], {
        opacity: 0,
        y: -40,
        filter: "blur(6px)",
        stagger: 0.03,
        duration: 0.15,
      }, "+=0.15");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="vision-experience"
      ref={containerRef}
      className="relative w-full h-[320vh] pointer-events-none"
    >
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-16 md:px-24 text-center pointer-events-none select-none">
        <div className="max-w-4xl w-full flex flex-col items-center justify-center pointer-events-auto">
          {/* Subtle Tag */}
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              THE HORIZON // GLOBAL VISION
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans uppercase mb-8 leading-tight"
          >
            OUR VISION
          </h2>

          {/* Exact Supplied Vision Copy */}
          <p
            ref={visionBodyRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-200 font-light leading-relaxed tracking-normal max-w-3xl mx-auto mb-8"
          >
            “To become a global technology company by providing valuable and profitable digital solutions—including websites, SaaS, AI automation, and digital products—to businesses through long-term commitment, creating a positive impact on the digital and social world through our innovation.”
          </p>

          {/* Minimalist Sub-indicator */}
          <div
            ref={statementRef}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span className="w-8 h-[1px] bg-hesics-primary" />
            <span>GLOBAL COMMITMENT & INNOVATION</span>
            <span className="w-8 h-[1px] bg-hesics-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MissionSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathwayTrackerRef = useRef<HTMLDivElement>(null);

  // 5 Step Pathway items refs (UNDERSTAND -> DESIGN -> BUILD -> AUTOMATE -> GROW)
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const STEPS_DATA = [
    {
      id: "01",
      keyword: "UNDERSTAND",
      missionText: "Every customer is like a CPU; without our customers, we are nothing.",
      tag: "FOUNDATION // CORE EMPATHY",
    },
    {
      id: "02",
      keyword: "DESIGN",
      missionText: "To develop digital authority for brands.",
      tag: "STRATEGY // BRAND PRESENCE",
    },
    {
      id: "03",
      keyword: "BUILD",
      missionText: "To develop smart websites, AI automation solutions, digital products, and SaaS solutions that solve real-world problems.",
      tag: "ENGINEERING // REAL-WORLD IMPACT",
    },
    {
      id: "04",
      keyword: "AUTOMATE",
      missionText: "To help businesses sustain and grow in the AI era through our innovation.",
      tag: "OPTIMIZATION // AI RESILIENCE",
    },
    {
      id: "05",
      keyword: "GROW",
      missionText: "Every technological evolution we achieve is a step toward becoming a global technology company.",
      tag: "EVOLUTION // GLOBAL SCALE",
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
      stepRefs.forEach((ref) => {
        gsap.set(ref.current, { opacity: 0, y: 40, filter: "blur(8px)" });
      });

      // Reveal mission overarching tag
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05 });

      // Animate each stage along the pathway sequence progressively
      stepRefs.forEach((ref, idx) => {
        tl.to(ref.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.12,
        })
        .to(ref.current, {
          opacity: idx === 4 ? 0.9 : 0,
          y: idx === 4 ? 0 : -40,
          filter: idx === 4 ? "blur(0px)" : "blur(8px)",
          duration: 0.08,
        }, "+=0.06");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="mission-experience"
      ref={containerRef}
      className="relative w-full h-[520vh] pointer-events-none"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-center pointer-events-none select-none">
        
        {/* Top Mission Tag Header */}
        <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              THE PATHWAY // OUR MISSION
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            UNDERSTAND ▸ DESIGN ▸ BUILD ▸ AUTOMATE ▸ GROW
          </p>
        </div>

        {/* 5 Stages along the Pathway */}
        <div className="relative max-w-4xl w-full flex items-center justify-center">
          {STEPS_DATA.map((step, idx) => (
            <div
              key={step.id}
              ref={stepRefs[idx]}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            >
              {/* Keyword Display */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm sm:text-base text-hesics-teal font-bold tracking-widest px-2.5 py-1 rounded bg-hesics-primary/20 border border-hesics-primary/30">
                  {step.id}
                </span>
                <span className="font-mono text-xs text-neutral-400 tracking-[0.3em] uppercase">
                  {step.tag}
                </span>
              </div>

              <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans uppercase mb-6 drop-shadow-[0_0_30px_rgba(12,116,93,0.3)]">
                {step.keyword}
              </h3>

              {/* Exact Mission Statement point corresponding to this stage */}
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-light max-w-2xl leading-relaxed mx-auto">
                {step.missionText}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
