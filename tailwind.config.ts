import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "emerald-primary": "var(--color-emerald-primary)",
        "emerald-dark": "var(--color-emerald-dark)",
        "emerald-light": "var(--color-emerald-light)",
        "gold-accent": "var(--color-gold-accent)",
        "near-black": "var(--color-near-black)",
        "body-text": "var(--color-body-text)",
        "soft-text": "var(--color-soft-text)",
        rule: "var(--color-rule)",
        page: "var(--color-page)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
