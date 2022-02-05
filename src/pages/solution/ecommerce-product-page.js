import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/ecommerce-product-page/page";

const theme = {
    color: {
        primary: {
            orange: "hsl(26, 100%, 55%)",
            paleOrange: "hsl(25, 100%, 94%)",
        },
        neutral: {
            veryDarkBlue: "hsl(220, 13%, 13%)",
            darkGrayishBlue: "hsl(219, 9%, 45%)",
            grayishBlue: "hsl(220, 14%, 75%)",
            lightGrayishBlue: "hsl(223, 64%, 98%)",
            white: "hsl(0, 0%, 100%)",
            black: "rgba(0, 0, 0, 0.75)",
        },
    },
}

function EcommerceProductPage() {
    return (
        <>
            <GlobalStyle fontFamily="Kumbh Sans" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | E-commerce Product Page</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Page />
            </ThemeProvider>
        </>
    );
}

export default EcommerceProductPage;