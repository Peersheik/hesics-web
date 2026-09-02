"use client";

import dynamic from "next/dynamic";
import ChapterNav from "@/components/navigation/ChapterNav";
import MapOverlay from "@/components/navigation/MapOverlay";
import C01_Recruitment from "@/components/chapters/C01_Recruitment";
import C02_Origin from "@/components/chapters/C02_Origin";
import C03_Blueprint from "@/components/chapters/C03_Blueprint";
import C04_Arsenal from "@/components/chapters/C04_Arsenal";
import C05_Operations from "@/components/chapters/C05_Operations";
import C06_Vault from "@/components/chapters/C06_Vault";
import C07_Crew from "@/components/chapters/C07_Crew";
import C08_Empire from "@/components/chapters/C08_Empire";

// Persistent 3D canvas — SSR disabled
const HQCanvas = dynamic(() => import("@/components/experience/HQCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full bg-[#040405] text-white">
      {/* ─── Persistent 3D Headquarters Canvas ─────────────────────── */}
      {/* Fixed behind everything. Never unmounts. Camera travels through it. */}
      <HQCanvas />

      {/* ─── Navigation Layer ────────────────────────────────────────── */}
      {/* Fixed on top of canvas, below map overlay */}
      <ChapterNav />
      <MapOverlay />

      {/* ─── Story Chapters — HTML layer above canvas ─────────────── */}
      {/* Each chapter is a tall section. Scroll triggers chapter detection.
          Camera in HQWorld lerps to that chapter's cameraTarget.        */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Chapter 01 — The Recruitment */}
        <C01_Recruitment />

        {/* Chapter 02 — The Origin */}
        <C02_Origin />

        {/* Chapter 03 — The Blueprint */}
        <C03_Blueprint />

        {/* Chapter 04 — The Arsenal */}
        <C04_Arsenal />

        {/* Chapter 05 — Operations */}
        <C05_Operations />

        {/* Chapter 06 — The Vault */}
        <C06_Vault />

        {/* Chapter 07 — The Crew */}
        <C07_Crew />

        {/* Chapter 08 — The Empire */}
        <C08_Empire />
      </div>
    </main>
  );
}
