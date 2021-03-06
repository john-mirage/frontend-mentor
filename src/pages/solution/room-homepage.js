import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/room-homepage/page";

const theme = {
    color: {
        primary: {
            darkGray: "hsl(0, 0%, 63%)",
            black: "hsl(0, 0%, 0%)",
            white: "hsl(0, 0%, 100%)",
            veryDarkGray: "hsl(0, 0%, 27%)",
        },
    },
    screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    }
}

function RoomHomepage() {
    return (
        <>
            <GlobalStyle fontFamily="Spartan" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Room Homepage</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default RoomHomepage;