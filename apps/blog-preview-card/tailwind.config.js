const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      "xs": "432px",
      "hover-device": { "raw": "(hover: hover)" },
    },
    colors: {
      "transparent": "transparent",
      "yellow": "#F4D04E",
      "white": "#FFFFFF",
      "black": "#111111",
      "grey": "#7F7F7F",
    },
    spacing: {
      "0": "0px",
      "1": pxToRem(1),
      "4": pxToRem(4),
      "12": pxToRem(12),
      "14": pxToRem(14),
      "18": pxToRem(18),
      "20": pxToRem(20),
      "21": pxToRem(21),
      "24": pxToRem(24),
      "30": pxToRem(30),
      "32": pxToRem(32),
      "384": pxToRem(384),
    },
    boxShadow: {
      "card": "8px 8px 0px 0px #000",
      "card-hover": "12px 12px 0px 0px #000",
    },
    borderRadius: {
      "image": pxToRem(10),
      "card": pxToRem(20),
      "tag": pxToRem(4),
    },
    fontSize: ({ theme }) => ({
      "tag-sm": [theme("spacing[12]"), {
        lineHeight: theme("spacing[18]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
      "tag-lg": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
      "date-sm": [theme("spacing[12]"), {
        lineHeight: theme("spacing[18]"),
        letterSpacing: "0",
        fontWeight: "500",
      }],
      "date-lg": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "500",
      }],
      "title-sm": [theme("spacing[20]"), {
        lineHeight: theme("spacing[30]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
      "title-lg": [theme("spacing[24]"), {
        lineHeight: theme("spacing[36]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
      "description-sm": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "500",
      }],
      "description-lg": [theme("spacing[16]"), {
        lineHeight: theme("spacing[24]"),
        letterSpacing: "0",
        fontWeight: "500",
      }],
      "author-sm": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
      "author-lg": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "800",
      }],
    }),
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
