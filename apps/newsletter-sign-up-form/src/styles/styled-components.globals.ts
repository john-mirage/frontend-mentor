import { createGlobalStyle, css } from "styled-components";
import theme from "./styled-components.theme";

const GlobalStyle = createGlobalStyle`
  /* roboto-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/roboto-v30-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* roboto-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/roboto-v30-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  ${
    theme.font.root !== 16 &&
    css`
      html {
        font-size: ${String(theme.font.root)}px;
      }
    `
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  ul,
  ol {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizespeed;
    line-height: 1.5;
    font-family: ${theme.font.stack};
    background-color: ${theme.color.background}
  }

  a {
    text-decoration: none;
  }

  img,
  picture,
  svg {
    display: block;
  }

  img,
  picture {
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input,
  textarea,
  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
