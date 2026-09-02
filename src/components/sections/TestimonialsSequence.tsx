"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS_DATA } from "@/lib/testimonialsData";

export default function TestimonialsSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Dynamic refs for testimonial quote slides
  const quoteRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      quoteRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, { opacity: 0, y: 35, filter: "blur(10px)" });
        }
      });

      // Header Tag reveal
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.06 });

      // Animate testimonials with a serene, slow pacing
      quoteRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        tl.to(ref, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.18,
        })
        .to(ref, {
          opacity: idx === quoteRefs.current.length - 1 ? 0.9 : 0,
          y: idx === quoteRefs.current.length - 1 ? 0 : -35,
          filter: idx === quoteRefs.current.length - 1 ? "blur(0px)" : "blur(8px)",
          duration: 0.1,
        }, "+=0.12");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="testimonials-experience"
      ref={containerRef}
      className="relative w-full h-[450vh] pointer-events-none"
    >
      {/* Sticky Centered Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-16 md:px-24 text-center pointer-events-none select-none">
        
        {/* Top Trust Header */}
        <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
              ENDORSEMENTS // TRUST & IMPACT
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            VERIFIED PARTNERSHIP OUTCOMES
          </p>
        </div>

        {/* Minimalist Centered Testimonials Sequence */}
        <div className="relative max-w-4xl w-full flex items-center justify-center">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => { quoteRefs.current[idx] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
            >
              {/* Category / Impact Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs text-hesics-teal tracking-[0.3em] uppercase">
                  {item.tag}
                </span>
                {item.impactMetrics && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                      {item.impactMetrics}
                    </span>
                  </>
                )}
              </div>

              {/* Large Minimalist Quote Typography */}
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-sans leading-snug tracking-tight max-w-3xl mx-auto mb-8 drop-shadow-[0_0_40px_rgba(4,4,5,0.9)]">
                “{item.quote}”
              </blockquote>

              {/* Signature & Role */}
              <div className="flex flex-col items-center gap-1 font-mono">
                <div className="flex items-center gap-2 text-sm sm:text-base text-white font-semibold tracking-wider">
                  <span className="text-hesics-teal font-bold">—</span>
                  <span>{item.author}</span>
                </div>
                <span className="text-xs sm:text-sm text-neutral-400 font-light tracking-wide">
                  {item.role}, <span className="text-hesics-teal">{item.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
