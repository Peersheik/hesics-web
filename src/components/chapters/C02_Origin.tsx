"use client";

import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";

const PROBLEMS = [
  "Too many tools. None of them talking to each other.",
  "Too much manual work. Not enough thinking.",
  "Digital presence that doesn't convert.",
  "AI hype with no practical application.",
  "Missed compounding value from disconnected systems.",
];

export default function C02_Origin() {
  return (
    <ChapterShell id={2} sectionId="chapter-origin" scrollHeight="380vh">
      <ChapterNumber id={2} />
      <div className="relative z-10 max-w-2xl">
        <p className="type-codename mb-5">02 — THE ORIGIN</p>

        <h2 className="type-empire text-white mb-6">THE ORIGIN</h2>

        <ArchitectNote chapterId={2} mode="transition" className="mb-10" />

        <div className="mb-10 space-y-3">
          <p className="font-mono text-xs tracking-[0.2em] mb-4" style={{ color: "var(--fg-muted)", letterSpacing: "0.2em" }}>
            THE PROBLEMS WE WERE BUILT TO SOLVE
          </p>
          {PROBLEMS.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="font-mono text-xs tabular-nums shrink-0" style={{ color: "var(--accent)", opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                "{p}"
              </p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <div className="h-px w-16 mb-6" style={{ background: "var(--accent)", opacity: 0.3 }} />
          <p className="type-statement mb-3">Technology should feel simpler.</p>
          <p className="font-mono font-bold text-xl tracking-[0.15em] text-white">
            WE DON'T JUST BUILD.
          </p>
          <p className="font-mono font-bold text-xl tracking-[0.15em]" style={{ color: "var(--accent-light)" }}>
            WE SOLVE.
          </p>
        </div>

        <ChapterCTA currentId={2} />
      </div>
    </ChapterShell>
  );
}
