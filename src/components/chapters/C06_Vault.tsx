"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { TESTIMONIALS } from "@/data/testimonials";

export default function C06_Vault() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section
      id="chapter-vault"
      className="relative w-full"
      aria-label="Chapter 06: The Vault — HESICS projects and case studies"
    >
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen overflow-y-auto flex flex-col items-center justify-center px-6 py-24">
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 06 — THE VAULT
          </p>

          <div className="max-w-4xl w-full">
            <h2
              className="font-mono font-black text-center mb-2 text-white tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              PROJECT ARCHIVE
            </h2>
            <p className="font-mono text-xs text-empire-muted/50 tracking-widest text-center mb-12 uppercase">
              {PROJECTS.length} classified files
            </p>

            {/* Project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.id}
                  className={`relative border p-6 rounded-sm cursor-pointer group transition-all duration-300 ${
                    activeProject === i
                      ? "border-empire-light/50 bg-empire-light/5"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/15"
                  }`}
                  onClick={() => setActiveProject(activeProject === i ? null : i)}
                  aria-expanded={activeProject === i}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveProject(activeProject === i ? null : i);
                    }
                  }}
                  aria-label={`Project ${project.code}: ${project.name}. Click to view case study.`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-mono text-xs text-empire-light/60 tracking-widest mb-1">
                        FILE {project.code}
                      </p>
                      <h3 className="font-mono text-base font-bold tracking-wide text-white">
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-empire-muted/50 mt-1">
                        {project.client} · {project.industry}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-empire-light/60 transition-transform duration-300 ${
                        activeProject === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  {/* Expanded case study */}
                  {activeProject === i && (
                    <div className="border-t border-white/[0.06] pt-4 space-y-4">
                      {[
                        { label: "THE PROBLEM", content: project.problem },
                        { label: "THE STRATEGY", content: project.strategy },
                        { label: "THE BUILD", content: project.solution },
                      ].map(({ label, content }) => (
                        <div key={label}>
                          <p className="font-mono text-xs font-bold tracking-[0.2em] text-empire-muted/60 mb-1">
                            {label}
                          </p>
                          <p className="font-mono text-xs text-white/60 leading-relaxed">
                            {content}
                          </p>
                        </div>
                      ))}

                      {/* Tech stack */}
                      <div>
                        <p className="font-mono text-xs font-bold tracking-[0.2em] text-empire-muted/60 mb-2">
                          TECHNOLOGY
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technology.map((t, ti) => (
                            <span
                              key={ti}
                              className="font-mono text-xs text-empire-light/70 border border-empire-light/20 px-2 py-1 rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      {project.results.length > 0 && (
                        <div>
                          <p className="font-mono text-xs font-bold tracking-[0.2em] text-empire-muted/60 mb-2">
                            THE RESULT
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {project.results.map((r, ri) => (
                              <div key={ri} className="border border-white/[0.06] p-2 rounded-sm">
                                <p className="font-mono text-sm font-bold text-white">{r.value}</p>
                                <p className="font-mono text-xs text-empire-muted/50">{r.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Testimonials */}
            {TESTIMONIALS.length > 0 && (
              <div className="border border-white/[0.06] bg-white/[0.01] p-8 rounded-sm text-center">
                <p className="font-mono text-xs tracking-[0.3em] text-empire-light/50 mb-6 uppercase">
                  CLIENT VOICES
                </p>
                <blockquote className="font-mono text-sm text-white/60 leading-relaxed italic mb-6 max-w-2xl mx-auto">
                  "{TESTIMONIALS[0].quote}"
                </blockquote>
                <cite className="not-italic">
                  <p className="font-mono text-sm font-bold text-white">{TESTIMONIALS[0].author}</p>
                  <p className="font-mono text-xs text-empire-muted/50">
                    {TESTIMONIALS[0].role} · {TESTIMONIALS[0].company}
                  </p>
                </cite>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
