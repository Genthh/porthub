import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        customRed: "#E34738",
      },
      maxWidth: {
        "8xl": "92rem",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
} satisfies Config;
