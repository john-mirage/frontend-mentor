import Head from "next/head";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import BaseTopAppBar from "@components/top-app-bar";

const theme = {
    color: {
        primary: {
            purple: "#c084fc",
        },
        neutral: {
            veryDarkGray: "#0f172a",
            darkGray: "#1e293b",
            gray: "#94a3b8",
            white: "#ffffff",
        },
    },
    screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    }
};

const Screen = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.color.neutral.veryDarkGray};
    padding-bottom: 10rem;
`;

const Container = styled.main`
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
        width: 54rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        width: 72rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        width: 96rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.xl}) {
        width: 114rem;
    }
`;

const TopAppBar = styled(BaseTopAppBar)`
    margin-bottom: 5rem;
`;

function Layout({ children }) {
    return (
        <>
            <GlobalStyle fontFamily="Inter" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans&family=Inter:wght@400;700&display=swap" rel="stylesheet" key="font" />
            </Head>
            <ThemeProvider theme={theme}>
                <Screen id="screen">
                    <Container>
                        <TopAppBar />
                        {children}
                    </Container>
                </Screen>
            </ThemeProvider>
        </>
    );
}

export default Layout;