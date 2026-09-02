"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";

export default function C04_Arsenal() {
  const [activeService, setActiveService] = useState(0);
  const service = SERVICES[activeService];

  return (
    <section
      id="chapter-arsenal"
      className="relative w-full"
      aria-label="Chapter 04: The Arsenal — HESICS capabilities"
    >
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <p className="type-codename mb-8 opacity-70 text-center">
            CHAPTER 04 — THE ARSENAL
          </p>

          <div className="max-w-4xl w-full">
            {/* Service selector tabs */}
            <nav
              className="flex gap-1 sm:gap-2 mb-12 flex-wrap justify-center"
              aria-label="Service navigation"
            >
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveService(i)}
                  aria-current={i === activeService ? "true" : undefined}
                  aria-label={`View ${s.name}`}
                  className={`font-mono text-xs tracking-widest px-4 py-2.5 border transition-all duration-300 rounded-sm ${
                    i === activeService
                      ? "border-empire-light/60 bg-empire-light/8 text-white"
                      : "border-white/8 text-empire-muted/60 hover:border-white/20 hover:text-empire-muted"
                  }`}
                  style={{ letterSpacing: "0.15em" }}
                >
                  <span className="text-empire-light/50 mr-2">{s.code}</span>
                  {s.shortName}
                </button>
              ))}
            </nav>

            {/* Active service display */}
            <div className="text-center">
              <h2
                className="font-mono font-black text-white tracking-tight mb-3"
                style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
              >
                {service.name}
              </h2>
              <p className="type-statement text-white/50 mb-12 max-w-lg mx-auto">
                {service.tagline}
              </p>

              {/* Step flow */}
              <div className="flex items-center justify-center gap-0 flex-wrap mb-12">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-2 px-3 py-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-empire-light" />
                      <div className="flex flex-col gap-0.5 text-center">
                        <span className="font-mono text-xs font-bold tracking-[0.15em] text-white/80">
                          {step.label}
                        </span>
                        <span className="font-mono text-xs text-empire-muted/50 hidden sm:block max-w-[100px]">
                          {step.description}
                        </span>
                      </div>
                    </div>
                    {i < service.steps.length - 1 && (
                      <div className="w-4 sm:w-8 h-px bg-empire-light/20 mb-6" />
                    )}
                  </div>
                ))}
              </div>

              {/* Capability indicator */}
              <div className="inline-flex items-center gap-3 border border-empire-light/20 px-6 py-3 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-empire-light animate-pulse-slow" />
                <span className="font-mono text-xs tracking-[0.2em] text-empire-muted/70">
                  CAPABILITY ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
