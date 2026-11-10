"use client";

import React, { useEffect, useState } from "react";

export default function CinematicBackground() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax offsets
  const parallaxX = (mousePos.x - 0.5) * 20;
  const parallaxY = (mousePos.y - 0.5) * 20;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#030303] select-none">
      {/* 1. Subtle Radial Ambient Lighting following Mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none transition-transform duration-700 ease-out blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,169,130,0.03) 40%, transparent 70%)",
          left: `calc(${mousePos.x * 100}% - 400px)`,
          top: `calc(${mousePos.y * 100}% - 400px)`,
        }}
      />

      {/* 2. Left Curved Frosted Glass Ribbon */}
      <svg
        className="absolute -left-10 top-0 h-full w-[45%] opacity-40 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.4}px, ${parallaxY * 0.4}px, 0)`,
        }}
        viewBox="0 0 500 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leftGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.015" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="leftSilverEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Curving Glass Body */}
        <path
          d="M-50,0 C120,200 280,350 240,650 C200,900 -20,1000 -50,1000 Z"
          fill="url(#leftGlassGrad)"
        />
        {/* Crisp Silver Reflection Rim */}
        <path
          d="M-40,0 C130,200 290,350 250,650 C210,900 -10,1000 -40,1000"
          stroke="url(#leftSilverEdge)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 3. Right Curved Frosted Glass Ribbon */}
      <svg
        className="absolute -right-10 top-0 h-full w-[45%] opacity-40 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${-parallaxX * 0.4}px, ${parallaxY * 0.3}px, 0)`,
        }}
        viewBox="0 0 500 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rightGlassGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.01" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="rightSilverEdge" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path
          d="M550,0 C380,220 220,400 260,700 C300,950 520,1000 550,1000 Z"
          fill="url(#rightGlassGrad)"
        />
        <path
          d="M540,0 C370,220 210,400 250,700 C290,950 510,1000 540,1000"
          stroke="url(#rightSilverEdge)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 4. Floating Chrome Spheres with Specular Highlights */}
      {/* Mid-Left Chrome Sphere */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
        style={{
          left: "14%",
          top: "47%",
          width: "36px",
          height: "36px",
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #a4b0be 22%, #2c333b 55%, #080a0c 100%)",
          border: "1px solid rgba(255,255,255,0.25)",
          transform: `translate3d(${parallaxX * 0.7}px, ${parallaxY * 0.7 + Math.sin(Date.now() / 1500) * 4}px, 0)`,
        }}
      >
        <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white blur-[0.6px] opacity-90" />
      </div>

      {/* Mid-Right Chrome Sphere */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
        style={{
          left: "83%",
          top: "69%",
          width: "44px",
          height: "44px",
          background: "radial-gradient(circle at 32% 28%, #ffffff 0%, #9aa6b3 20%, #21262d 58%, #050608 100%)",
          border: "1px solid rgba(255,255,255,0.22)",
          transform: `translate3d(${-parallaxX * 0.6}px, ${-parallaxY * 0.6}px, 0)`,
        }}
      >
        <div className="absolute top-1.5 left-2 w-2.5 h-1.5 rounded-full bg-white blur-[0.7px] opacity-90" />
      </div>

      {/* Top-Right Small Chrome Sphere */}
      <div
        className="absolute rounded-full transition-transform duration-700 ease-out shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        style={{
          left: "91%",
          top: "16%",
          width: "18px",
          height: "18px",
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #929ea8 25%, #181c20 60%, #030405 100%)",
          border: "1px solid rgba(255,255,255,0.3)",
          transform: `translate3d(${-parallaxX * 0.3}px, ${parallaxY * 0.5}px, 0)`,
        }}
      >
        <div className="absolute top-0.5 left-1 w-1 h-0.5 rounded-full bg-white blur-[0.3px] opacity-95" />
      </div>

      {/* 5. Reflective Convex Curved Horizon at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160vw] max-w-[2600px] h-[340px]"
          viewBox="0 0 2000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Intense Silver Rim Light Gradient */}
            <linearGradient id="silverHorizonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Dark Metallic Reflection Gradient Below Horizon */}
            <linearGradient id="darkChromeFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#14181c" stopOpacity="0.75" />
              <stop offset="25%" stopColor="#08090a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#030303" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Curved Body */}
          <path
            d="M0,400 Q1000,40 2000,400 L2000,400 L0,400 Z"
            fill="url(#darkChromeFill)"
          />

          {/* Luminous Silver Rim Light Stroke */}
          <path
            d="M0,400 Q1000,40 2000,400"
            stroke="url(#silverHorizonGrad)"
            strokeWidth="1.8"
          />

          {/* Inner Highlight Reflection */}
          <path
            d="M100,400 Q1000,46 1900,400"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="3"
            filter="blur(3px)"
          />
        </svg>
      </div>

      {/* Subtle Top Edge Horizon Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

