import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/order-summary/page";

const theme = {
    color: {
        primary: {
            paleBlue: "hsl(225, 100%, 94%)",
            brightBlue: "hsl(245, 75%, 52%)",
        },
        neutral: {
            veryPaleBlue: "hsl(225, 100%, 98%)",
            desaturatedBlue: "hsl(224, 23%, 55%)",
            darkBlue: "hsl(223, 47%, 23%)",
            darkGray: "#111827",
            gray: "#6b7280",
        },
    },
}

function OrderSummary() {
    return (
        <>
            <GlobalStyle fontFamily="Red Hat Display" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Order Summary Component</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default OrderSummary;