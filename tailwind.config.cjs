/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        base: "#08080c",
        surface: "#101018",
        "surface-2": "#16161f",
        border: "rgba(255,255,255,0.08)",
        muted: "#8b8b9a",
        accent: "#6c6cf5",
        "accent-2": "#22d3ee",
        ink: "#f2f2f5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(108,108,245,0.4), 0 0 40px -10px rgba(108,108,245,0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
