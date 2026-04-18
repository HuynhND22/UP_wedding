import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        rose: {
          50: "#fff1f3",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        },
        gold: {
          50: "#fff9db",
          100: "#ffefad",
          200: "#ffe07a",
          300: "#ffd24f",
          400: "#ffc72f",
          500: "#f2b01d",
          600: "#d28a12",
          700: "#a9620b",
          800: "#7f4509",
          900: "#5c3208"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(244,63,94,.25), 0 10px 40px rgba(244,63,94,.18)",
        soft: "0 12px 40px rgba(2,6,23,.25)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(130%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
