"use client";
import { ChapterShell, ChapterNum, NextDistrict, DistrictTag } from "./ChapterPrimitives";

const PROBLEMS = [
  "Too many tools. None of them talking to each other.",
  "Too much manual work. Not enough actual thinking.",
  "Digital presence that looks good but converts nothing.",
  "AI hype with zero practical application.",
  "Disconnected systems bleeding compounding value every day.",
];

export default function C02_Origin() {
  return (
    <ChapterShell id={2} sectionId="chapter-origin" scrollHeight="400vh">
      {() => (
        <>
          <ChapterNum id={2} />
          <div className="relative z-10 max-w-3xl">
            <DistrictTag id={2} label="THE ORIGIN" />

            <h2 style={{
              fontFamily: "var(--font-display,'Bebas Neue',Impact,sans-serif)",
              fontSize: "clamp(4rem,11vw,11rem)",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              color: "#ffffff",
              marginBottom: "2rem",
            }}>
              WHY WE<br />EXIST
            </h2>

            <div style={{ marginBottom: "2.5rem" }}>
              <p className="font-mono mb-6"
                style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)" }}>
                THE PROBLEMS WE WERE BUILT TO SOLVE
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {PROBLEMS.map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <span className="font-mono"
                      style={{ fontSize: "0.7rem", color: "var(--neon,#00e5c8)", opacity: 0.6, flexShrink: 0, marginTop: "0.2rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{
                      fontFamily: "var(--font-body,'DM Sans',sans-serif)",
                      fontSize: "clamp(1rem,1.8vw,1.3rem)",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.5,
                    }}>
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderLeft: "3px solid var(--neon,#00e5c8)", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
              <p style={{
                fontFamily: "var(--font-display,'Bebas Neue',Impact,sans-serif)",
                fontSize: "clamp(1.8rem,4vw,3.5rem)",
                letterSpacing: "0.05em",
                color: "#ffffff",
              }}>
                TECHNOLOGY SHOULD FEEL SIMPLER.
              </p>
              <p style={{
                fontFamily: "var(--font-display,'Bebas Neue',Impact,sans-serif)",
                fontSize: "clamp(1.8rem,4vw,3.5rem)",
                letterSpacing: "0.05em",
                color: "var(--neon,#00e5c8)",
              }}>
                WE DON'T JUST BUILD. WE SOLVE.
              </p>
            </div>

            <NextDistrict currentId={2} />
          </div>
        </>
      )}
    </ChapterShell>
  );
}
