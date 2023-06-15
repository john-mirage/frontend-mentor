import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { globalMixin } from "./mixins";

const GlobalStyles = createGlobalStyle`
  ${globalMixin}

  body {
    font-family: ${theme.font.stack};
    background-color: ${theme.color.veryLightGray};
  }
`;

export default GlobalStyles;
