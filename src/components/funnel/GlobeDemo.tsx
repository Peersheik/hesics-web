"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Highlighter from "@/registry/magicui/highlighter";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
      Loading 3D Globe...
    </div>
  ),
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#c9a227",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 25.2048, lng: 55.2708 }, // Dubai
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#00c6b0", "#c9a227", "#3b82f6"];
  const sampleArcs = [
    { order: 1, startLat: 25.2048, startLng: 55.2708, endLat: 19.076, endLng: 72.8777, color: colors[0] }, // Dubai -> Mumbai
    { order: 1, startLat: 25.2048, startLng: 55.2708, endLat: 9.9312, endLng: 76.2673, color: colors[1] },  // Dubai -> Kochi
    { order: 2, startLat: 24.7136, startLng: 46.6753, endLat: 25.2048, endLng: 55.2708, color: colors[0] }, // Riyadh -> Dubai
    { order: 2, startLat: 25.2854, startLng: 51.531, endLat: 25.2048, endLng: 55.2708, color: colors[1] },  // Doha -> Dubai
    { order: 3, startLat: 51.5074, startLng: -0.1278, endLat: 25.2048, endLng: 55.2708, color: colors[2] }, // London -> Dubai
    { order: 3, startLat: 40.7128, startLng: -74.006, endLat: 25.2048, endLng: 55.2708, color: colors[0] },  // NYC -> Dubai
  ];

  return (
    <div className="relative w-full py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c6b0]/10 border border-[#00c6b0]/30 text-[#00c6b0] text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00c6b0] animate-pulse" />
          Global Delivery · High-Converting Infrastructure
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--f-fg)] font-[var(--f-font-display)] tracking-tight">
          Serving Businesses{" "}
          <Highlighter action="highlight" color="var(--f-gold)">
            Worldwide & Across Hubs
          </Highlighter>
        </h2>
        <p className="text-base md:text-lg text-[var(--f-fg-muted)] max-w-2xl mt-4 mx-auto font-normal">
          Delivering high-converting digital infrastructure for ambitious business owners and modern enterprises across Dubai, Abu Dhabi, Mumbai, Doha, and global markets.
        </p>

        {/* Metric pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="px-4 py-2 rounded-xl bg-[var(--f-bg-glass)] border border-[var(--f-border)] backdrop-blur-sm">
            <span className="text-[var(--f-gold)] font-bold text-sm">🇦🇪 UAE</span>{" "}
            <span className="text-[var(--f-fg-muted)] text-xs">(Dubai · Abu Dhabi)</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[var(--f-bg-glass)] border border-[var(--f-border)] backdrop-blur-sm">
            <span className="text-[var(--f-teal)] font-bold text-sm">🇸🇦 KSA</span>{" "}
            <span className="text-[var(--f-fg-muted)] text-xs">(Riyadh · Jeddah)</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[var(--f-bg-glass)] border border-[var(--f-border)] backdrop-blur-sm">
            <span className="text-[var(--f-blue)] font-bold text-sm">🇶🇦 Qatar</span>{" "}
            <span className="text-[var(--f-fg-muted)] text-xs">(Doha)</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[var(--f-bg-glass)] border border-[var(--f-border)] backdrop-blur-sm">
            <span className="text-[var(--f-fg)] font-bold text-sm">🇮🇳 India</span>{" "}
            <span className="text-[var(--f-fg-muted)] text-xs">(Delivery Hub)</span>
          </div>
        </div>
      </div>

      {/* 3D Globe Canvas Container */}
      <div className="relative w-full h-[400px] md:h-[520px] max-w-4xl mx-auto mt-6 flex items-center justify-center">
        <World data={sampleArcs} globeConfig={globeConfig} />
        {/* Subtle bottom fade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--f-bg)] via-[var(--f-bg)]/60 to-transparent pointer-events-none" />
      </div>

    </div>
  );
}

export default GlobeDemo;
