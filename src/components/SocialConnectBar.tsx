"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    handle: "+91 7867999298",
    url: "https://wa.me/917867999298?text=Hello%20Hesics%2C%20I%20would%20like%20to%20discuss%20a%20project",
    icon: MessageCircle,
    color: "hover:text-[#25D366] hover:border-[#25D366]/40",
    badge: "Direct Hotline",
  },
  {
    name: "Instagram",
    handle: "@hesics__",
    url: "https://www.instagram.com/hesics__/",
    icon: Instagram,
    color: "hover:text-pink-400 hover:border-pink-500/40",
    badge: "Visual Showcase",
  },
  {
    name: "LinkedIn",
    handle: "Hesics",
    url: "https://www.linkedin.com/company/143572934/",
    icon: Linkedin,
    color: "hover:text-sky-400 hover:border-sky-500/40",
    badge: "Corporate Network",
  },
  {
    name: "YouTube",
    handle: "@peer_sheik_mydeen",
    url: "https://www.youtube.com/@peer_sheik_mydeen",
    icon: Youtube,
    color: "hover:text-rose-400 hover:border-rose-500/40",
    badge: "Founder Channel",
  },
];

export default function SocialConnectBar() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-5 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0c745d]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-slate-300">
            Official Channels & Direct Network
          </span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
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
              className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-[#08090a]/80 border border-white/10 ${item.color} transition-all duration-300 hover:bg-[#0e1115] hover:-translate-y-1 shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-slate-400 group-hover:text-white transition-colors">
                  <span>{item.badge}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm font-bold text-white tracking-wide">
                  {item.name}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 truncate">
                  {item.handle}
                </div>
              </div>

              {/* Bottom Subtle Light Sweep */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0c745d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
