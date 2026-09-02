import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#040405",
        "bg-surface": "#07080a",
        empire: {
          dark:    "#040405",
          surface: "#07080a",
          accent:  "#0c745d",
          light:   "#149a7c",
          deep:    "#06382d",
          muted:   "#8a9099",
          subtle:  "#444c55",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["Courier New", "Courier", "monospace"],
      },
      fontSize: {
        "empire-xl": ["clamp(3rem,10vw,9rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "chapter":   ["clamp(0.6rem,1.2vw,0.75rem)", { lineHeight: "1", letterSpacing: "0.25em" }],
        "statement": ["clamp(1.1rem,2.5vw,1.75rem)", { lineHeight: "1.4" }],
      },
      backgroundImage: {
        "empire-radial":
          "radial-gradient(ellipse at 50% 0%, rgba(12,116,93,0.15) 0%, transparent 60%)",
        "empire-vignette":
          "radial-gradient(ellipse at center, transparent 40%, rgba(4,4,5,0.95) 100%)",
      },
      animation: {
        "pulse-slow":   "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "glow":         "glow 3s ease-in-out infinite alternate",
        "float":        "float 6s ease-in-out infinite",
        "scan-line":    "scanLine 8s linear infinite",
      },
      keyframes: {
        glow: {
          "0%":   { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "1",   transform: "scale(1.02)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-8px)" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        empire: "0 0 40px rgba(12,116,93,0.15), 0 0 80px rgba(12,116,93,0.06)",
        "empire-sm": "0 0 20px rgba(12,116,93,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
