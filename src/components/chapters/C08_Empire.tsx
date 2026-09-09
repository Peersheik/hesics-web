"use client";

const STREAMS = ["WEB","AI","SAAS","AUTOMATION","MARKETING","PROJECTS","PEOPLE","IDEAS"];
const CONTACT_TYPES = [
  { value:"", label:"Select project type" },
  { value:"web", label:"Web Development" },
  { value:"ai",  label:"AI and Automation" },
  { value:"saas",label:"SaaS Development" },
  { value:"mkt", label:"Digital Marketing" },
  { value:"other",label:"Other" },
];

export default function C08_Empire() {
  return (
    <>
      {/* ── The Empire ── */}
      <section id="chapter-empire" aria-label="The Empire" style={{ position:"relative", width:"100%", background:"var(--bg,#070810)" }}>
        <div style={{ height:"600vh", position:"relative" }}>
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
            style={{ padding:"6rem clamp(2rem,8vw,7rem) 4rem" }}>

            {/* Background radial */}
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, rgba(0,229,200,0.08) 0%, rgba(7,8,16,0) 70%)", pointerEvents:"none" }} />

            {/* Grid */}
            <div style={{ position:"absolute", inset:0, pointerEvents:"none",
              backgroundImage:"linear-gradient(rgba(0,229,200,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,200,0.03) 1px,transparent 1px)",
              backgroundSize:"80px 80px" }} />

            <div className="relative z-10 max-w-4xl">
              {/* Stream tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"3rem" }}>
                {STREAMS.map((s) => (
                  <span key={s} className="font-mono"
                    style={{ fontSize:"0.65rem", letterSpacing:"0.2em", padding:"0.4rem 1rem",
                      border:"1px solid rgba(0,229,200,0.12)", color:"rgba(255,255,255,0.3)" }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Manifesto */}
              <div style={{ marginBottom:"1rem" }}>
                <p style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                  fontSize:"clamp(3rem,8vw,8rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff" }}>
                  WE'RE NOT BUILDING
                </p>
                <p style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                  fontSize:"clamp(3rem,8vw,8rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff" }}>
                  FOR TODAY.
                </p>
              </div>
              <div style={{ marginBottom:"3rem" }}>
                <p style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                  fontSize:"clamp(3rem,8vw,8rem)", lineHeight:0.88, letterSpacing:"0.02em",
                  color:"var(--neon,#00e5c8)",
                  textShadow:"0 0 40px rgba(0,229,200,0.4), 0 0 80px rgba(0,229,200,0.2)" }}>
                  WE'RE BUILDING
                </p>
                <p style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                  fontSize:"clamp(3rem,8vw,8rem)", lineHeight:0.88, letterSpacing:"0.02em",
                  color:"var(--neon,#00e5c8)",
                  textShadow:"0 0 40px rgba(0,229,200,0.4), 0 0 80px rgba(0,229,200,0.2)" }}>
                  FOR WHAT'S NEXT.
                </p>
              </div>

              {/* Brand statement */}
              <div style={{ display:"flex", flexDirection:"column", gap:"0.25rem", marginBottom:"3rem" }}>
                {["ONE VISION.","ONE MISSION.","ONE US."].map((line) => (
                  <p key={line} className="font-mono"
                    style={{ fontSize:"0.9rem", letterSpacing:"0.3em", color:"rgba(255,255,255,0.25)" }}>
                    {line}
                  </p>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
                <a href="#contact"
                  style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                    fontSize:"1.4rem", letterSpacing:"0.12em", padding:"1rem 3rem",
                    border:"2px solid var(--neon,#00e5c8)", color:"#000",
                    background:"var(--neon,#00e5c8)", textDecoration:"none", display:"inline-block",
                    transition:"all 0.3s ease" }}
                  onMouseEnter={(e) => { const el=e.currentTarget as HTMLAnchorElement; el.style.background="transparent"; el.style.color="var(--neon,#00e5c8)"; }}
                  onMouseLeave={(e) => { const el=e.currentTarget as HTMLAnchorElement; el.style.background="var(--neon,#00e5c8)"; el.style.color="#000"; }}
                  aria-label="Build with HESICS">
                  BUILD WITH HESICS
                </a>
                <a href="#contact"
                  style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                    fontSize:"1.4rem", letterSpacing:"0.12em", padding:"1rem 2.5rem",
                    border:"2px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.6)",
                    textDecoration:"none", display:"inline-block", transition:"all 0.3s ease" }}
                  onMouseEnter={(e) => { const el=e.currentTarget as HTMLAnchorElement; el.style.borderColor="rgba(255,255,255,0.5)"; el.style.color="#ffffff"; }}
                  onMouseLeave={(e) => { const el=e.currentTarget as HTMLAnchorElement; el.style.borderColor="rgba(255,255,255,0.2)"; el.style.color="rgba(255,255,255,0.6)"; }}
                  aria-label="Start a project">
                  START A PROJECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" aria-label="Contact HESICS"
        style={{ position:"relative", width:"100%", background:"var(--bg,#070810)", padding:"8rem clamp(1rem,6vw,4rem)" }}>
        <div style={{ maxWidth:"680px", margin:"0 auto" }}>
          {/* Narrative path */}
          <div style={{ textAlign:"center", marginBottom:"4rem" }}>
            {["YOUR IDEA","↓","YOUR PROBLEM","↓","HESICS","↓","LET'S BUILD"].map((line,i) => (
              <p key={i} className={line==="↓"?"":"font-mono"}
                style={{
                  fontFamily: line==="HESICS"||line==="LET'S BUILD" ? "var(--font-display,'Bebas Neue',Impact,sans-serif)" : "var(--font-mono,'Courier New',monospace)",
                  fontSize: line==="HESICS" ? "3rem" : line==="LET'S BUILD" ? "2rem" : line==="↓" ? "1.5rem" : "0.75rem",
                  letterSpacing: line==="HESICS"||line==="LET'S BUILD" ? "0.08em" : "0.2em",
                  color: line==="HESICS" ? "var(--neon,#00e5c8)" : line==="↓" ? "rgba(0,229,200,0.2)" : line==="LET'S BUILD" ? "#ffffff" : "rgba(255,255,255,0.35)",
                  lineHeight: line==="↓" ? 0.8 : 1.2,
                  marginBottom: "0.4rem",
                  textShadow: line==="HESICS" ? "0 0 20px rgba(0,229,200,0.4)" : "none",
                }}>
                {line}
              </p>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} noValidate
            style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}
            aria-label="Project inquiry">
            {[
              { id:"cn", type:"text",  label:"NAME",    ph:"Your name",        ac:"name",         req:true },
              { id:"ce", type:"email", label:"EMAIL",   ph:"you@company.com",  ac:"email",        req:true },
              { id:"cc", type:"text",  label:"COMPANY", ph:"Your company",     ac:"organization", req:false },
            ].map(({id,type,label,ph,ac,req}) => (
              <div key={id}>
                <label htmlFor={id} className="font-mono" style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.35)", display:"block", marginBottom:"0.5rem" }}>{label}{req?" *":""}</label>
                <input id={id} type={type} required={req} autoComplete={ac} placeholder={ph}
                  style={{ width:"100%", fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"1rem",
                    padding:"0.85rem 1rem", border:"1px solid rgba(255,255,255,0.08)",
                    background:"rgba(255,255,255,0.03)", color:"#ffffff", outline:"none", transition:"border-color 0.2s" }}
                  onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor="var(--neon,#00e5c8)"; }}
                  onBlur={(e)  => { (e.currentTarget as HTMLInputElement).style.borderColor="rgba(255,255,255,0.08)"; }} />
              </div>
            ))}

            <div>
              <label htmlFor="ct" className="font-mono" style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.35)", display:"block", marginBottom:"0.5rem" }}>PROJECT TYPE</label>
              <select id="ct" style={{ width:"100%", fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"1rem",
                padding:"0.85rem 1rem", border:"1px solid rgba(255,255,255,0.08)",
                background:"rgba(7,8,16,0.95)", color:"rgba(255,255,255,0.7)", outline:"none" }}>
                {CONTACT_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="cm" className="font-mono" style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.35)", display:"block", marginBottom:"0.5rem" }}>TELL US ABOUT YOUR PROJECT *</label>
              <textarea id="cm" required rows={5} placeholder="Describe your project..."
                style={{ width:"100%", fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"1rem",
                  padding:"0.85rem 1rem", border:"1px solid rgba(255,255,255,0.08)",
                  background:"rgba(255,255,255,0.03)", color:"#ffffff", outline:"none",
                  resize:"vertical", transition:"border-color 0.2s" }}
                onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor="var(--neon,#00e5c8)"; }}
                onBlur={(e)  => { (e.currentTarget as HTMLTextAreaElement).style.borderColor="rgba(255,255,255,0.08)"; }} />
            </div>

            <button type="submit"
              style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)",
                fontSize:"1.4rem", letterSpacing:"0.15em", padding:"1.2rem",
                width:"100%", border:"2px solid var(--neon,#00e5c8)",
                color:"#000", background:"var(--neon,#00e5c8)", cursor:"pointer",
                transition:"all 0.3s ease" }}
              onMouseEnter={(e) => { const el=e.currentTarget as HTMLButtonElement; el.style.background="transparent"; el.style.color="var(--neon,#00e5c8)"; }}
              onMouseLeave={(e) => { const el=e.currentTarget as HTMLButtonElement; el.style.background="var(--neon,#00e5c8)"; el.style.color="#000"; }}>
              START A PROJECT
            </button>
          </form>

          <footer style={{ marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid rgba(255,255,255,0.06)",
            display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <p className="font-mono" style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.2)", letterSpacing:"0.15em" }}>
              © {new Date().getFullYear()} HESICS TECHNOLOGIES
            </p>
            <p className="font-mono" style={{ fontSize:"0.65rem", color:"rgba(0,229,200,0.3)", letterSpacing:"0.15em" }}>
              EMPIRE v3.0
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
