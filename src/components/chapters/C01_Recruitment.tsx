"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { globalLenis } from "@/components/dom/SmoothScroll";
import { useChapterNav } from "@/lib/navigation/useChapterNav";

gsap.registerPlugin(ScrollTrigger);

export default function C01_Recruitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, letterSpacing: "0.5em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.15em",
          duration: 1.8,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      // Statement lines
      gsap.fromTo(
        line1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 1.6 }
      );
      gsap.fromTo(
        line2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 2.4 }
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", delay: 3.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="chapter-recruitment"
      ref={sectionRef}
      className="relative w-full"
      aria-label="Chapter 01: The Recruitment — Enter the HESICS Empire"
    >
      {/* Fixed-height screen where the opening cinematic plays */}
      <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Chapter label */}
        <p className="type-codename mb-8 opacity-70">
          CHAPTER 01 — THE RECRUITMENT
        </p>

        {/* HESICS mark */}
        <h1
          ref={titleRef}
          className="font-mono font-black text-white uppercase select-none mb-12 opacity-0"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            letterSpacing: "0.15em",
            lineHeight: 1,
            textShadow: "0 0 60px rgba(20, 154, 124, 0.15)",
          }}
          aria-label="HESICS"
        >
          HESICS
        </h1>

        {/* Opening statements */}
        <div className="flex flex-col gap-3 mb-16 max-w-lg">
          <p
            ref={line1Ref}
            className="type-statement opacity-0 text-white/70"
          >
            Every empire begins with an idea.
          </p>
          <p
            ref={line2Ref}
            className="type-statement opacity-0 text-white/50"
          >
            Ours began with a problem.
          </p>
        </div>

        {/* Enter CTA */}
        <div ref={ctaRef} className="opacity-0 flex flex-col items-center gap-4">
          <button
            onClick={() => jumpToChapter(2, globalLenis || undefined)}
            aria-label="Enter the HESICS Empire — proceed to Chapter 02"
            className="group relative inline-flex items-center gap-4 font-mono text-sm font-bold tracking-[0.3em] text-white uppercase px-10 py-5 border border-empire-light/40 hover:border-empire-light transition-all duration-400 overflow-hidden"
            style={{ letterSpacing: "0.3em" }}
          >
            {/* Animated background fill */}
            <span className="absolute inset-0 bg-empire-light/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative">ENTER THE EMPIRE</span>
            <span className="relative text-empire-light transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="font-mono text-xs text-white/20 tracking-widest">
            OR SCROLL TO BEGIN
          </p>
        </div>
      </div>

      {/* Extra scroll space to trigger next chapter detection */}
      <div className="h-[20vh]" aria-hidden="true" />
    </section>
  );
}
