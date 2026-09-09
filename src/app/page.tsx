"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import GTAHud       from "@/components/gta/GTAHud";
import GTAMiniMap   from "@/components/gta/GTAMiniMap";
import C01_Recruitment from "@/components/chapters/C01_Recruitment";
import C02_Origin      from "@/components/chapters/C02_Origin";
import C03_Blueprint   from "@/components/chapters/C03_Blueprint";
import C04_Arsenal     from "@/components/chapters/C04_Arsenal";
import C05_Operations  from "@/components/chapters/C05_Operations";
import C06_Vault       from "@/components/chapters/C06_Vault";
import C07_Crew        from "@/components/chapters/C07_Crew";
import C08_Empire      from "@/components/chapters/C08_Empire";

// SSR-disabled: loading screen (client-only) and 3D canvas
const GTALoadingScreen = dynamic(
  () => import("@/components/gta/GTALoadingScreen"),
  { ssr: false }
);
const HQCanvas = dynamic(
  () => import("@/components/experience/HQCanvas"),
  { ssr: false }
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main
      className="relative w-full"
      style={{ background: "var(--bg,#070810)", color: "#fff", minHeight: "100vh" }}
    >
      {/* ── GTA Loading Screen ─────────────────────────────────────── */}
      {!loaded && <GTALoadingScreen onDone={() => setLoaded(true)} />}

      {/* ── Persistent 3D Canvas — fixed, behind everything ─────────── */}
      <HQCanvas />

      {/* ── GTA HUD — top bar ───────────────────────────────────────── */}
      <GTAHud />

      {/* ── GTA Mini-Map — bottom-left ─────────────────────────────── */}
      <GTAMiniMap />

      {/* ── Story chapters ──────────────────────────────────────────── */}
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
