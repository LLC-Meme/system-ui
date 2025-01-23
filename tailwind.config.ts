import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "surface": "var(--surface)",
        "surface-muted1": "var(--surface-muted1)",
        "surface-muted2": "var(--surface-muted2)",
        "overlay": "var(--overlay)",
        "border": "var(--border)",
        "info": "var(--info)",
        "info-muted": "var(--info-muted)",
        "alert": "var(--alert)",
        "alert-muted": "var(--alert-muted)",
        "success": "var(--success)",
        "success-muted": "var(--success-muted)",
        "warning": "var(--warning)",
        "warning-muted": "var(--warning-muted)",
        "on-status": "var(--on-status)",
        "yellow": "var(--yellow)",
        "yellow-muted": "var(--yellow-muted)",
        "mint": "var(--mint)",
        "mint-muted": "var(--mint-muted)",
        "teal": "var(--teal)",
        "teal-muted": "var(--teal-muted)",
        "cyan": "var(--cyan)",
        "cyan-muted": "var(--cyan-muted)",
        "indigo": "var(--indigo)",
        "indigo-muted": "var(--indigo-muted)",
        "purple": "var(--purple)",
        "purple-muted": "var(--purple-muted)",
        "pink": "var(--pink)",
        "pink-muted": "var(--pink-muted)",
        "brown": "var(--brown)",
        "brown-muted": "var(--brown-muted)",
      },
      fontSize: {
        "sm": "12px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "slide-out-to-right": "slide-out-to-right 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
