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
        primary: {
          50: "#788CF3",
          100: "#6A80F2",
          200: "#5B73F1",
          300: "#4B65F0",
          400: "#3956EF",
          500: "#2545ED",
          600: "#223FD7",
          700: "#1F39C3",
          800: "#1C34B1",
          900: "#192FA1",
        },
      },
    },
  },
  plugins: [],
};
export default config;
