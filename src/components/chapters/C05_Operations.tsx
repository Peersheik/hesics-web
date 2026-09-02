"use client";

import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";

const PHASES = [
  { code: "01", name: "DISCOVER",    desc: "Understand the real problem, not the assumed one." },
  { code: "02", name: "STRATEGIZE",  desc: "Map the system before building it." },
  { code: "03", name: "BUILD",       desc: "Engineer with precision. No shortcuts." },
  { code: "04", name: "TEST",        desc: "Break it before your users do." },
  { code: "05", name: "DEPLOY",      desc: "Ship with confidence, not hope." },
  { code: "06", name: "GROW",        desc: "The system improves over time." },
];

export default function C05_Operations() {
  return (
    <ChapterShell id={5} sectionId="chapter-operations" scrollHeight="420vh">
      <ChapterNumber id={5} />
      <div className="relative z-10 max-w-3xl w-full">
        <p className="type-codename mb-5">05 — OPERATIONS</p>

        <h2 className="type-empire text-white mb-3">OPERATIONS</h2>
        <p className="font-mono text-sm mb-6" style={{ color: "var(--fg-muted)", letterSpacing: "0.12em" }}>
          Six phases. No exceptions.
        </p>

        <ArchitectNote chapterId={5} mode="transition" className="mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {PHASES.map((phase) => (
            <article
              key={phase.code}
              className="border p-5 rounded-sm transition-colors duration-300 group"
              style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
              aria-label={`Phase ${phase.code}: ${phase.name}`}
            >
              <p className="font-mono text-xs tracking-widest mb-2" style={{ color: "var(--accent)", opacity: 0.6 }}>
                {phase.code}
              </p>
              <h3 className="font-mono text-sm font-bold tracking-[0.12em] text-white mb-2">
                {phase.name}
              </h3>
              <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--fg-muted)", fontSize: "0.68rem" }}>
                {phase.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--accent))", opacity: 0.15 }} />
          <span className="font-mono text-xs tracking-[0.25em]" style={{ color: "var(--fg-subtle)", fontSize: "0.6rem" }}>
            MISSION CONTROL ACTIVE
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--accent))", opacity: 0.15 }} />
        </div>

        <ChapterCTA currentId={5} />
      </div>
    </ChapterShell>
  );
}
