const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "index.html"),
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      "lg": "840px",
      "hover-device": { raw: "(hover: hover)" },
    },
    containers: {
      card: "840px",
    },
    colors: {
      "transparent": "transparent",
      "purple": "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      "white": "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    spacing: {
      0: "0px",
      1: pxToRem(1),
      4: pxToRem(4),
      12: pxToRem(12),
      16: pxToRem(16),
      18: pxToRem(18),
      20: pxToRem(20),
      24: pxToRem(24),
      32: pxToRem(32),
      48: pxToRem(48),
      56: pxToRem(56),
      64: pxToRem(64),
      88: pxToRem(88),
    },
    maxWidth: {
      840: pxToRem(840),
    },
    borderWidth: {
      1: pxToRem(1),
    },
    borderRadius: {
      8: pxToRem(8),
      24: pxToRem(24),
      100: pxToRem(100),
      200: pxToRem(200),
      full: "9999px",
    },
    fontSize: ({ theme }) => ({
      "display-md": [
        theme("spacing[56]"),
        {
          lineHeight: theme("spacing[64]"),
          letterSpacing: "-0.2px",
          fontWeight: "800",
        },
      ],
      "label-md": [
        theme("spacing[12]"),
        {
          lineHeight: theme("spacing[18]"),
          letterSpacing: "1px",
          fontWeight: "600",
        },
      ],
      "body-md": [
        theme("spacing[20]"),
        {
          lineHeight: theme("spacing[32]"),
          letterSpacing: "0.2px",
          fontWeight: "600",
        },
      ],
    }),
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
