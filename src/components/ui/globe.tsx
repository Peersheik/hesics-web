"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export interface Position {
  lat: number;
  lng: number;
}

export interface ArcData {
  order?: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt?: number;
  color?: string;
}

export interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: Position;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface WorldProps {
  data?: ArcData[];
  globeConfig?: GlobeConfig;
}

export function World({ data = [], globeConfig }: WorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let width = 0;
    let phi = 0;
    let theta = 0.3;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Map sample points from data
    const markers = data.map((arc) => ({
      location: [arc.startLat, arc.startLng] as [number, number],
      size: 0.05,
    }));

    // Add UAE (Dubai), Qatar, Saudi Arabia, India (Kerala, Mumbai), UK, USA highlights
    markers.push(
      { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
      { location: [24.4539, 54.3773], size: 0.08 }, // Abu Dhabi
      { location: [25.2854, 51.531], size: 0.08 },  // Doha
      { location: [24.7136, 46.6753], size: 0.08 }, // Riyadh
      { location: [19.076, 72.8777], size: 0.08 },  // Mumbai
      { location: [9.9312, 76.2673], size: 0.07 },   // Kochi
      { location: [51.5074, -0.1278], size: 0.07 }, // London
      { location: [40.7128, -74.006], size: 0.08 }  // New York
    );

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.03, 0.08, 0.2],
      markerColor: [0.79, 0.63, 0.15], // Gold markers (#c9a227)
      glowColor: [0.0, 0.77, 0.69],    // Teal glow (#00c6b0)
      markers,
    });

    let animationId: number;
    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.003;
      }
      globe.update({
        phi: phi + pointerInteractionMovement.current,
        theta,
        width: width * 2,
        height: width * 2,
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [data, globeConfig]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[600px] max-h-[600px] aspect-square cursor-grab active:cursor-grabbing transition-opacity duration-1000"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
      />
    </div>
  );
}

export default World;
