import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Page from "@components/index/Page";

const theme = {
    primaryText: "#1e293b",
    secondaryText: "#475569",
    darkBlue: "#1d4ed8",
    blue: "#3b82f6",
    white: "#eff6ff",
    shadow: "#1e3a8a",
    divider: "#e2e8f0",
};

function Home() {
    return (
        <>
            <GlobalStyle fontFamily="Roboto" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&family=Roboto:wght@400;500&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Challenges</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default Home;