"use client";

import { ReactNode } from "react";

interface StorySectionProps {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  description?: string;
  details?: string[];
  align?: "left" | "right" | "center";
  children?: ReactNode;
}

export default function StorySection({
  id,
  tag,
  title,
  subtitle,
  description,
  details,
  align = "left",
  children,
}: StorySectionProps) {
  const alignmentClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : align === "right"
      ? "items-end text-right ml-auto"
      : "items-start text-left mr-auto";

  return (
    <section
      id={id}
      data-section-id={id}
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 py-24 pointer-events-none"
    >
      <div className={`max-w-2xl w-full flex flex-col ${alignmentClass} pointer-events-auto`}>
        {tag && (
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-hesics-primary/30 bg-hesics-primary/10 text-hesics-teal font-mono text-xs tracking-widest uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-hesics-teal animate-pulse" />
            {tag}
          </div>
        )}

        {subtitle && (
          <p className="text-xs sm:text-sm font-mono tracking-widest text-hesics-muted uppercase mb-2">
            {subtitle}
          </p>
        )}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          {title}
        </h2>

        {description && (
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-6">
            {description}
          </p>
        )}

        {details && details.length > 0 && (
          <ul className="space-y-3 mt-2 w-full text-sm sm:text-base text-neutral-300 font-normal">
            {details.map((detail, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-hesics-primary/40 hover:bg-hesics-primary/[0.05] transition-all duration-300"
              >
                <span className="text-hesics-teal font-mono text-xs mt-1">▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </section>
  );
}
