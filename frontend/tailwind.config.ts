import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-primary": "#ffffff",
        "background-secondary": "#c5c5c5",
        "login-screen-background": "#231f20",
        "screen-text": "#c1cdf3",
        "screen-background": "#1c3acf",
        "button-cancel": "#f45c5b",
        "button-clear": "#e4e773",
        "button-enter": "#55cb27",
        
        "pin-pad-background": "#80afe4",
        "written-pin-color": "#3a6ca9",
        "to-be-written-pin-color": "#a6cdf9",
      },
      boxShadow: {
        "inner-2xl": "0 5px 5px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        zig: ["Zig", "sans-serif"],
        minecraft: ["Minecraft", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
