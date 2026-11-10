"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight, Lock, ExternalLink, ShieldCheck, Globe, Sparkles } from "lucide-react";

interface ProofProject {
  id: string;
  title: string;
  category: string;
  location: string;
  domain: string;
  url: string;
  description: string;
  deliverables: string[];
  gradient: string;
}

const PROJECTS: ProofProject[] = [
  {
    id: "asam",
    title: "ALSAMA ALMONIKA",
    category: "Commercial Architecture & Engineering",
    location: "Dubai, UAE",
    domain: "asamuae.com",
    url: "https://www.asamuae.com/",
    description:
      "High-trust institutional web presence engineered for Dubai due diligence, commercial contracts, and enterprise procurement committees.",
    deliverables: ["Institutional GrowthSite", "UAE Procurement Ready", "Bespoke 3D Experience"],
    gradient: "from-white/10 via-white/5 to-transparent",
  },
  {
    id: "sajith",
    title: "START WITH SAJITH",
    category: "Executive Growth Strategy & Advisory",
    location: "Global",
    domain: "startwithsajith.com",
    url: "https://www.startwithsajith.in/",
    description:
      "Authority platform engineered for high-intent founder advisory, digital marketing leadership, and high-ticket client acquisition.",
    deliverables: ["Personal Brand Infrastructure", "Lead Acquisition Engine", "Conversion Architecture"],
    gradient: "from-white/10 via-white/5 to-transparent",
  },
  {
    id: "mysheltr",
    title: "MYSHELTR",
    category: "PropTech & Direct Property Infrastructure",
    location: "India",
    domain: "mysheltr.in",
    url: "https://www.mysheltr.in/",
    description:
      "Next-generation property ecosystem built to eliminate middlemen, establish instant buyer trust, and automate inbound inquiries.",
    deliverables: ["Direct Property Engine", "Sub-Second Latency", "Autonomous Lead Capture"],
    gradient: "from-white/10 via-white/5 to-transparent",
  },
];

function ProjectCard({ project }: { project: ProofProject }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle, expensive-feeling 3D tilt
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="w-full"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${isHovered ? 12 : 0}px)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="group relative flex flex-col justify-between h-full rounded-3xl glass p-7 sm:p-8 transition-luxury hover:border-white/25 shadow-[0_20px_70px_rgba(0,0,0,0.85)]"
      >
        {/* Dynamic Cursor Spotlight Reflection */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${isHovered ? "50%" : "50%"}, rgba(255,255,255,0.06), transparent 70%)`,
          }}
        />

        {/* 1. Browser Chrome Top Bar */}
        <div>
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A982] shadow-[0_0_8px_#00A982]" />
            </div>

            {/* Mock Address Bar */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#A0A0A0]">
              <Lock className="w-3 h-3 text-[#00A982]" />
              <span>{project.domain}</span>
            </div>

            {/* External Anchor Trigger */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location & Category Pill */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00A982] font-semibold">
              {project.location}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#656565]">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F4F4F4] tracking-tight mb-4 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#A0A0A0] leading-relaxed font-normal mb-6">
            {project.description}
          </p>
        </div>

        {/* 2. Deliverables & Live Action */}
        <div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] mb-6">
            {project.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.03] border border-white/[0.08] text-[#A0A0A0]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Big Live Link Button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-white/[0.03] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-300"
          >
            <span>LAUNCH LIVE SYSTEM</span>
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-black text-white group-hover/btn:text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </a>
        </div>

        {/* Silver Edge Glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/[0.08] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default function ProofSection() {
  return (
    <section id="proof-section" className="relative min-h-screen py-28 px-6 md:px-14 bg-[#030303] overflow-hidden select-none">
      {/* Subtle Ambient Refraction */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-subtle border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A982] shadow-[0_0_6px_#00A982]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-mono text-[#A0A0A0]">
              VERIFIED CLIENT PROOF • PRODUCTION ARCHITECTURE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-[#F4F4F4] tracking-[-0.015em] leading-[1.14] max-w-3xl">
            Proven in Production.<br />
            <span className="italic font-light text-white">Trusted</span> Across Global Markets.
          </h2>

          <p className="mt-5 max-w-xl text-sm sm:text-base text-[#A0A0A0] font-normal leading-relaxed">
            Live digital ecosystems engineered by Hesics — establishing institutional authority and winning high-value contracts before the first meeting begins.
          </p>
        </div>

        {/* 3 Interactive Project Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Institutional Trust Banner */}
        <div className="mt-20 p-8 rounded-3xl glass border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#00A982]" />
            </div>
            <div>
              <div className="text-base font-serif text-[#F4F4F4] font-normal">
                Want your infrastructure to command this level of trust?
              </div>
              <div className="text-xs font-mono text-[#A0A0A0] mt-0.5">
                Direct consultation with our executive architecture team.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20reviewed%20your%20client%20proof%20and%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#eaeaea] hover:scale-105 active:scale-95 shadow-lg shrink-0"
          >
            <span>Commission a System</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
