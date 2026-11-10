"use client";

import React, { useState } from "react";
import { FileCheck, TrendingUp, Clock, ArrowRight } from "lucide-react";

export default function AuthorityPillars() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: "Wins Tenders",
      tag: "INSTITUTIONAL TRUST",
      description:
        "Engineered so procurement committees and enterprise stakeholders approve your credibility before the first meeting begins.",
      icon: FileCheck,
      action: "Tender Ready",
    },
    {
      id: 2,
      title: "Wins Leads",
      tag: "HIGH-INTENT PIPELINE",
      description:
        "Bypasses low-ticket noise to engage C-Suite decision makers and qualify high-value business relationships.",
      icon: TrendingUp,
      action: "Inbound Engine",
    },
    {
      id: 3,
      title: "Works While You Sleep",
      tag: "24/7 AUTONOMOUS ASSET",
      description:
        "A sovereign digital asset operating continuously across global timezones from Dubai and Riyadh to London and Singapore.",
      icon: Clock,
      action: "Always Active",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activeCard === pillar.id;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActiveCard(pillar.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative p-7 rounded-3xl bg-[#08090a]/90 border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? "border-white/30 bg-[#0d1013] -translate-y-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Top Row */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0c745d]" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                {/* Pillar Title */}
                <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
                  {pillar.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Action Indicator */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-medium text-slate-400 group-hover:text-white transition-colors">
                <span>{pillar.action}</span>
                <ArrowRight className="w-4 h-4 text-[#0c745d] group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              {/* Subtle Ambient Laser Border on Hover */}
              <div className="absolute inset-0 rounded-3xl border border-[#0c745d]/40 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
