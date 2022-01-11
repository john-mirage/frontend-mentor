import styled from "styled-components";
import Hero from "@components/interactive-pricing/Hero";
import Card from "@components/interactive-pricing/Card";
import pattern from "@assets/interactive-pricing/bg-pattern.svg";

const Container = styled.main`
    min-height: 100vh;
    padding: 8rem 3rem;
    background-image: url(${pattern.src});
    background-repeat: no-repeat;
    background-size: auto 50%;
`;

const StyledHero = styled(Hero)`
    margin-bottom: 5rem;
`;

function Page() {
    return (
        <Container>
            <StyledHero />
            <Card />
        </Container>
    );
}

export default Page;