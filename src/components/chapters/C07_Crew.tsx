"use client";

import { ChapterShell, ChapterNumber, ChapterCTA } from "./ChapterPrimitives";
import ArchitectNote from "@/components/guide/ArchitectNote";
import { VALUES } from "@/data/values";
import { TEAM, COMPANY_STORY } from "@/data/team";

export default function C07_Crew() {
  return (
    <ChapterShell id={7} sectionId="chapter-crew" scrollHeight="520vh">
      <ChapterNumber id={7} />
      <div className="relative z-10 max-w-4xl w-full">
        <p className="type-codename mb-5">07 — THE CREW</p>

        <h2 className="type-empire text-white mb-6">THE CREW</h2>

        <ArchitectNote chapterId={7} mode="transition" className="mb-10" />

        {/* Company story pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            ["WHO WE ARE",         COMPANY_STORY.whoWeAre],
            ["WHY WE EXIST",       COMPANY_STORY.whyWeExist],
            ["WHAT WE BELIEVE",    COMPANY_STORY.whatWeBelieve],
            ["WHERE WE'RE GOING",  COMPANY_STORY.whatWeAreBuilding],
          ].map(([label, content]) => (
            <article key={label} className="border p-5 rounded-sm" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
              <p className="font-mono text-xs font-bold tracking-[0.2em] mb-3" style={{ color: "var(--accent-light)", opacity: 0.7, fontSize: "0.6rem" }}>{label}</p>
              <p className="font-mono text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>{content}</p>
            </article>
          ))}
        </div>

        {/* Values */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.25em] mb-6" style={{ color: "var(--fg-subtle)", fontSize: "0.6rem" }}>
            THE VALUES
          </p>
          <div className="flex flex-col gap-1">
            {VALUES.map((value) => (
              <div
                key={value.id}
                className="flex items-start gap-6 px-5 py-4 border rounded-sm transition-colors duration-300 group"
                style={{ borderColor: "rgba(255,255,255,0.04)" }}
              >
                <span className="font-mono text-xs tabular-nums mt-1" style={{ color: "var(--fg-subtle)" }}>
                  {String(value.id).padStart(2, "0")}
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <h3
                    className="font-mono font-black tracking-[0.12em] text-white"
                    style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", minWidth: "140px" }}
                  >
                    {value.word}
                  </h3>
                  <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--fg-muted)", fontSize: "0.7rem" }}>
                    {value.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.25em] mb-6" style={{ color: "var(--fg-subtle)", fontSize: "0.6rem" }}>
            THE PEOPLE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM.map((member) => (
              <article key={member.id} className="border p-5 rounded-sm" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
                {member.isFounder && (
                  <p className="font-mono text-xs tracking-widest mb-2" style={{ color: "var(--accent)", opacity: 0.6, fontSize: "0.6rem" }}>FOUNDER</p>
                )}
                <h3 className="font-mono text-sm font-bold tracking-wide text-white mb-1">{member.name}</h3>
                <p className="font-mono text-xs mb-3" style={{ color: "var(--fg-muted)", letterSpacing: "0.1em" }}>{member.role}</p>
                <p className="font-mono text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>

        <ChapterCTA currentId={7} />
      </div>
    </ChapterShell>
  );
}
