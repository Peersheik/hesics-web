"use client";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";

const STEPS = ["UNDERSTAND","DESIGN","BUILD","AUTOMATE","GROW"];

export default function C03_Blueprint() {
  return (
    <ChapterShell id={3} sectionId="chapter-blueprint" scrollHeight="380vh">
      {() => (
        <>
          <ChapterNum id={3} />
          <div className="relative z-10 max-w-3xl">
            <DistrictTag id={3} label="THE BLUEPRINT" />
            <h2 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(4rem,11vw,11rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff", marginBottom:"2rem" }}>
              THE<br />BLUEPRINT
            </h2>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem", marginBottom:"2.5rem" }}>
              {[["VISION","Build technology that makes businesses simpler, smarter, and ready for what's next."],
                ["MISSION","Turn real-world problems into practical digital systems that create measurable impact."]
              ].map(([label, text]) => (
                <div key={label} style={{ borderTop:"1px solid rgba(0,229,200,0.2)", paddingTop:"1.2rem" }}>
                  <p className="font-mono" style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--neon,#00e5c8)", marginBottom:"0.75rem" }}>{label}</p>
                  <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(1rem,1.6vw,1.2rem)", color:"rgba(255,255,255,0.65)", lineHeight:1.6 }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"0", marginBottom:"2rem" }}>
              {STEPS.map((s, i) => (
                <div key={s} style={{ display:"flex", alignItems:"center" }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem" }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--neon,#00e5c8)" }} />
                    <span className="font-mono" style={{ fontSize:"0.6rem", letterSpacing:"0.12em", color:"rgba(255,255,255,0.5)", textTransform:"uppercase" }}>{s}</span>
                  </div>
                  {i < STEPS.length-1 && <div style={{ width:"clamp(2rem,4vw,5rem)", height:1, background:"rgba(0,229,200,0.2)", margin:"0 0.25rem", marginBottom:"1.2rem" }} />}
                </div>
              ))}
            </div>
            <NextDistrict currentId={3} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
