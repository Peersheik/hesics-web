"use client";

import { globalLenis } from "@/components/dom/SmoothScroll";
import { useChapterNav } from "@/lib/navigation/useChapterNav";

const EMPIRE_STREAMS = [
  "WEB", "AI", "SAAS", "AUTOMATION", "MARKETING", "PROJECTS", "PEOPLE", "IDEAS",
];

export default function C08_Empire() {
  const jumpToChapter = useChapterNav((s) => s.jumpToChapter);

  return (
    <section
      id="chapter-empire"
      className="relative w-full"
      aria-label="Final Chapter: The Empire — HESICS grand climax and CTA"
    >
      <div className="h-[600vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <p className="type-codename mb-10 opacity-70">
            THE EMPIRE
          </p>

          {/* Convergence streams */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14 max-w-xl">
            {EMPIRE_STREAMS.map((stream, i) => (
              <span
                key={stream}
                className="font-mono text-xs font-bold tracking-[0.2em] text-empire-muted/40 border border-empire-muted/15 px-3 py-1.5 rounded-sm"
              >
                {stream}
              </span>
            ))}
          </div>

          {/* Grand manifesto */}
          <div className="mb-12 space-y-4">
            <p
              className="font-mono font-black text-white/90 uppercase"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 3rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              WE'RE NOT BUILDING FOR TODAY.
            </p>
            <p
              className="font-mono font-black text-empire-light"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 3rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              WE'RE BUILDING FOR WHAT'S NEXT.
            </p>
          </div>

          {/* Brand statement */}
          <div className="mb-14 space-y-1">
            {["ONE VISION.", "ONE MISSION.", "ONE US."].map((line, i) => (
              <p
                key={line}
                className="font-mono text-sm sm:text-base tracking-[0.3em] text-white/40"
                style={{ letterSpacing: "0.3em" }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Final CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 font-mono text-sm font-bold tracking-[0.25em] text-white uppercase px-10 py-5 border border-empire-light overflow-hidden transition-all duration-300 hover:bg-empire-light"
              style={{ letterSpacing: "0.25em" }}
              aria-label="Build with HESICS — contact us"
            >
              <span className="absolute inset-0 bg-empire-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              <span className="relative">BUILD WITH HESICS</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.2em] text-empire-muted/70 hover:text-white uppercase px-8 py-5 border border-white/10 hover:border-white/30 transition-all duration-300"
              style={{ letterSpacing: "0.2em" }}
              aria-label="Start a project with HESICS"
            >
              START A PROJECT →
            </a>
          </div>
        </div>
      </div>

      {/* ─── Contact Section ──────────────────────────────────────────── */}
      <ContactSection />
    </section>
  );
}

function ContactSection() {
  return (
    <div
      id="contact"
      className="relative w-full py-24 px-6 bg-[#040405]"
      aria-label="Contact HESICS — Start your project"
    >
      <div className="max-w-2xl mx-auto">
        {/* Narrative */}
        <div className="text-center mb-16">
          <div className="flex flex-col gap-3 mb-8">
            {["YOUR IDEA", "↓", "YOUR PROBLEM", "↓", "HESICS", "↓", "LET'S BUILD"].map((line, i) => (
              <p
                key={i}
                className={`font-mono ${
                  line === "↓"
                    ? "text-empire-light/30 text-xs"
                    : line === "HESICS"
                    ? "text-empire-light text-lg font-bold tracking-[0.3em]"
                    : line === "LET'S BUILD"
                    ? "text-white text-base font-bold tracking-[0.25em]"
                    : "text-empire-muted/60 text-sm tracking-[0.2em]"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <form
          className="space-y-4"
          aria-label="Project inquiry form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="font-mono text-xs tracking-[0.2em] text-empire-muted/60 block mb-2 uppercase">
              Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className="w-full bg-white/[0.03] border border-white/[0.08] text-white font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-empire-light/50 transition-colors duration-200 placeholder:text-white/20"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="font-mono text-xs tracking-[0.2em] text-empire-muted/60 block mb-2 uppercase">
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="w-full bg-white/[0.03] border border-white/[0.08] text-white font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-empire-light/50 transition-colors duration-200 placeholder:text-white/20"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="contact-company" className="font-mono text-xs tracking-[0.2em] text-empire-muted/60 block mb-2 uppercase">
              Company
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              placeholder="Your company"
              className="w-full bg-white/[0.03] border border-white/[0.08] text-white font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-empire-light/50 transition-colors duration-200 placeholder:text-white/20"
            />
          </div>

          {/* Project type */}
          <div>
            <label htmlFor="contact-type" className="font-mono text-xs tracking-[0.2em] text-empire-muted/60 block mb-2 uppercase">
              Project Type
            </label>
            <select
              id="contact-type"
              className="w-full bg-white/[0.03] border border-white/[0.08] text-white/70 font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-empire-light/50 transition-colors duration-200 appearance-none"
            >
              <option value="">Select a project type</option>
              <option value="web">Web Development</option>
              <option value="ai">AI & Automation</option>
              <option value="saas">SaaS Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Project description */}
          <div>
            <label htmlFor="contact-message" className="font-mono text-xs tracking-[0.2em] text-empire-muted/60 block mb-2 uppercase">
              Tell us about your project *
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Describe your project, problem, or idea..."
              className="w-full bg-white/[0.03] border border-white/[0.08] text-white font-mono text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-empire-light/50 transition-colors duration-200 placeholder:text-white/20 resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group relative w-full inline-flex items-center justify-center gap-4 font-mono text-sm font-bold tracking-[0.3em] text-white uppercase px-8 py-5 border border-empire-light overflow-hidden transition-all duration-300"
            aria-label="Submit project inquiry to HESICS"
          >
            <span className="absolute inset-0 bg-empire-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
            <span className="relative">START A PROJECT →</span>
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-empire-muted/40 tracking-widest">
            © {new Date().getFullYear()} HESICS TECHNOLOGIES
          </p>
          <p className="font-mono text-xs text-empire-light/40 tracking-wider">
            THE EMPIRE v2.0
          </p>
        </footer>
      </div>
    </div>
  );
}
