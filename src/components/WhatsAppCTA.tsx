"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function WhatsAppCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "917867999298";
  const message = encodeURIComponent("Hello Hesics, I would like to discuss a project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Quick Status Pill */}
      <div
        className={`hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/10 text-xs font-mono text-[#A0A0A0] shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00A982] shadow-[0_0_6px_#00A982]" />
        <span>+91 7867999298</span>
        <span className="text-white/30">•</span>
        <span className="text-white font-sans font-medium">Chat Directly</span>
      </div>

      {/* Circular Glass WhatsApp Button Matching Reference Image */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hesics on WhatsApp: +91 7867999298"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full glass border border-white/15 text-white shadow-[0_10px_40px_rgba(0,0,0,0.9)] hover:border-white/30 hover:scale-105 transition-luxury active:scale-95"
      >
        {/* Subtle Ambient Refraction */}
        <div className="absolute inset-0 rounded-full bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors" />

        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-5 h-5 fill-white opacity-95 group-hover:opacity-100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.956 1.18-.176.2-.353.226-.654.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.68-1.637-.931-2.242-.245-.589-.494-.509-.68-.519-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.511 1.08 2.912 1.231 3.113c.15.2 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.722.23 1.378.197 1.9.119.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351zM12.04 2C6.505 2 2 6.502 2 12.037c0 1.97.57 3.805 1.554 5.353L2 22l4.743-1.517c1.498.895 3.255 1.411 5.297 1.411 5.535 0 10.04-4.502 10.04-10.037C22.08 6.502 17.575 2 12.04 2zm0 18.286c-1.802 0-3.475-.544-4.87-1.474l-.349-.232-2.812.898.917-2.738-.255-.386c-1.037-1.474-1.61-3.239-1.61-5.117 0-4.542 3.702-8.243 8.249-8.243 4.548 0 8.25 3.701 8.25 8.243 0 4.542-3.702 8.243-8.25 8.243z" />
          </svg>
        </div>

        {/* Tiny Emerald Indicator Dot (Refined Surgical Accent) */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A982] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00A982] border-2 border-[#030303]"></span>
        </span>
      </a>
    </aside>
  );
}
