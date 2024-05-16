const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Inter: ['"Inter"', "sans-serif"],
      SyoogBold: ['"SyoogBold"', "sans-serif"],
      Gist: ['"gistregular"', "sans-serif"],
      GistBold: ['"gistbold"', "sans-serif"],
      GistThin: ['"gistthin"', "sans-serif"],
      GistMono: ['"gistMono"', "sans-serif"],
    },
    extend: {
      colors: {
        "grid-border-color": "var( --grid-border-color)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },
      cursor: {
        default: "url(@assets/default.svg) , default",
        pointer: "url(@assets/handpointing.svg) , pointer",
        text: "url(@assets/textcursor.svg) , text",
        grabbing: "grabbing",
      },
      screens: {
        xs: {
          raw: "(max-width: 500px)", // Media query for screens up to 479px
        },
      },
      animation: {
        shimmer: "shimmer 8s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
