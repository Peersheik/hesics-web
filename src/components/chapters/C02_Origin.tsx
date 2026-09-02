"use client";

export default function C02_Origin() {
  const problems = [
    "Too many tools.",
    "Too much manual work.",
    "Disconnected systems.",
    "Technology that creates more complexity than clarity.",
    "Digital presence that doesn't convert.",
    "Missed opportunities in the AI era.",
  ];

  return (
    <section
      id="chapter-origin"
      className="relative w-full"
      aria-label="Chapter 02: The Origin — Why HESICS exists"
    >
      {/* Scrollable pin container */}
      <div className="h-[350vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          {/* Chapter label */}
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 02 — THE ORIGIN
          </p>

          <div className="max-w-2xl w-full text-center">
            <h2 className="font-mono text-xl font-bold tracking-[0.2em] text-white/30 mb-12 uppercase">
              THE PROBLEM
            </h2>

            {/* Problem statements */}
            <div className="flex flex-col gap-5 mb-16">
              {problems.map((problem, i) => (
                <p
                  key={i}
                  className="font-mono text-base sm:text-lg text-white/50 tracking-wider"
                  style={{ letterSpacing: "0.05em" }}
                >
                  "{problem}"
                </p>
              ))}
            </div>

            {/* Separator */}
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px w-16 bg-empire-light/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-empire-light/60" />
              <div className="h-px w-16 bg-empire-light/30" />
            </div>

            {/* The resolution */}
            <p
              className="font-mono text-sm text-empire-muted tracking-widest mb-6 uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              HESICS EXISTS BECAUSE
            </p>
            <p
              className="type-statement text-white/90 mb-4"
              style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
            >
              Technology should feel simpler.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              <p className="font-mono font-bold text-xl sm:text-2xl tracking-[0.2em] text-white">
                WE DON'T JUST BUILD.
              </p>
              <p className="font-mono font-bold text-xl sm:text-2xl tracking-[0.2em] text-empire-light">
                WE SOLVE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
