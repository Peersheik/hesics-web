"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowUpRight, CheckCheck } from "lucide-react";

export default function WhatsAppCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "917867999298";
  const message = encodeURIComponent("Hello Hesics, I would like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Quick Status Pill */}
      <div
        className={`hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#08090a]/95 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]" />
            <span className="text-xs font-bold text-white tracking-wide">
              Chat Directly on WhatsApp
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono mt-0.5">
            <CheckCheck className="w-3.5 h-3.5 text-[#25D366]" />
            <span>+91 7867999298 • Active Now</span>
          </div>
        </div>
      </div>

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hesics on WhatsApp: +91 7867999298"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#08090a] border border-white/15 text-white shadow-[0_10px_40px_rgba(0,0,0,0.9)] hover:scale-105 hover:border-[#25D366]/80 transition-all duration-300"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/25 blur-sm opacity-75 group-hover:opacity-100 animate-pulse" />

        {/* Outer Ring Laser on Hover */}
        <div className="absolute inset-0 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* WhatsApp Brand Icon (Clean SVG for authentic sharpness) */}
        <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)]">
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.956 1.18-.176.2-.353.226-.654.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.68-1.637-.931-2.242-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.231 3.113c.15.2 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.119.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.505 2 2 6.502 2 12.037c0 1.97.57 3.805 1.554 5.353L2 22l4.743-1.517c1.498.895 3.255 1.411 5.297 1.411 5.535 0 10.04-4.502 10.04-10.037C22.08 6.502 17.575 2 12.04 2zm0 18.286c-1.802 0-3.475-.544-4.87-1.474l-.349-.232-2.812.898.917-2.738-.255-.386c-1.037-1.474-1.61-3.239-1.61-5.117 0-4.542 3.702-8.243 8.249-8.243 4.548 0 8.25 3.701 8.25 8.243 0 4.542-3.702 8.243-8.25 8.243z" />
          </svg>
        </div>

        {/* Small Online Indicator Dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#040405]"></span>
        </span>
      </a>
    </aside>
  );
}
