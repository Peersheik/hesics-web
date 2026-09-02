"use client";

import dynamic from "next/dynamic";
import EmpireMap from "@/components/navigation/EmpireMap";
import MapTrigger from "@/components/navigation/MapTrigger";
import C01_Recruitment from "@/components/chapters/C01_Recruitment";
import C02_Origin from "@/components/chapters/C02_Origin";
import C03_Blueprint from "@/components/chapters/C03_Blueprint";
import C04_Arsenal from "@/components/chapters/C04_Arsenal";
import C05_Operations from "@/components/chapters/C05_Operations";
import C06_Vault from "@/components/chapters/C06_Vault";
import C07_Crew from "@/components/chapters/C07_Crew";
import C08_Empire from "@/components/chapters/C08_Empire";

// Persistent 3D headquarters canvas — SSR disabled
const HQCanvas = dynamic(() => import("@/components/experience/HQCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full bg-[#040405] text-white">
      {/* ── Persistent 3D HQ Canvas — fixed, behind everything ─────── */}
      <HQCanvas />

      {/* ── Minimal top wordmark ─────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        role="banner"
        aria-label="HESICS"
      >
        <div className="flex items-center gap-3">
          <span
            className="text-white font-mono text-sm font-bold select-none"
            style={{ letterSpacing: "0.3em" }}
          >
            HESICS
          </span>
          <span className="w-px h-4" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="font-mono text-xs" style={{ color: "var(--fg-subtle)", letterSpacing: "0.2em" }}>
            THE EMPIRE
          </span>
        </div>
      </div>

      {/* ── Empire Map — full-screen spatial territory map ──────────── */}
      <EmpireMap />

      {/* ── Map Trigger — persistent bottom-right compass button ────── */}
      <MapTrigger />

      {/* ── Story chapters — HTML layer above canvas ─────────────────── */}
      <div className="relative z-10 w-full flex flex-col">
        <C01_Recruitment />
        <C02_Origin />
        <C03_Blueprint />
        <C04_Arsenal />
        <C05_Operations />
        <C06_Vault />
        <C07_Crew />
        <C08_Empire />
      </div>
    </main>
  );
}
