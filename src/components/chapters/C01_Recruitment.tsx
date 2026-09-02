"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";
import { globalLenis } from "@/components/dom/SmoothScroll";
import { useChapterNav } from "@/lib/navigation/useChapterNav";

export default function C01_Recruitment() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sub1Ref  = useRef<HTMLParagraphElement>(null);
  const sub2Ref  = useRef<HTMLParagraphElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.6, ease: "power4.out", delay: 0.4 }
      );
      gsap.fromTo(sub1Ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 1.4 }
      );
      gsap.fromTo(sub2Ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 2.0 }
      );
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power4.out", delay: 2.8 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="chapter-recruitment"
      aria-label="Chapter 01 — The Recruitment"
      className="relative w-full"
    >
      <div style={{ height: "120vh" }} className="relative">
        <div
          className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden"
          style={{ padding: "5rem clamp(2rem, 8vw, 6rem)" }}
        >
          <ChapterNumber id={1} />

          <div className="relative z-10 max-w-3xl">
            {/* Codename label */}
            <p className="type-codename mb-5">01 — THE RECRUITMENT</p>

            {/* Hero title */}
            <h1
              ref={titleRef}
              className="type-empire text-white mb-8 opacity-0"
              aria-label="HESICS"
            >
              HESICS
            </h1>

            {/* Architect mode: landing */}
            <ArchitectNote mode="landing" className="mb-8" />

            {/* Opening statements */}
            <p ref={sub1Ref} className="type-statement mb-2 opacity-0">
              Every empire begins with an idea.
            </p>
            <p ref={sub2Ref} className="type-statement opacity-0" style={{ color: "rgba(255,255,255,0.45)" }}>
              Ours began with a problem.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="mt-12 opacity-0">
              <button
                onClick={() => jumpToChapter(2, globalLenis || undefined)}
                aria-label="Enter the HESICS Empire — proceed to Chapter 02"
                className="group relative inline-flex items-center gap-4 font-mono text-sm font-bold tracking-[0.25em] text-white uppercase px-10 py-5 border overflow-hidden transition-all duration-500"
                style={{ borderColor: "var(--accent-light)", letterSpacing: "0.25em" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--power)";
                  el.style.color = "var(--power)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent-light)";
                  el.style.color = "white";
                }}
              >
                ENTER THE EMPIRE <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <p className="font-mono text-xs text-white/20 tracking-widest mt-3" style={{ fontSize: "0.6rem" }}>
                OR SCROLL TO BEGIN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
