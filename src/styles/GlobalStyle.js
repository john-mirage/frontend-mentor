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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        display: block;
        text-decoration: 0;
        color: inherit;
        cursor: pointer;
    }

    img,
    svg {
        display: block;
    }

    button {
        font-family: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;