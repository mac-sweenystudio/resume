import type {Config} from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        white: "#F7F7F7",
      },
      fontFamily: {
        coolvetica: ["Coolvetica", "sans-serif"],
        futuraPT: ["Futura PT Light", "sans-serif"],
        futuraPTDemi: ["Futura PT Demi", "sans-serif"],
        neueEinstellung: ["Neue Einstellung Bold", "sans-serif"],
        generalsans: [
          "General Sans",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
