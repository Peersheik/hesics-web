"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useState } from "react";
import HQWorld from "./HQWorld";

export default function HQCanvas() {
  const [degraded, setDegraded] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: "#040405",
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 2, 28], fov: 65, near: 0.1, far: 500 }}
        gl={{
          antialias: !degraded,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={degraded ? 1 : [1, 1.5]}
        style={{ background: "#040405" }}
        frameloop="always"
      >
        {/* Adaptive performance scaling */}
        <PerformanceMonitor
          onDecline={() => setDegraded(true)}
          onIncline={() => setDegraded(false)}
        />
        <AdaptiveDpr pixelated />

        <Suspense fallback={null}>
          <HQWorld degraded={degraded} />
        </Suspense>
      </Canvas>
    </div>
  );
}
