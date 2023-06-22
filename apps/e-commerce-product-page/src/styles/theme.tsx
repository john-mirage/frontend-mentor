const pxToRem = (px: number): string => {
  return `${String(px / 16)}rem`;
};

const theme = {
  color: {
    primary: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
    },
    neutral: {
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "rgba(0, 0, 0, 0.75)",
    },
  },
  font: {
    stack:
      '"Rubik", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  screen: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    cart: "300px",
  },
  pxToRem,
};

export default theme;
