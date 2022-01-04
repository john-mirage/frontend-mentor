import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Fab from "@components/Fab";
import Page from "@components/ntfpreviewcard/Page";

const theme = {
    softBlue: "hsl(215, 51%, 70%)",
    cyan: "hsl(178, 100%, 50%)",
    backgroundMain: "hsl(217, 54%, 11%)",
    backgroundCard: "hsl(216, 50%, 16%)",
    backgroundLine: "hsl(215, 32%, 27%)",
    white: "hsl(0, 0%, 100%)"
}

function NFTPreviewCard() {
    return (
        <>
            <GlobalStyle fontFamily="Outfit" />
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | NFT Preview Card</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Fab />
                <Page />
            </ThemeProvider>
        </>
    );
}

export default NFTPreviewCard;