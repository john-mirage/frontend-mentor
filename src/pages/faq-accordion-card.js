import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Fab from "@components/Fab";
import Page from "@components/faq-accordion-card/Page";

const theme = {
    color: {
        primary: {
            veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
            softRed: "hsl(14, 88%, 65%)",
            softViolet: "hsl(273, 75%, 66%)",
            softBlue: "hsl(240, 73%, 65%)",
            gradient: "linear-gradient(to bottom, hsl(273, 75%, 66%), hsl(240, 73%, 65%))"
        },
        neutral: {
            veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
            darkGrayishBlue: "hsl(240, 6%, 50%)",
            lightGrayishBlue: "hsl(240, 5%, 91%)",
        },
    },
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