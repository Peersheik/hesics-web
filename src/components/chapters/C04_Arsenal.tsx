"use client";

import { useState } from "react";
import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";
import { SERVICES } from "@/data/services";

export default function C04_Arsenal() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <ChapterShell id={4} sectionId="chapter-arsenal" scrollHeight="500vh">
      <ChapterNumber id={4} />
      <div className="relative z-10 max-w-3xl w-full">
        <p className="type-codename mb-5">04 — THE ARSENAL</p>

        <h2 className="type-empire text-white mb-6">THE ARSENAL</h2>

        <ArchitectNote chapterId={4} mode="transition" className="mb-8" />

        {/* Service tabs */}
        <nav className="flex flex-wrap gap-2 mb-10" aria-label="Capability navigation">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              aria-current={i === active ? "true" : undefined}
              aria-label={`View ${s.name} capability`}
              className="font-mono text-xs px-4 py-2.5 border tracking-[0.15em] transition-all duration-300 rounded-sm"
              style={{
                borderColor: i === active ? "var(--accent-light)" : "rgba(255,255,255,0.08)",
                color: i === active ? "white" : "var(--fg-muted)",
                background: i === active ? "rgba(12,116,93,0.08)" : "transparent",
              }}
            >
              <span style={{ color: "var(--accent)", opacity: 0.6, marginRight: "0.4rem" }}>{s.code}</span>
              {s.shortName}
            </button>
          ))}
        </nav>

        {/* Active service */}
        <div key={service.id}>
          <h3
            className="font-bold text-white mb-2"
            style={{
              fontFamily: "var(--font-display, 'Oswald', sans-serif)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {service.name}
          </h3>
          <p className="type-statement mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            {service.tagline}
          </p>

          {/* Step flow */}
          <div className="flex flex-wrap items-center gap-0 mb-8">
            {service.steps.map((step: { label: string; description: string }, i: number) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center gap-2 px-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-light)" }} />
                  <span className="font-mono text-xs font-bold tracking-[0.12em] text-white/70 text-center">
                    {step.label}
                  </span>
                </div>
                {i < service.steps.length - 1 && (
                  <div className="w-4 sm:w-8 h-px mb-5" style={{ background: "var(--accent)", opacity: 0.2 }} />
                )}
              </div>
            ))}
          </div>

          <div
            className="inline-flex items-center gap-3 px-5 py-3 border rounded-sm"
            style={{ borderColor: "rgba(12,116,93,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-light)", animation: "pulse 2s infinite" }} />
            <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "var(--fg-muted)", fontSize: "0.65rem" }}>
              CAPABILITY ACTIVE
            </span>
          </div>
        </div>

        <ChapterCTA currentId={4} />
      </div>
    </ChapterShell>
  );
}
