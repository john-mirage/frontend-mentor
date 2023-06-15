const pxToRem = (px: number): string => {
  return `${String(px / 16)}rem`;
};

const theme = {
  color: {
    darkBlue: "#334253",
    grayishBlue: "#67727E",
    veryLightGray: "#F5F6FA",
    lightGray: "#E9EBF0",
    white: "#FFFFFF",
    moderateBlue: "#5357B6",
    lightGrayishBlue: "#C5C6EF",
    softRed: "#ED6368",
    paleRed: "#FFB8BB",
  },
  font: {
    stack:
      '"Rubik", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  screen: {
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  pxToRem,
};

export default theme;
