"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    handle: "+91 7867999298",
    url: "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20discuss%20a%20project",
    icon: MessageCircle,
    badge: "Direct Hotline",
  },
  {
    name: "Instagram",
    handle: "@hesics__",
    url: "https://www.instagram.com/hesics__/",
    icon: Instagram,
    badge: "Visual Showcase",
  },
  {
    name: "LinkedIn",
    handle: "Hesics",
    url: "https://www.linkedin.com/company/143572934/",
    icon: Linkedin,
    badge: "Corporate Network",
  },
  {
    name: "YouTube",
    handle: "@peer_sheik_mydeen",
    url: "https://www.youtube.com/@peer_sheik_mydeen",
    icon: Youtube,
    badge: "Founder Channel",
  },
];

export default function SocialConnectBar() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A982]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#A0A0A0]">
            Official Channels & Direct Network
          </span>
        </div>
        <span className="text-[11px] text-[#656565] font-mono hidden sm:inline">
          CONNECT GLOBALLY
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-6 rounded-2xl glass transition-luxury hover:border-white/25 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A0A0A0] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-[#656565] group-hover:text-[#A0A0A0] transition-colors">
                  <span>{item.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-[#F4F4F4] tracking-wide">
                  {item.name}
                </div>
                <div className="text-xs font-mono text-[#A0A0A0] mt-1 truncate">
                  {item.handle}
                </div>
              </div>

              {/* Bottom Subtle Silver Highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
