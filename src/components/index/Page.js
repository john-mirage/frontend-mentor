import styled from "styled-components";
import { useState } from 'react';
import BaseTopAppBar from "@components/index/TopAppBar";
import BaseHero from "@components/index/Hero";
import CardList from "@components/index/CardList";

const Screen = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${props => props.theme.color.neutral.veryDarkGray};
`;

const Container = styled.main`
    max-width: 128rem;
    flex: 1 1 100%;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    padding-bottom: 4.8rem;
`;

const TopAppBar = styled(BaseTopAppBar)`
    margin-bottom: 4rem;
`;

const Hero = styled(BaseHero)`
    margin-bottom: 4rem;
`;

function Page() {
    const [activeCard, setActiveCard] = useState(false);

    return (
        <Screen>
            <Container>
                <TopAppBar />
                <Hero />
                <CardList activeCard={activeCard} setActiveCard={setActiveCard} />
            </Container>
            
        </Screen>
    );
}

export default Page;