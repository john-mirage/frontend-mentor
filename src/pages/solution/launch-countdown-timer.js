import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/launch-countdown-timer/page";

const theme = {
    color: {
        primary: {
            grayishBlue: "hsl(237, 18%, 59%)",
            softRed: "hsl(345, 95%, 68%)",
        },
        neutral: {
            white: "hsl(0, 0%, 100%)",
            darkDesaturatedBlue: "hsl(236, 21%, 26%)",
            darkBlue: "hsl(235, 16%, 14%)",
            veryDarkBlue: "hsl(234, 17%, 12%)",
        },
    },
}

function LaunchCountdownTimer() {
    return (
        <>
            <GlobalStyle fontFamily="Red Hat Text" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Launch Countdown Timer</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default LaunchCountdownTimer;