"use client";
import { useState } from "react";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";
import { PROJECTS } from "@/data/projects";
import { TESTIMONIALS } from "@/data/testimonials";

export default function C06_Vault() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ChapterShell id={6} sectionId="chapter-vault" scrollHeight="560vh">
      {() => (
        <>
          <ChapterNum id={6} />
          <div className="relative z-10 max-w-4xl w-full">
            <DistrictTag id={6} label="THE VAULT" />
            <h2 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"clamp(4rem,11vw,11rem)", lineHeight:0.88, letterSpacing:"0.02em", color:"#ffffff", marginBottom:"0.5rem" }}>
              THE VAULT
            </h2>
            <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(1rem,1.8vw,1.3rem)", color:"rgba(255,255,255,0.35)", marginBottom:"2.5rem" }}>
              {PROJECTS.length} classified files. Every one earned.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1rem", marginBottom:"2rem" }}>
              {PROJECTS.map((p, i) => (
                <article key={p.id}
                  role="button" tabIndex={0}
                  onClick={() => setOpen(open === i ? null : i)}
                  onKeyDown={(e) => { if(e.key==="Enter") setOpen(open === i ? null : i); }}
                  style={{
                    border:`1px solid ${open===i ? "var(--gold,#f5c518)" : "rgba(255,255,255,0.06)"}`,
                    padding:"1.5rem", cursor:"pointer",
                    background: open===i ? "rgba(245,197,24,0.03)" : "rgba(255,255,255,0.01)",
                    transition:"all 0.25s ease",
                  }}>
                  <p className="font-mono" style={{ fontSize:"0.6rem", color:"var(--gold,#f5c518)", opacity:0.6, marginBottom:"0.4rem" }}>
                    FILE {p.code}
                  </p>
                  <h3 style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"1.6rem", letterSpacing:"0.05em", color:"#ffffff", marginBottom:"0.3rem" }}>
                    {p.name}
                  </h3>
                  <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"0.85rem", color:"rgba(255,255,255,0.35)" }}>
                    {p.client} · {p.industry}
                  </p>
                  {open === i && (
                    <div style={{ marginTop:"1rem", paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                      {[["PROBLEM",p.problem],["STRATEGY",p.strategy],["BUILD",p.solution]].map(([label,content]) => (
                        <div key={label} style={{ marginBottom:"0.75rem" }}>
                          <p className="font-mono" style={{ fontSize:"0.6rem", color:"var(--gold,#f5c518)", opacity:0.7, marginBottom:"0.25rem" }}>{label}</p>
                          <p style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"0.85rem", color:"rgba(255,255,255,0.5)", lineHeight:1.5 }}>{content}</p>
                        </div>
                      ))}
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginTop:"0.5rem" }}>
                        {p.technology?.map((t: string, ti: number) => (
                          <span key={ti} className="font-mono" style={{ fontSize:"0.6rem", border:"1px solid rgba(245,197,24,0.2)", color:"var(--gold,#f5c518)", padding:"0.2rem 0.6rem" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {TESTIMONIALS.length > 0 && (
              <div style={{ borderLeft:"3px solid rgba(245,197,24,0.4)", paddingLeft:"2rem", marginBottom:"2rem" }}>
                <p className="font-mono" style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.25)", letterSpacing:"0.2em", marginBottom:"1rem" }}>CLIENT VOICE</p>
                <blockquote style={{ fontFamily:"var(--font-body,'DM Sans',sans-serif)", fontSize:"clamp(1rem,1.8vw,1.4rem)", color:"rgba(255,255,255,0.6)", lineHeight:1.6, fontStyle:"italic", marginBottom:"1rem" }}>
                  "{TESTIMONIALS[0].quote}"
                </blockquote>
                <cite style={{ fontStyle:"normal" }}>
                  <p style={{ fontFamily:"var(--font-display,'Bebas Neue',Impact,sans-serif)", fontSize:"1.2rem", letterSpacing:"0.08em", color:"#ffffff" }}>{TESTIMONIALS[0].author}</p>
                  <p className="font-mono" style={{ fontSize:"0.65rem", color:"rgba(255,255,255,0.35)" }}>{TESTIMONIALS[0].role} · {TESTIMONIALS[0].company}</p>
                </cite>
              </div>
            )}
            <NextDistrict currentId={6} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
