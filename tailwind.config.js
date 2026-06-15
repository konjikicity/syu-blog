/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#F8F8F8", subtle: "#F0F0F0", muted: "#E4E4E4" },
        fg: { DEFAULT: "#111111", muted: "#555555", subtle: "#888888", inverse: "#F8F8F8" },
        border: { DEFAULT: "#D8D8D8", strong: "#111111" },
        brand: { DEFAULT: "#111111", hover: "#000000", soft: "#F0F0F0" },
        code: { bg: "#111111", fg: "#F0F0F0" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "sans-serif"],
        jp: ["var(--font-noto)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.12)",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
    },
  },
  plugins: [],
};
