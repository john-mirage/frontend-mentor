import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Fab from "@components/Fab";
import Page from "@components/faqaccordioncard/Page";

const theme = {
    primaryTextBlue: "hsl(238, 29%, 16%)",
    primaryTextRed: "hsl(14, 88%, 65%)",
    primaryGradientViolet: "hsl(273, 75%, 66%)",
    primaryGradientBlue: "hsl(240, 73%, 65%)",
    neutralTextDarkBlue: "hsl(237, 12%, 33%)",
    neutralTextBlue: "hsl(240, 6%, 50%)",
    neutralDivider: "hsl(240, 5%, 91%)",
}

function FAQAccordionCard() {
    return (
        <>
            <GlobalStyle fontFamily="Kumbh Sans" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | FAQ Accordion Card</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Fab />
                <Page />
            </ThemeProvider>
        </>
    );
}

export default FAQAccordionCard;