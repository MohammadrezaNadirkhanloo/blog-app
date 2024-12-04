import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { light, dark } from "daisyui/src/theming/themes";


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...light,
          primary: "#2FCEF0",
          secondary: "#1E3D53",
          accent: "#162B3D",
          gray: "#131E2A",
          payne: "#395A6D",
        },
        dark: {
          ...dark,
          primary: "#2FCEF0",
          secondary: "#1E3D53",
          accent: "#162B3D",
          gray: "#131E2A",
          payne: "#395A6D",
        },
      },
    ],
  },
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
