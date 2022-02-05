import styled from "styled-components";
import BaseHero from "@components/solution/interactive-pricing/hero";
import BaseCard from "@components/solution/interactive-pricing/card";
import pattern from "@assets/solution/interactive-pricing/bg-pattern.svg";

const Container = styled.main`
    min-height: 100vh;
    padding: 8rem 3rem;
    background-image: url(${pattern});
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: top;
`;

const Hero = styled(BaseHero)`
    margin-bottom: 5rem;
`;

const Card = styled(BaseCard)`
    @media screen and (min-width: 560px) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 860px) {
        width: 80rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

function Page() {
    return (
        <Container>
            <Hero />
            <Card />
        </Container>
    );
}

export default Page;