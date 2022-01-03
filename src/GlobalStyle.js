import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: ${props => props.fontFamily}, sans-serif;
        margin: 0;
    }
`;

export default GlobalStyle;