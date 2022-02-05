import styled from "styled-components";
import { useState } from 'react';
import BaseTopAppBar from "@components/top-app-bar";
import BaseHero from "@components/hero";
import CardList from "@components/card-list";

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

const Hero = styled(BaseHero)`
    margin-bottom: 10rem;
`;

function Page() {
    const [activeCard, setActiveCard] = useState(false);

    return (
        <Screen id="screen">
            <Container>
                <TopAppBar />
                <Hero />
                <CardList activeCard={activeCard} setActiveCard={setActiveCard} />
            </Container>
        </Screen>
    );
}

export default Page;