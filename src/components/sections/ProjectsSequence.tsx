"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ARCHIVED_PROJECTS, CaseStudyProject } from "@/lib/projectsData";

export default function ProjectsSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

  // Dynamic project refs
  const projectItemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      projectItemRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, { opacity: 0, y: 35, filter: "blur(8px)" });
        }
      });

      // Reveal Header
      tl.to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05 });

      // Animate each case study as the camera travels toward it
      projectItemRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        tl.to(ref, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.15,
        })
        .to(ref, {
          opacity: idx === projectItemRefs.current.length - 1 ? 0.85 : 0,
          y: idx === projectItemRefs.current.length - 1 ? 0 : -35,
          filter: idx === projectItemRefs.current.length - 1 ? "blur(0px)" : "blur(6px)",
          duration: 0.08,
        }, "+=0.08");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="projects-experience"
        ref={containerRef}
        className="relative w-full h-[550vh] pointer-events-none"
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 text-center pointer-events-none select-none">
          
          {/* Top Archive Header */}
          <div ref={headerRef} className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-hesics-teal uppercase">
                CASE STUDY ARCHIVE // PROVEN WORK
              </span>
            </div>
            <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
              INTERACTIVE 3D SYSTEMS ARCHIVE
            </p>
          </div>

          {/* Project Cards Sequence */}
          <div className="relative max-w-2xl w-full flex items-center justify-center">
            {ARCHIVED_PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                ref={(el) => { projectItemRefs.current[idx] = el; }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto p-6 rounded-3xl border border-white/10 bg-[#040405]/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(4,4,5,0.8)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-hesics-teal uppercase tracking-[0.25em]">
                    {proj.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="font-mono text-xs text-neutral-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase mb-4 leading-tight">
                  {proj.name}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg mb-6 leading-relaxed">
                  {proj.summary}
                </p>

                {/* What We Built Quick Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-6 text-left">
                  {proj.whatWeBuilt.slice(0, 2).map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02] text-xs font-mono text-neutral-300 flex items-center gap-2">
                      <span className="text-hesics-teal">▸</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Explore Interaction Button */}
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="px-6 py-2.5 rounded-xl bg-hesics-primary/30 hover:bg-hesics-primary border border-hesics-primary/60 hover:border-hesics-teal text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(12,116,93,0.3)] hover:scale-105"
                >
                  EXPLORE CASE STUDY ↗
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DETAILED CASE STUDY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#040405]/90 backdrop-blur-2xl pointer-events-auto">
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-3xl border border-hesics-primary/40 bg-[#040405] text-left shadow-[0_0_60px_rgba(12,116,93,0.25)]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-hesics-teal tracking-widest uppercase mb-1 block">
                  {selectedProject.tag} // {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans uppercase">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors font-mono text-sm"
              >
                ✕
              </button>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6 text-neutral-300 text-sm sm:text-base font-light">
              
              {/* THE PROBLEM */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-hesics-teal font-semibold mb-2">
                  THE PROBLEM
                </h4>
                <p className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  {selectedProject.problem}
                </p>
              </div>

              {/* THE APPROACH */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-hesics-teal font-semibold mb-2">
                  THE APPROACH
                </h4>
                <p className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  {selectedProject.approach}
                </p>
              </div>

              {/* WHAT WE BUILT */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-hesics-teal font-semibold mb-2">
                  WHAT WE BUILT
                </h4>
                <ul className="space-y-2">
                  {selectedProject.whatWeBuilt.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] text-xs sm:text-sm font-mono text-neutral-200">
                      <span className="text-hesics-teal">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* THE RESULT */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-hesics-teal font-semibold mb-2">
                  THE RESULT
                </h4>
                <p className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  {selectedProject.result}
                </p>
              </div>

              {/* CLIENT TESTIMONIAL */}
              {selectedProject.clientTestimonial && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-hesics-teal font-semibold mb-2">
                    CLIENT TESTIMONIAL
                  </h4>
                  <div className="p-5 rounded-2xl border border-hesics-primary/30 bg-hesics-primary/[0.05] italic">
                    <p className="mb-3 text-neutral-200">
                      “{selectedProject.clientTestimonial.quote}”
                    </p>
                    <div className="not-italic text-xs font-mono text-hesics-teal font-medium">
                      <span>{selectedProject.clientTestimonial.author}</span>
                      <span className="text-neutral-400 block font-light">{selectedProject.clientTestimonial.role}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Close footer button */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
