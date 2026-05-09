import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 80px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "grid-dots": "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
