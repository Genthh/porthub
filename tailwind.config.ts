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
        customColor: "rgba(255, 255, 255, 0.3);",
      },
      height: {
        "100": "700px",
      },
      maxWidth: {
        "8xl": "92rem",
      },
      zIndex: {
        "1000": "1000",
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
