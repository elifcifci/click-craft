import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
      colors: {
        black: { lighter: "#6c6b69", default: "#3b3a37", dark: "#0a0905" },
        gray: { lighter: "#cececd", default: "#9d9d9b" },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
            visibility: "hidden",
          },
          to: {
            opacity: "1",
            visibility: "visible",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;