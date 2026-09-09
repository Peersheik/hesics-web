"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useChapterNav } from "@/lib/navigation/useChapterNav";
import { globalLenis } from "@/components/dom/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function C01_Recruitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      if (bgRef.current && sectionRef.current) {
        gsap.fromTo(bgRef.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Hero entrance
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(titleRef.current,
        { y: 100, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.out" }
      )
      .fromTo(subRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chapter-recruitment"
      aria-label="HESICS — Enter the Empire"
      className="relative w-full"
    >
      {/* Scroll spacer */}
      <div style={{ height: "130vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Background image with parallax */}
          <div
            ref={bgRef}
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/hero-city.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              transform: "scale(1.15)",
              filter: "brightness(0.25) saturate(1.4)",
            }}
          />

          {/* Gradient overlay — bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(7,8,16,0.3) 0%, rgba(7,8,16,0) 40%, rgba(7,8,16,0.7) 80%, rgba(7,8,16,1) 100%)",
            }}
          />

          {/* Left neon edge accent */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ background: "linear-gradient(to bottom, transparent, var(--neon, #00e5c8), transparent)", opacity: 0.4 }}
          />

          {/* Content */}
          <div
            className="absolute inset-0 flex flex-col justify-center"
            style={{ padding: "0 clamp(2rem, 8vw, 7rem)", paddingTop: "6rem" }}
          >
            {/* District tag */}
            <p
              className="font-mono mb-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--neon, #00e5c8)" }}
            >
              DISTRICT 01 — ENTRANCE
            </p>

            {/* Massive display title */}
            <div className="overflow-hidden mb-6">
              <h1
                ref={titleRef}
                style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
                  fontSize: "clamp(6rem, 20vw, 22rem)",
                  lineHeight: 0.85,
                  letterSpacing: "0.02em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  opacity: 0,
                }}
              >
                HESICS
              </h1>
            </div>

            {/* Statement */}
            <p
              ref={subRef}
              className="opacity-0 max-w-xl"
              style={{
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.4,
                fontWeight: 300,
              }}
            >
              Every empire begins with a decision.<br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Ours began with a problem no one wanted to solve.</span>
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="mt-12 opacity-0 flex items-center gap-6">
              <button
                onClick={() => jumpToChapter(2, globalLenis || undefined)}
                aria-label="Enter the Empire"
                style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', Impact, sans-serif)",
                  fontSize: "1.4rem",
                  letterSpacing: "0.15em",
                  padding: "1rem 3rem",
                  border: "2px solid var(--neon, #00e5c8)",
                  color: "#000",
                  background: "var(--neon, #00e5c8)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--neon, #00e5c8)";
                  el.style.boxShadow = "0 0 30px rgba(0,229,200,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "var(--neon, #00e5c8)";
                  el.style.color = "#000";
                  el.style.boxShadow = "none";
                }}
              >
                ENTER THE EMPIRE
              </button>
              <p
                className="font-mono"
                style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em" }}
              >
                OR SCROLL DOWN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
