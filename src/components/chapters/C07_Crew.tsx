"use client";

import { VALUES } from "@/data/values";
import { TEAM, COMPANY_STORY } from "@/data/team";

export default function C07_Crew() {
  return (
    <section
      id="chapter-crew"
      className="relative w-full"
      aria-label="Chapter 07: The Crew — HESICS people and values"
    >
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen overflow-y-auto flex flex-col items-center justify-center px-6 py-24">
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 07 — THE CREW
          </p>

          <div className="max-w-4xl w-full">
            {/* Company story pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                { label: "WHO WE ARE", content: COMPANY_STORY.whoWeAre },
                { label: "WHY WE EXIST", content: COMPANY_STORY.whyWeExist },
                { label: "WHAT WE BELIEVE", content: COMPANY_STORY.whatWeBelieve },
                { label: "WHERE WE'RE GOING", content: COMPANY_STORY.whatWeAreBuilding },
              ].map(({ label, content }) => (
                <article
                  key={label}
                  className="border border-white/[0.06] bg-white/[0.01] p-6 rounded-sm"
                >
                  <p className="font-mono text-xs font-bold tracking-[0.2em] text-empire-light/60 mb-3 uppercase">
                    {label}
                  </p>
                  <p className="font-mono text-sm text-white/55 leading-relaxed">{content}</p>
                </article>
              ))}
            </div>

            {/* Values */}
            <div className="mb-12">
              <p className="font-mono text-xs tracking-[0.3em] text-empire-muted/50 text-center mb-8 uppercase">
                THE VALUES
              </p>
              <div className="flex flex-col gap-2">
                {VALUES.map((value) => (
                  <div
                    key={value.id}
                    className="flex items-start gap-6 border border-white/[0.04] px-6 py-4 rounded-sm group hover:border-empire-light/20 transition-colors duration-300"
                  >
                    <span className="font-mono text-xs text-empire-muted/30 tabular-nums mt-1">
                      {String(value.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                      <h3 className="font-mono text-base sm:text-lg font-black tracking-[0.15em] text-white min-w-[160px]">
                        {value.word}
                      </h3>
                      <p className="font-mono text-xs text-empire-muted/60 leading-relaxed">
                        {value.definition}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-empire-muted/50 text-center mb-8 uppercase">
                THE PEOPLE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEAM.map((member) => (
                  <article
                    key={member.id}
                    className="border border-white/[0.06] bg-white/[0.01] p-6 rounded-sm"
                  >
                    {member.isFounder && (
                      <p className="font-mono text-xs text-empire-light/50 tracking-widest mb-2 uppercase">
                        FOUNDER
                      </p>
                    )}
                    <h3 className="font-mono text-base font-bold tracking-wide text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-empire-muted/60 mb-3 tracking-wider">
                      {member.role}
                    </p>
                    <p className="font-mono text-xs text-white/45 leading-relaxed">{member.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
