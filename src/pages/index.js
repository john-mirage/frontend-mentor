import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Page from "@components/index/Page";

const theme = {
    color: {
        primary: {
            darkGray: "#0f172a",
            gray: "#1e293b",
            lightGray: "#334155",
            purple: "#c084fc",
            darkPurple: "#581c87",
        },
        neutral: {
            white: "#f8fafc",
            gray: "#94a3b8",
        },
    },
};

function Home() {
    return (
        <>
            <GlobalStyle fontFamily="Inter" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans&family=Inter:wght@400;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Challenges</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default Home;