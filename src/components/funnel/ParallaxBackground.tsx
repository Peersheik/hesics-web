"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ParallaxBackgroundProps {
  imageSrc?: string;
  overlayOpacity?: number;
}

export default function ParallaxBackground({
  imageSrc = "/mastermind-vault.jpg",
  overlayOpacity = 0.85,
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax transform calculation: moves gently at 0.22x scroll speed
  const parallaxOffset = scrollY * 0.22;
  const subtleScale = 1.05 + Math.min(scrollY * 0.0001, 0.08);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Moving Background Image Layer */}
      <div
        className="absolute -top-[15%] left-0 w-full h-[135%] transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, -${parallaxOffset}px, 0) scale(${subtleScale})`,
        }}
      >
        <Image
          src={imageSrc}
          alt="Atmospheric Mastermind Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.6] contrast-[1.15]"
        />
      </div>

      {/* Cinematic Vignette & Deep Obsidian Gradients */}
      <div
        className="absolute inset-0 bg-[#050608]"
        style={{
          opacity: overlayOpacity,
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(5,6,8,0.72) 0%, rgba(3,4,6,0.92) 65%, #030305 100%)",
        }}
      />

      {/* Tactical Mastermind Scanlines & Ambient Haze */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.06),transparent_50%)]" />

      {/* Subtle Tactical Grid / Blueprint Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric Golden Embers / Dust Motes */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="ember-particle ember-1" />
        <div className="ember-particle ember-2" />
        <div className="ember-particle ember-3" />
        <div className="ember-particle ember-4" />
        <div className="ember-particle ember-5" />
      </div>
    </div>
  );
}
