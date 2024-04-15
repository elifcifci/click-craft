import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        s: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
      colors: {
        black: { lighter: "#6c6b69", default: "#3b3a37", darker: "#0a0905" },
        gray: { lighter: "#ffffff", default: "#cececd", darker: "#9d9d9b" },
        blue: { lighter: "#CDF5FD", default: "#75C2F6", darker: "#1D5D9B" },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in forwards",
        "fade-in-left": "fade-in-left 0.5s ease-in forwards",
        "fade-in-right": "fade-in-right 0.5s ease-in forwards",
        "fade-out": "fade-out 0.5s ease-in forwards",
        "rotate-up": "rotate-up 0.3s ease-in forwards",
        "rotate-origin": "rotate-origin 0.3s ease-in forwards",
        "increase-height": "increase-height 0.5s ease-in forwards",
        "decrease-height": "decrease-height 0.5s ease-in forwards",
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
        "fade-in-left": {
          from: {
            opacity: "0",
            visibility: "hidden",
            left: "-300px",
          },
          to: {
            opacity: "1",
            visibility: "visible",
            left: "0",
          },
        },
        "fade-in-right": {
          from: {
            opacity: "0",
            visibility: "hidden",
            right: "-300px",
          },
          to: {
            opacity: "1",
            visibility: "visible",
            right: "0",
          },
        },
        "fade-out": {
          from: {
            opacity: "1",
            visibility: "visible",
          },
          to: {
            opacity: "0",
            visibility: "hidden",
          },
        },
        "rotate-up": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-180deg)",
          },
        },
        "rotate-origin": {
          from: {
            transform: "rotate(-180deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        "increase-height": {
          from: {
            "max-height": "0",
            overflow: "hidden",
          },
          to: {
            "max-height": "300px",
          },
        },
        "decrease-height": {
          from: {
            "max-height": "300px",
          },
          to: {
            "max-height": "0",
            overflow: "hidden",
          },
        },
      },
      backgroundImage: {
        welcome: "url('/assets/welcome.jpg')",
        beCreative: "url('/assets/be-creative.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
