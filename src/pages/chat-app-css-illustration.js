import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Fab from "@components/Fab";
import Page from "@components/chat-app-css-illustration/Page";

const theme = {
    color: {
        primary: {
            text: {
                paleViolet: "hsl(276, 100%, 81%)",
                moderateViolet: "hsl(276, 55%, 52%)",
                desaturatedDarkViolet: "hsl(271, 15%, 43%)",
                grayishBlue: "hsl(206, 6%, 79%)",
                veryDarkDesaturedViolet: "hsl(271, 36%, 24%)",
                darkGrayishViolet: "hsl(270, 7%, 64%)",
            },
            gradient: {
                lightMagenta: "hsl(293, 100%, 63%)",
                lightViolet: "hsl(264, 100%, 61%)",
                magentaToVioletVertical: "linear-gradient(to bottom, hsl(293, 100%, 63%), hsl(264, 100%, 61%))",
                magentaToVioletHorizontal: "linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%))",
                violetToMagenta: "linear-gradient(to right, hsl(264, 100%, 61%), hsl(293, 100%, 63%))",
            },
        },
        secondary: {
            white: "hsl(0, 0%, 100%)",
            lightGrayishViolet: "hsl(270, 20%, 96%)",
            veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
            veryLightMagenta: "hsl(289, 100%, 72%)",
        },
    },
}

function ChatAppCSSIllustration() {
    return (
        <>
            <GlobalStyle fontFamily="Rubik" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Chat App CSS Illustration</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Fab />
                <Page />
            </ThemeProvider>
        </>
    );
}

export default ChatAppCSSIllustration;