"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  badge?: string;
}

export default function CyberButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  badge,
}: CyberButtonProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isPrimary = variant === "primary";

  const Content = (
    <div
      ref={buttonRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden select-none transition-all duration-300 ${
        isPrimary
          ? "bg-[#ffffff] text-[#040405] hover:bg-white"
          : "bg-[#08090a] text-[#ffffff] border border-white/15 hover:border-white/40"
      } ${className}`}
      style={{
        clipPath:
          "polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px)",
      }}
    >
      {/* 1. Dynamic Cursor Spotlight */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 blur-xl"
        style={{
          width: "160px",
          height: "160px",
          top: mousePos.y - 80,
          left: mousePos.x - 80,
          background: isPrimary
            ? "radial-gradient(circle, rgba(12, 116, 93, 0.45) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* 2. Precision Corner Notches & Laser Accents */}
      <div className="absolute top-0 left-0 w-3 h-[2px] bg-[#0c745d]" />
      <div className="absolute top-0 left-0 w-[2px] h-3 bg-[#0c745d]" />
      <div className="absolute bottom-0 right-0 w-3 h-[2px] bg-[#0c745d]" />
      <div className="absolute bottom-0 right-0 w-[2px] h-3 bg-[#0c745d]" />

      {/* 3. Sweeping Light Glint on Hover */}
      <div
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none"
      />

      {/* 4. Button Text and Icons */}
      <div className="relative z-10 flex items-center gap-3">
        {badge && (
          <span className="px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold rounded bg-[#0c745d]/20 text-[#0c745d] border border-[#0c745d]/30">
            {badge}
          </span>
        )}
        <span
          className={`text-xs uppercase tracking-[0.2em] font-extrabold transition-transform duration-200 group-hover:tracking-[0.22em] ${
            isPrimary ? "text-[#040405]" : "text-[#ffffff]"
          }`}
        >
          {children}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPrimary
              ? "bg-[#040405] text-[#ffffff] group-hover:bg-[#0c745d] group-hover:text-white"
              : "bg-white/10 text-white group-hover:bg-[#0c745d] group-hover:text-white"
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {Content}
      </a>
    );
  }

  return <button onClick={onClick}>{Content}</button>;
}

