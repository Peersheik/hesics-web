"use client";

const WORKFLOW = [
  { code: "01", name: "DISCOVER", desc: "Understand the real problem, not the assumed one." },
  { code: "02", name: "STRATEGIZE", desc: "Map the system before building it." },
  { code: "03", name: "BUILD", desc: "Engineer with precision. No shortcuts." },
  { code: "04", name: "TEST", desc: "Break it before your users do." },
  { code: "05", name: "DEPLOY", desc: "Ship with confidence, not hope." },
  { code: "06", name: "GROW", desc: "The system improves over time." },
];

export default function C05_Operations() {
  return (
    <section
      id="chapter-operations"
      className="relative w-full"
      aria-label="Chapter 05: Operations — How HESICS works"
    >
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 05 — OPERATIONS
          </p>

          <div className="max-w-3xl w-full">
            <h2
              className="font-mono font-black text-center mb-2 text-white tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              HOW WE WORK
            </h2>
            <p className="font-mono text-sm text-empire-muted/60 tracking-widest text-center mb-12 uppercase">
              One system. Six phases. No guesswork.
            </p>

            {/* Workflow grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WORKFLOW.map((phase, i) => (
                <article
                  key={i}
                  className="relative border border-white/[0.06] bg-white/[0.02] p-5 rounded-sm group hover:border-empire-light/30 transition-colors duration-300"
                  aria-label={`Phase ${phase.code}: ${phase.name}`}
                >
                  {/* Code */}
                  <p className="font-mono text-xs text-empire-light/60 tracking-widest mb-2">
                    {phase.code}
                  </p>
                  {/* Name */}
                  <h3 className="font-mono text-sm font-bold tracking-[0.15em] text-white mb-3">
                    {phase.name}
                  </h3>
                  {/* Description */}
                  <p className="font-mono text-xs text-empire-muted/60 leading-relaxed">
                    {phase.desc}
                  </p>
                  {/* Active indicator */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-empire-light/0 group-hover:bg-empire-light/60 transition-colors duration-300" />
                  {/* Connector line to next */}
                  {i < WORKFLOW.length - 1 && (
                    <div className="absolute -right-px top-1/2 w-px h-8 bg-empire-light/10 -translate-y-1/2 hidden sm:block" />
                  )}
                </article>
              ))}
            </div>

            {/* Mission control badge */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-empire-light/20" />
              <span className="font-mono text-xs tracking-[0.25em] text-empire-muted/40 uppercase">
                MISSION CONTROL ACTIVE
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-empire-light/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
