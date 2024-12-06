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
        customRed: "#F84438",
        customColor: "rgba(255, 255, 255, 0.3);",
        customGrayColor: "#a4a4a4",
        txtGrayColor: "#494949",
      },
      height: {
        "100": "700px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      zIndex: {
        "1000": "1000",
      },
      borderRadius: {
        "2xl": "20px",
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
