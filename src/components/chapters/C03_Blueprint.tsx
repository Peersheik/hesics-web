"use client";

import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";

const STEPS = [
  { label: "UNDERSTAND", desc: "We learn your world before writing a line of code." },
  { label: "DESIGN",     desc: "We architect the system before touching a pixel." },
  { label: "BUILD",      desc: "We engineer with precision, not speed." },
  { label: "AUTOMATE",   desc: "We make the system work for you." },
  { label: "GROW",       desc: "Built for where you're going, not where you are." },
];

export default function C03_Blueprint() {
  return (
    <ChapterShell id={3} sectionId="chapter-blueprint" scrollHeight="400vh">
      <ChapterNumber id={3} />
      <div className="relative z-10 max-w-2xl">
        <p className="type-codename mb-5">03 — THE BLUEPRINT</p>

        <h2 className="type-empire text-white mb-6">THE BLUEPRINT</h2>

        <ArchitectNote chapterId={3} mode="transition" className="mb-10" />

        {/* Vision */}
        <div className="mb-8">
          <p className="font-mono text-xs tracking-[0.25em] mb-3" style={{ color: "var(--fg-subtle)", letterSpacing: "0.25em" }}>
            OUR VISION
          </p>
          <p className="type-statement">
            Build technology that makes businesses simpler, smarter and ready for what's next.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.25em] mb-3" style={{ color: "var(--fg-subtle)", letterSpacing: "0.25em" }}>
            OUR MISSION
          </p>
          <p className="type-statement">
            Turn real-world problems into practical digital systems that create measurable impact.
          </p>
        </div>

        {/* Process steps */}
        <div className="flex flex-wrap items-center gap-0 mb-10">
          {STEPS.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="group flex flex-col items-center gap-2 px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-light)" }} />
                <span className="font-mono text-xs font-bold tracking-[0.15em] text-white/70 text-center">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-4 sm:w-8 h-px mb-5" style={{ background: "var(--accent)", opacity: 0.2 }} />
              )}
            </div>
          ))}
        </div>

        <ChapterCTA currentId={3} />
      </div>
    </ChapterShell>
  );
}
