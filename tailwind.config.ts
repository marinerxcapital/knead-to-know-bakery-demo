import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#1E1B18", ivory: "#FBF8F2", gold: "#A47B35", beige: "#E9E0D0", muted: "#6C655E" },
      fontFamily: { serif: ["Georgia", "Times New Roman", "serif"], sans: ["Arial", "Helvetica", "sans-serif"] },
      boxShadow: { soft: "0 12px 35px rgba(30,27,24,.07)" }
    }
  },
  plugins: []
};
export default config;
