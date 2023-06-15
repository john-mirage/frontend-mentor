import { css } from "styled-components";

export const globalMixin = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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

export const srOnlyMixin = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const cardMixin = css`
  padding: ${({ theme }) => theme.pxToRem(16)};
  border-radius: ${({ theme }) => theme.pxToRem(8)};
  background-color: ${({ theme }) => theme.color.white};
`;
