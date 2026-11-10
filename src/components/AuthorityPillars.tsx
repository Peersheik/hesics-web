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
              className={`group relative p-8 rounded-3xl glass transition-luxury flex flex-col justify-between ${
                isActive
                  ? "border-white/25 -translate-y-1 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                  : "hover:border-white/20"
              }`}
            >
              {/* Top Row */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#F4F4F4] group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#F4F4F4]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A982]" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A0A0A0] font-semibold">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                {/* Pillar Title */}
                <h2 className="font-serif text-2xl font-normal tracking-tight text-[#F4F4F4] mb-3">
                  {pillar.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Action Indicator */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-medium text-[#656565] group-hover:text-[#F4F4F4] transition-colors">
                <span>{pillar.action}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:translate-x-1 group-hover:text-white transition-transform duration-200" />
              </div>

              {/* Delicate Silver Inner Edge Reflection */}
              <div className="absolute inset-0 rounded-3xl border border-white/[0.06] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
