import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Page from "@components/ordersummary/Page";
import Fab from "@components/Fab";

const theme = {
    paleBlue: "hsl(225, 100%, 94%)",
    brightBlue: "hsl(245, 75%, 52%)",
    veryPaleBlue: "hsl(225, 100%, 98%)",
    desaturatedBlue: "hsl(224, 23%, 55%)",
    darkBlue: "hsl(223, 47%, 23%)",
    primaryText: "#111827",
    secondaryText: "#6b7280",
}

function OrderSummary() {
    return (
        <>
            <GlobalStyle fontFamily="Red Hat Display" />
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Order Summary Component</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Fab />
                <Page />
            </ThemeProvider>
        </>
    );
}

export default OrderSummary;