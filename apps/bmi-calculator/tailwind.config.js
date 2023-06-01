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
      "md": "768px",
      "lg": "1280px",
      "hover-device": { raw: "(hover: hover)" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: pxToRem(24),
        md: pxToRem(40),
        lg: pxToRem(60),
      },
    },
    colors: {
      "transparent": "transparent",
      "blue": "hsl(227, 92%, 58%)",
      "gun-metal": "hsl(215, 31%, 21%)",
      "dark-electric-blue": "hsl(215, 17%, 45%)",
      "borders": "hsl(200, 24%, 88%)",
      "pure-white": "hsl(0, 0%, 100%)",
      "hero-from": "hsla(184, 95%, 92%, 0%)",
      "hero-to": "hsl(216, 95%, 92%)",
      "form-from": "hsl(227, 92%, 59%)",
      "form-to": "hsl(227, 92%, 67%)",
      "explanation-from": "hsla(216, 95%, 92%, 25%)",
      "explanation-to": "hsla(184, 95%, 92%, 0%)",
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
      36: pxToRem(36),
      40: pxToRem(40),
      44: pxToRem(44),
      48: pxToRem(48),
      52: pxToRem(52),
      56: pxToRem(56),
      60: pxToRem(60),
      64: pxToRem(64),
      70: pxToRem(70),
      72: pxToRem(72),
      96: pxToRem(96),
      116: pxToRem(116),
      120: pxToRem(120),
      128: pxToRem(128),
      156: pxToRem(156),
      168: pxToRem(168),
      216: pxToRem(216),
      564: pxToRem(564),
      640: pxToRem(640),
      737: pxToRem(737),
      960: pxToRem(960),
      image: `calc(100% + ${pxToRem(48)})`,
    },
    maxWidth: {
      none: "none",
      432: pxToRem(432),
      564: pxToRem(564),
    },
    borderWidth: {
      1: pxToRem(1),
    },
    borderRadius: {
      full: "9999px",
      12: pxToRem(12),
      16: pxToRem(16),
      35: pxToRem(35),
      100: pxToRem(100),
    },
    boxShadow: {
      none: "0 0 #0000;",
      form: "16px 32px 56px 0 hsla(211, 40%, 69%, 25%)",
      radio: "0 0 1px 1px hsl(200, 24%, 88%)",
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
      "heading-l-sm": [
        theme("spacing[32]"),
        {
          lineHeight: theme("spacing[36]"),
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
      "body-s-bold": [
        theme("spacing[14]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
    }),
    extend: {
      backgroundPosition: {
        "curved-line-left": "top 0 right 60px",
        "curved-line-right": "top 250px left 160px",
      },
      transitionProperty: {
        radio: "background-color, box-shadow",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
