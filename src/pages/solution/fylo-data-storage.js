import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/fylo-data-storage/page";

const theme = {
    color: {
        primary: {
            gradient: "to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%)",
        },
        neutral: {
            paleBlue: "hsl(243, 100%, 93%)",
            grayishBlue: "hsl(229, 7%, 55%)",
            darkBlue: "hsl(228, 56%, 26%)",
            veryDarkBlue: "hsl(229, 57%, 11%)"
        }
    },
}

function FyloDataStorage() {
    return (
        <>
            <GlobalStyle fontFamily="Raleway" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Fylo Data Storage</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default FyloDataStorage;