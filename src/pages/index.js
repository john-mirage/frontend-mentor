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
};

function Home() {
    return (
        <>
            <GlobalStyle fontFamily="Roboto" />
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&family=Roboto:wght@400;500&display=swap" rel="stylesheet" key="font" />
                <link rel="icon" href="./assets/favicon-32x32.png" key="favicon" />
                <title>Frontend Mentor | Home</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default Home;