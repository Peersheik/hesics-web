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
          black: "#040405",
          dark: "#08090a",
          surface: "#0e1012",
          card: "#121517",
          border: "rgba(12, 116, 93, 0.2)",
          emerald: "#0c745d",
          "emerald-light": "#159c7e",
          "emerald-dark": "#07483a",
          mint: "#a2dbcb",
          white: "#ffffff",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "emerald-gradient-down": "linear-gradient(180deg, #0c745d 0%, #040405 100%)",
        "emerald-gradient-light": "linear-gradient(180deg, #0c745d 0%, #a2dbcb 50%, #ffffff 100%)",
        "radial-emerald": "radial-gradient(circle at 50% 30%, rgba(12, 116, 93, 0.25) 0%, rgba(4, 4, 5, 0.95) 75%)",
      },
      boxShadow: {
        "emerald-glow": "0 0 50px -10px rgba(12, 116, 93, 0.4)",
        "emerald-glow-lg": "0 0 100px -20px rgba(12, 116, 93, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
