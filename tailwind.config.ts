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
        hesics: {
          bg: "#030303",
          secondary: "#080808",
          surface: "rgba(255, 255, 255, 0.025)",
          border: "rgba(255, 255, 255, 0.10)",
          primary: "#F4F4F4",
          subtext: "#A0A0A0",
          muted: "#656565",
          accent: "#00A982",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
