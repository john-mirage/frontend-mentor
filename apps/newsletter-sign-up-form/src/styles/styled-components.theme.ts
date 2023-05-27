const FONT_ROOT = 16;
const FONT_STACK = [
  "Roboto",
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const theme = {
  color: {
    tomato: "hsl(4, 100%, 67%)",
    darkSlateGrey: "hsl(234, 29%, 20%)",
    charcoalGrey: "hsl(235, 18%, 26%)",
    grey: "hsl(231, 7%, 60%)",
    white: "hsl(0, 0%, 100%)",
    border: "hsla(243, 28%, 13%, 25%)",
  },
  font: {
    root: FONT_ROOT,
    stack: FONT_STACK.join(","),
  },
  screen: {
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  pxToRem: (px: number) => `${String(px / FONT_ROOT)}rem`,
};

export default theme;
