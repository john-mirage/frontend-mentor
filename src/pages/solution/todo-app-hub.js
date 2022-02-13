import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/global-style";
import Page from "@components/solution/todo-app-hub/page";
import { useState } from "react";

const primaryColors = {
    brightBlue: 'hsl(220, 98%, 61%)',
    checkBackgroundCyan: 'hsl(192, 100%, 67%)',
    checkBackgroundPink: 'hsl(280, 87%, 65%)',
}

const lightTheme = {
    primary: primaryColors,
    neutral: {
        topAppBar: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 100%)',
        background: 'hsl(0, 0%, 98%)',
        primaryText: 'hsl(235, 19%, 35%)',
        secondaryText: 'hsl(236, 9%, 61%)',
        divider: 'hsl(233, 11%, 84%)',
    }
}

const darkTheme = {
    primary: primaryColors,
    neutral: {
        topAppBar: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(235, 24%, 19%)',
        background: 'hsl(235, 21%, 11%)',
        primaryText: 'hsl(234, 39%, 85%)',
        secondaryText: 'hsl(234, 11%, 52%)',
        divider: 'hsl(237, 14%, 26%)'
    }
}

function TodoAppHub() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <>
            <GlobalStyle fontFamily="Josefin Sans" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" key="font" />
                <title>Frontend Mentor | Todo App Hub</title>
            </Head>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <Page isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            </ThemeProvider>
        </>
    );
}

export default TodoAppHub;