import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Fab from "@components/Fab";
import Page from "@components/chat-app-css-illustration/Page";

const theme = {
    textPaleViolet: "hsl(276, 100%, 81%)",
    textModerateViolet: "hsl(276, 55%, 52%)",
    textDesaturatedDarkViolet: "hsl(271, 15%, 43%)",
    textGrayishBlue: "hsl(206, 6%, 79%)",
    textVeryDarkDesaturedViolet: "hsl(271, 36%, 24%)",
    textDarkGrayishViolet: "hsl(270, 7%, 64%)",
    gradientLightMagenta: "hsl(293, 100%, 63%)",
    gradientLightViolet: "hsl(264, 100%, 61%)",
    secondaryWhite: "hsl(0, 0%, 100%)",
    secondaryLightGrayishViolet: "hsl(270, 20%, 96%)",
    secondaryVeryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
    secondaryVeryLightMagenta: "hsl(289, 100%, 72%)"
}

function ChatApp() {
    return (
        <>
            <GlobalStyle fontFamily="Rubik" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Chat App</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Fab />
                <Page />
            </ThemeProvider>
        </>
    );
}

export default ChatApp;