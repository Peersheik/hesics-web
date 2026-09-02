"use client";

const STREAMS = ["WEB", "AI", "SAAS", "AUTOMATION", "MARKETING", "PROJECTS", "PEOPLE", "IDEAS"];

const CONTACT_TYPES = [
  { value: "", label: "Select a project type" },
  { value: "web", label: "Web Development" },
  { value: "ai", label: "AI & Automation" },
  { value: "saas", label: "SaaS Development" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "other", label: "Other" },
];

export default function C08_Empire() {
  return (
    <>
      {/* ── Chapter 08: The Empire ─────────────────────────────────────── */}
      <section
        id="chapter-empire"
        aria-label="Chapter 08 — The Empire"
        className="relative w-full"
      >
        <div style={{ height: "600vh" }} className="relative">
          <div
            className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden text-left"
            style={{ padding: "5rem clamp(2rem, 8vw, 6rem)" }}
          >
            {/* Ghost numeral */}
            <span
              className="type-chapter-num absolute"
              style={{ top: "50%", left: "clamp(1rem,4vw,3rem)", transform: "translateY(-50%)", zIndex: 0 }}
              aria-hidden="true"
            >
              08
            </span>

            <div className="relative z-10 max-w-3xl">
              <p className="type-codename mb-5">08 — THE EMPIRE</p>

              {/* Convergence streams */}
              <div className="flex flex-wrap gap-2 mb-10">
                {STREAMS.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs font-bold tracking-[0.2em] px-3 py-1.5 border rounded-sm"
                    style={{ borderColor: "rgba(12,116,93,0.15)", color: "var(--fg-muted)", opacity: 0.5, letterSpacing: "0.2em" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Grand manifesto */}
              <h2
                className="type-empire text-white mb-4"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                WE'RE NOT BUILDING FOR TODAY.
              </h2>
              {/* --power accent: the one climactic moment allowed */}
              <h2
                className="type-empire mb-10"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  color: "var(--power)",
                  textShadow: "0 0 60px var(--power-glow)",
                }}
              >
                WE'RE BUILDING FOR WHAT'S NEXT.
              </h2>

              {/* Brand statement */}
              <div className="mb-14 space-y-1">
                {["ONE VISION.", "ONE MISSION.", "ONE US."].map((line) => (
                  <p key={line} className="font-mono text-sm tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.3em" }}>
                    {line}
                  </p>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-4 font-mono text-sm font-bold tracking-[0.25em] text-white uppercase px-10 py-4 border transition-all duration-400 overflow-hidden"
                  style={{ borderColor: "var(--accent-light)", letterSpacing: "0.25em" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--power)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--power)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-light)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  aria-label="Build with HESICS — go to contact form"
                >
                  BUILD WITH HESICS
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.2em] uppercase px-8 py-4 border transition-all duration-300"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--fg-muted)", letterSpacing: "0.2em" }}
                  aria-label="Start a project with HESICS"
                >
                  START A PROJECT →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact section ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative w-full py-28 px-6"
        style={{ background: "var(--bg)" }}
        aria-label="Contact HESICS — Start your project"
      >
        <div className="max-w-2xl mx-auto">
          {/* Narrative */}
          <div className="text-center mb-16">
            {["YOUR IDEA", "↓", "YOUR PROBLEM", "↓", "HESICS", "↓", "LET'S BUILD"].map((line, i) => (
              <p
                key={i}
                className="font-mono"
                style={{
                  color: line === "HESICS" ? "var(--accent-light)" : line === "↓" ? "rgba(12,116,93,0.3)" : "var(--fg-muted)",
                  fontSize: line === "HESICS" ? "1rem" : "0.75rem",
                  fontWeight: line === "HESICS" || line === "LET'S BUILD" ? 700 : 400,
                  letterSpacing: "0.2em",
                  marginBottom: "0.5rem",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4" aria-label="Project inquiry form" onSubmit={(e) => e.preventDefault()} noValidate>
            {[
              { id: "contact-name",    type: "text",  label: "Name *",    placeholder: "Your name",         autoComplete: "name",         required: true },
              { id: "contact-email",   type: "email", label: "Email *",   placeholder: "you@company.com",   autoComplete: "email",        required: true },
              { id: "contact-company", type: "text",  label: "Company",   placeholder: "Your company",      autoComplete: "organization", required: false },
            ].map(({ id, type, label, placeholder, autoComplete, required }) => (
              <div key={id}>
                <label htmlFor={id} className="font-mono text-xs tracking-[0.2em] block mb-2" style={{ color: "var(--fg-muted)", fontSize: "0.65rem" }}>
                  {label}
                </label>
                <input
                  id={id} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder}
                  className="w-full font-mono text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors duration-200 placeholder:text-white/20"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "white" }}
                  onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "var(--accent-light)"; }}
                  onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
              </div>
            ))}

            <div>
              <label htmlFor="contact-type" className="font-mono text-xs tracking-[0.2em] block mb-2" style={{ color: "var(--fg-muted)", fontSize: "0.65rem" }}>
                PROJECT TYPE
              </label>
              <select
                id="contact-type"
                className="w-full font-mono text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors duration-200 appearance-none"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
              >
                {CONTACT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="font-mono text-xs tracking-[0.2em] block mb-2" style={{ color: "var(--fg-muted)", fontSize: "0.65rem" }}>
                TELL US ABOUT YOUR PROJECT *
              </label>
              <textarea
                id="contact-message" required rows={5}
                placeholder="Describe your project, problem, or idea..."
                className="w-full font-mono text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors duration-200 placeholder:text-white/20 resize-y"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "white" }}
                onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--accent-light)"; }}
                onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-4 font-mono text-sm font-bold tracking-[0.3em] text-white uppercase px-8 py-5 border transition-all duration-300"
              style={{ borderColor: "var(--accent-light)", letterSpacing: "0.3em" }}
              aria-label="Submit project inquiry to HESICS"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--power)";
                el.style.color = "var(--power)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--accent-light)";
                el.style.color = "white";
              }}
            >
              START A PROJECT →
            </button>
          </form>

          {/* Footer */}
          <footer className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="font-mono text-xs tracking-widest" style={{ color: "var(--fg-subtle)" }}>
              © {new Date().getFullYear()} HESICS TECHNOLOGIES
            </p>
            <p className="font-mono text-xs tracking-wider" style={{ color: "var(--accent)", opacity: 0.4 }}>
              THE EMPIRE v2.0
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
