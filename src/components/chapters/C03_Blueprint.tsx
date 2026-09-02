"use client";

const MISSION_STEPS = [
  { step: "UNDERSTAND", desc: "We learn your world before writing a line of code." },
  { step: "DESIGN", desc: "We architect the system before touching a pixel." },
  { step: "BUILD", desc: "We engineer with precision, not speed." },
  { step: "AUTOMATE", desc: "We make the system work for you, not the other way around." },
  { step: "GROW", desc: "We build for where you're going, not just where you are." },
];

export default function C03_Blueprint() {
  return (
    <section
      id="chapter-blueprint"
      className="relative w-full"
      aria-label="Chapter 03: The Blueprint — Vision and Mission"
    >
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 03 — THE BLUEPRINT
          </p>

          <div className="max-w-3xl w-full">
            {/* Vision */}
            <div className="mb-16 text-center">
              <p className="font-mono text-xs tracking-[0.3em] text-empire-muted/60 mb-4 uppercase">
                OUR VISION
              </p>
              <p
                className="font-mono text-white/85 leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}
              >
                Build technology that makes businesses simpler, smarter and ready for what's next.
              </p>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-12 bg-gradient-to-b from-empire-light/60 to-transparent" />
            </div>

            {/* Mission */}
            <div className="mb-16 text-center">
              <p className="font-mono text-xs tracking-[0.3em] text-empire-muted/60 mb-4 uppercase">
                OUR MISSION
              </p>
              <p
                className="font-mono text-white/85 leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}
              >
                Turn real-world problems into practical digital systems that create measurable impact.
              </p>
            </div>

            {/* Process pathway */}
            <div className="flex items-center justify-center gap-0 flex-wrap">
              {MISSION_STEPS.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="group flex flex-col items-center gap-2 px-3 py-3">
                    <div className="w-2 h-2 rounded-full bg-empire-light/70" />
                    <p className="font-mono text-xs font-bold tracking-[0.15em] text-white/80 text-center uppercase">
                      {item.step}
                    </p>
                  </div>
                  {i < MISSION_STEPS.length - 1 && (
                    <div className="w-6 sm:w-10 h-px bg-empire-light/25 mb-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
