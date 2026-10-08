"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface HighlighterProps {
  children: React.ReactNode;
  action?: "underline" | "highlight" | "circle" | "box";
  color?: string;
  className?: string;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#c9a227",
  className,
}: HighlighterProps) {
  if (action === "underline") {
    return (
      <span
        className={cn(
          "relative inline-block font-semibold transition-all duration-300",
          className
        )}
        style={{
          textDecoration: "underline",
          textDecorationColor: color,
          textDecorationThickness: "3px",
          textUnderlineOffset: "4px",
        }}
      >
        {children}
      </span>
    );
  }

  if (action === "box" || action === "circle") {
    return (
      <span
        className={cn(
          "relative inline-block px-2 py-0.5 rounded-lg border font-semibold transition-all duration-300",
          className
        )}
        style={{
          borderColor: color,
          backgroundColor: `${color}18`,
          color: "inherit",
        }}
      >
        {children}
      </span>
    );
  }

  // Default "highlight" style: marker background brush effect
  return (
    <span
      className={cn(
        "relative inline-block px-1.5 py-0.5 rounded-md font-semibold transition-all duration-300",
        className
      )}
      style={{
        backgroundColor: `${color}25`,
        boxShadow: `0 0 12px ${color}30`,
        borderBottom: `2px solid ${color}`,
        color: "inherit",
      }}
    >
      {children}
    </span>
  );
}

export function HighlighterDemo() {
  return (
    <div className="text-center py-4">
      <p className="leading-relaxed text-lg text-white">
        The{" "}
        <Highlighter action="underline" color="#c9a227">
          Magic UI Highlighter
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="highlight" color="#00c6b0">
          text stand out
        </Highlighter>{" "}
        effortlessly.
      </p>
    </div>
  );
}

export default Highlighter;
