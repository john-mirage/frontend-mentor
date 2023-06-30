import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { globalStyle } from "@frontend-mentor/common-styles";

const GlobalStyles = createGlobalStyle`
  ${globalStyle}

  body {
    font-family: ${theme.font.stack};
  }

  .swiper-gallery {
    aspect-ratio: 375/300;
  }

  .swiper-gallery img {
    object-fit: cover;
  }

  @media screen and (min-width: 576px) {
    .swiper-gallery {
      aspect-ratio: 1/1;
    }
  }
`;

export default GlobalStyles;
