import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/nft-preview-card/page";

const theme = {
    color: {
        primary: {
            softBlue: "hsl(215, 51%, 70%)",
            cyan: "hsl(178, 100%, 50%)",
            transparentCyan: "rgba(0, 255, 247, 0.5)",
        },
        neutral: {
            veryDarkBlue: "hsl(217, 54%, 11%)",
            darkBlue: "hsl(216, 50%, 16%)",
            blue: "hsl(215, 32%, 27%)",
            white: "hsl(0, 0%, 100%)",
        },
    },
}

function NFTPreviewCard() {
    return (
        <>
            <GlobalStyle fontFamily="Outfit" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | NFT Preview Card</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default NFTPreviewCard;