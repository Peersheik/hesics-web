"use client";

import { useState } from "react";
import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";
import { PROJECTS } from "@/data/projects";
import { TESTIMONIALS } from "@/data/testimonials";

export default function C06_Vault() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <ChapterShell id={6} sectionId="chapter-vault" scrollHeight="520vh">
      <ChapterNumber id={6} />
      <div className="relative z-10 max-w-4xl w-full">
        <p className="type-codename mb-5">06 — THE VAULT</p>

        <h2 className="type-empire text-white mb-3">THE VAULT</h2>
        <p className="font-mono text-xs mb-6" style={{ color: "var(--fg-subtle)", letterSpacing: "0.2em" }}>
          {PROJECTS.length} CLASSIFIED FILES
        </p>

        <ArchitectNote chapterId={6} mode="transition" className="mb-10" />

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className="border p-5 rounded-sm cursor-pointer transition-all duration-300"
              style={{
                borderColor: activeProject === i ? "var(--accent-light)" : "rgba(255,255,255,0.06)",
                background: activeProject === i ? "rgba(12,116,93,0.05)" : "rgba(255,255,255,0.01)",
              }}
              onClick={() => setActiveProject(activeProject === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={activeProject === i}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveProject(activeProject === i ? null : i); }}
              aria-label={`${project.name}: click to view case study`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-mono text-xs tracking-widest mb-1" style={{ color: "var(--accent)", opacity: 0.6, fontSize: "0.6rem" }}>
                    FILE {project.code}
                  </p>
                  <h3 className="font-mono text-sm font-bold tracking-wide text-white">{project.name}</h3>
                  <p className="font-mono text-xs mt-1" style={{ color: "var(--fg-subtle)" }}>
                    {project.client} · {project.industry}
                  </p>
                </div>
                <span className="font-mono" style={{ color: "var(--accent-light)", transform: activeProject === i ? "rotate(45deg)" : "none", transition: "transform 0.3s", display: "inline-block" }}>+</span>
              </div>

              {activeProject === i && (
                <div className="border-t pt-4 space-y-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  {[["THE PROBLEM", project.problem], ["THE STRATEGY", project.strategy], ["THE BUILD", project.solution]].map(([label, content]) => (
                    <div key={label}>
                      <p className="font-mono text-xs font-bold tracking-[0.2em] mb-1" style={{ color: "var(--fg-muted)", fontSize: "0.6rem" }}>{label}</p>
                      <p className="font-mono text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>{content}</p>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technology.map((t: string, ti: number) => (
                      <span key={ti} className="font-mono text-xs border px-2 py-0.5 rounded-sm" style={{ borderColor: "rgba(12,116,93,0.25)", color: "var(--accent-light)", fontSize: "0.6rem" }}>{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Testimonials */}
        {TESTIMONIALS.length > 0 && (
          <div className="border p-7 rounded-sm text-center mb-10" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
            <p className="font-mono text-xs tracking-[0.25em] mb-5" style={{ color: "var(--accent)", opacity: 0.5, fontSize: "0.6rem" }}>
              CLIENT VOICES
            </p>
            <blockquote className="font-mono text-sm leading-relaxed italic mb-5 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              "{TESTIMONIALS[0].quote}"
            </blockquote>
            <cite className="not-italic">
              <p className="font-mono text-sm font-bold text-white">{TESTIMONIALS[0].author}</p>
              <p className="font-mono text-xs" style={{ color: "var(--fg-subtle)" }}>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].company}</p>
            </cite>
          </div>
        )}

        <ChapterCTA currentId={6} />
      </div>
    </ChapterShell>
  );
}
