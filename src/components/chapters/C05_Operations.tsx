"use client";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";

const PHASES = [
  { code:"01", name:"DISCOVER",   desc:"Understand the real problem, not the assumed one." },
  { code:"02", name:"STRATEGIZE", desc:"Map the system before building it." },
  { code:"03", name:"BUILD",      desc:"Engineer with precision. No shortcuts." },
  { code:"04", name:"TEST",       desc:"Break it before your users do." },
  { code:"05", name:"DEPLOY",     desc:"Ship with confidence." },
  { code:"06", name:"GROW",       desc:"The system improves over time." },
];

export default function C05_Operations() {
  return (
    <ChapterShell id={5} sectionId="chapter-operations" scrollHeight="420vh">
      {() => (
        <>
          <ChapterNum id={5} />
          <div className="relative z-10 max-w-4xl w-full">
            <DistrictTag id={5} label="OPERATIONS" />
            <h2 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(4rem,11vw,11rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff", marginBottom:"0.5rem" }}>
              HOW WE<br />OPERATE
            </h2>
            <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(1rem,1.8vw,1.3rem)", color:"rgba(255,255,255,0.4)", marginBottom:"2.5rem" }}>
              Six phases. No exceptions.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1rem", marginBottom:"2.5rem" }}>
              {PHASES.map((ph) => (
                <article key={ph.code}
                  style={{ border:"1px solid rgba(0,229,200,0.1)", padding:"1.5rem", background:"rgba(0,229,200,0.02)" }}>
                  <p className="font-mono" style={{ fontSize:"0.65rem", color:"var(--neon,#00e5c8)", opacity:0.6, marginBottom:"0.5rem" }}>{ph.code}</p>
                  <h3 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"1.8rem", letterSpacing:"0.06em", color:"#ffffff", marginBottom:"0.5rem" }}>
                    {ph.name}
                  </h3>
                  <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"0.9rem", color:"rgba(255,255,255,0.45)", lineHeight:1.55 }}>
                    {ph.desc}
                  </p>
                </article>
              ))}
            </div>
            <NextDistrict currentId={5} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
