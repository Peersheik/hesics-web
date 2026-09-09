"use client";
import { useState } from "react";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";
import { SERVICES } from "@/data/services";

export default function C04_Arsenal() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  return (
    <ChapterShell id={4} sectionId="chapter-arsenal" scrollHeight="500vh">
      {() => (
        <>
          <ChapterNum id={4} />
          <div className="relative z-10 max-w-4xl w-full">
            <DistrictTag id={4} label="THE ARSENAL" />
            <h2 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(4rem,11vw,11rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff", marginBottom:"2rem" }}>
              THE<br />ARSENAL
            </h2>

            {/* Service pills */}
            <nav style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"2.5rem" }} aria-label="Capabilities">
              {SERVICES.map((s, i) => (
                <button key={s.id} onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  style={{
                    fontFamily:"var(--font-mono,'Courier New',monospace)",
                    fontSize:"0.65rem", letterSpacing:"0.15em", padding:"0.6rem 1.2rem",
                    border:`1px solid ${i === active ? "var(--neon,#00e5c8)" : "rgba(255,255,255,0.08)"}`,
                    color: i === active ? "#000" : "rgba(255,255,255,0.5)",
                    background: i === active ? "var(--neon,#00e5c8)" : "transparent",
                    cursor:"pointer", transition:"all 0.25s ease", textTransform:"uppercase",
                  }}>
                  {s.shortName ?? s.name}
                </button>
              ))}
            </nav>

            {/* Active service detail */}
            <div key={svc.id} style={{ borderLeft:"3px solid var(--neon,#00e5c8)", paddingLeft:"2rem", marginBottom:"2rem" }}>
              <h3 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(2.5rem,6vw,5rem)", letterSpacing:"0.04em", color:"#ffffff", lineHeight:0.9, marginBottom:"1rem" }}>
                {svc.name}
              </h3>
              <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(1rem,1.8vw,1.4rem)", color:"rgba(255,255,255,0.55)", lineHeight:1.6, marginBottom:"1.5rem" }}>
                {svc.tagline}
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                {svc.steps?.map((step: {label: string}, i: number) => (
                  <span key={i} className="font-mono" style={{ fontSize:"0.6rem", letterSpacing:"0.12em", color:"var(--neon,#00e5c8)", border:"1px solid rgba(0,229,200,0.2)", padding:"0.3rem 0.8rem" }}>
                    {step.label}
                  </span>
                ))}
              </div>
            </div>
            <NextDistrict currentId={4} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
