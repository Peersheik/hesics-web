"use client";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";
import { VALUES } from "@/data/values";
import { TEAM, COMPANY_STORY } from "@/data/team";

export default function C07_Crew() {
  return (
    <ChapterShell id={7} sectionId="chapter-crew" scrollHeight="560vh">
      {() => (
        <>
          <ChapterNum id={7} />
          <div className="relative z-10 max-w-4xl w-full">
            <DistrictTag id={7} label="THE CREW" />
            <h2 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(4rem,11vw,11rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff", marginBottom:"2rem" }}>
              THE CREW
            </h2>

            {/* Story pillars */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2.5rem" }}>
              {[["WHO WE ARE",COMPANY_STORY.whoWeAre],["WHY WE EXIST",COMPANY_STORY.whyWeExist],
                ["WHAT WE BELIEVE",COMPANY_STORY.whatWeBelieve],["WHERE WE'RE GOING",COMPANY_STORY.whatWeAreBuilding]
              ].map(([label,text]) => (
                <div key={label as string} style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"1rem" }}>
                  <p className="font-mono" style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:"rgba(255,255,255,0.3)", marginBottom:"0.6rem" }}>{label as string}</p>
                  <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(0.9rem,1.5vw,1.1rem)", color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>{text as string}</p>
                </div>
              ))}
            </div>

            {/* Values — large stack */}
            <div style={{ marginBottom:"2.5rem" }}>
              <p className="font-mono" style={{ fontSize:"0.65rem", letterSpacing:"0.2em", color:"rgba(255,255,255,0.25)", marginBottom:"1rem" }}>VALUES</p>
              {VALUES.map((v) => (
                <div key={v.id} style={{ display:"flex", alignItems:"baseline", gap:"2rem", padding:"0.75rem 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(1.6rem,3.5vw,3rem)", letterSpacing:"0.06em", color:"#ffffff", minWidth:"200px" }}>
                    {v.word}
                  </span>
                  <span style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(0.9rem,1.4vw,1.1rem)", color:"rgba(255,255,255,0.4)", lineHeight:1.5 }}>
                    {v.definition}
                  </span>
                </div>
              ))}
            </div>

            {/* Team */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"1rem", marginBottom:"2rem" }}>
              {TEAM.map((m) => (
                <div key={m.id} style={{ border:"1px solid rgba(255,255,255,0.06)", padding:"1.5rem", background:"rgba(255,255,255,0.01)" }}>
                  {m.isFounder && <p className="font-mono" style={{ fontSize:"0.6rem", color:"var(--neon,#00e5c8)", opacity:0.7, marginBottom:"0.4rem" }}>FOUNDER</p>}
                  <h3 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"1.6rem", letterSpacing:"0.05em", color:"#ffffff", marginBottom:"0.25rem" }}>{m.name}</h3>
                  <p className="font-mono" style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.4)", marginBottom:"0.75rem", letterSpacing:"0.1em" }}>{m.role}</p>
                  <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"0.85rem", color:"rgba(255,255,255,0.35)", lineHeight:1.55 }}>{m.bio}</p>
                </div>
              ))}
            </div>
            <NextDistrict currentId={7} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
