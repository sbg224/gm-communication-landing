import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0f",
          2: "#121218",
          3: "#1a1a24",
          4: "#222230",
        },
        cream: {
          DEFAULT: "#f5f5f0",
          muted: "#6b6b7a",
          dim: "#3d3d47",
        },
        coral: {
          DEFAULT: "#e74c3c",
          light: "#ff6b5b",
          dim: "rgba(231,76,60,0.12)",
          glow: "rgba(231,76,60,0.25)",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
