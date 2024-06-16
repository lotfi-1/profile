/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Green: "#00A8A8",
      Black: "#000",
      DeepNightBlack: "#121212",
      MidNightBlack: "#181818",
      EveningBlack: "#1a1a1a",
      DarkGray: "#282828",
      SlateGray: "#404040",
      LightGray: "#959595",
      SilverGray: "#B3B3B3",
      Snow: "#ffffff",
      gray: {
        300: "#cbd5e1",
        600: "#475569",
      },
    },
    backgroundImage: (theme) => ({
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--tw-gradient-stops))",
    }),
    gradientColorStops: (theme) => ({
      "green-10": "rgba(0, 168, 168, 0.1)", // Custom gradient stop
      "indigo-600-5": "rgba(79, 70, 229, 0.05)", // Custom gradient stop
    }),

    fontFamily: {
      "cascadia-normal": ["cascadia-normal"],
      circular: ["circular-normal", "sans-serif"],
      "circular-light": ["circular-light", "sans-serif"],
      "circular-normal": ["circular-normal", "sans-serif"],
      "circular-medium": ["circular-medium", "sans-serif"],
      "circular-bold": ["circular-bold", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
