"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";

export default function Scene() {
  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-[#040405]">
      {/* Subtle radial gradient background underlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(12, 116, 93, 0.18) 0%, rgba(4, 4, 5, 0.95) 75%, #040405 100%)"
        }}
      />

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}
