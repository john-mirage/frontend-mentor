import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { globalStyle } from "@frontend-mentor/common-styles";

const GlobalStyles = createGlobalStyle`
  ${globalStyle}

  body {
    font-family: ${theme.font.stack};
    background-color: ${theme.color.veryLightGray};
  }
`;

export default GlobalStyles;
