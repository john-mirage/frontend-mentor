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
      "hover-device": { raw: "(hover: hover)" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: pxToRem(24),
      },
    },
    colors: {
      "transparent": "transparent",
      "blue": "hsl(227, 92%, 58%)",
      "gun-metal": "hsl(215, 31%, 21%)",
      "dark-electric-blue": "hsl(215, 17%, 45%)",
      "borders": "hsl(200, 24%, 88%)",
      "pure-white": "hsl(0, 0%, 100%)",
      "gradient-from": "hsla(184, 95%, 92%, 0%)",
      "gradient-to": "hsl(216, 95%, 92%)",
    },
    spacing: {
      0: "0px",
      8: pxToRem(8),
      14: pxToRem(14),
      16: pxToRem(16),
      20: pxToRem(20),
      24: pxToRem(24),
      28: pxToRem(28),
      32: pxToRem(32),
      40: pxToRem(40),
      48: pxToRem(48),
      52: pxToRem(52),
      64: pxToRem(64),
      70: pxToRem(70),
      96: pxToRem(96),
      168: pxToRem(168),
      216: pxToRem(216),
    },
    borderWidth: {
      1: pxToRem(1),
    },
    borderRadius: {
      full: "9999px",
      16: pxToRem(16),
      35: pxToRem(35),
    },
    boxShadow: {
      form: "16px 32px 56px 0 hsla(211, 40%, 69%, 25%)",
    },
    fontSize: ({ theme }) => ({
      "heading-xl": [
        theme("spacing[64]"),
        {
          lineHeight: theme("spacing[70]"),
          letterSpacing: "-0.05em",
          fontWeight: "600",
        },
      ],
      "heading-l": [
        theme("spacing[48]"),
        {
          lineHeight: theme("spacing[52]"),
          letterSpacing: "-0.05em",
          fontWeight: "600",
        },
      ],
      "heading-m": [
        theme("spacing[24]"),
        {
          lineHeight: theme("spacing[28]"),
          letterSpacing: "-0.05em",
          fontWeight: "600",
        },
      ],
      "heading-s": [
        theme("spacing[20]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "-0.05em",
          fontWeight: "600",
        },
      ],
      "body-m": [
        theme("spacing[16]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "body-m-bold": [
        theme("spacing[16]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      "body-s": [
        theme("spacing[14]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    }),
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
