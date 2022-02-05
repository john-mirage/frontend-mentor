import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/interactive-pricing/page";

const theme = {
    color: {
        primary: {
            softCyan: "hsl(174, 77%, 80%)", //Full slider Bar
            strongCyan: "hsl(174, 86%, 45%)", //Slider Background
            lightGrayishRed: "hsl(14, 92%, 95%)", //Discount Background
            lightRed: "hsl(15, 100%, 70%)", // Discount Text
            paleBlue: "hsl(226, 100%, 87%)", //CTA Text
        },
        neutral: {
            white: "hsl(0, 0%, 100%)", //Pricing Component Background
            veryPaleBlue: "hsl(230, 100%, 99%)", //Main Background
            veryLightGrayishBlue: "hsl(224, 65%, 95%)", //Empty Slider Bar
            lightGrayishBlue: "hsl(223, 50%, 87%)", //Toggle Background
            grayishBlue: "hsl(225, 20%, 60%)", //Text
            darkDesaturatedBlue: "hsl(227, 35%, 25%)", //Text & CTA Background
        },
    },
}

function InteractivePricing() {
    return (
        <>
            <GlobalStyle fontFamily="Manrope" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Interactive Pricing component</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default InteractivePricing;