import styled from "styled-components";
import Hero from "@components/ntfpreviewcard/Hero";
import Crypto from "@components/ntfpreviewcard/Crypto";
import Timer from "@components/ntfpreviewcard/Timer";
import Author from "@components/ntfpreviewcard/Author";

const Container = styled.article`
    width: 100%;
    height: auto;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: ${props => props.theme.backgroundCard};

    @media screen and (min-width: 448px) {
        width: 40rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.a`
    display: block;
    font-size: 2.4rem;
    font-weight: 600;
    color: ${props => props.theme.white};
    margin-bottom: 1.6rem;
    letter-spacing: 0.04rem;

    &:hover {
        color: ${props => props.theme.cyan};
    }
`;

const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: ${props => props.theme.softBlue};
    line-height: 2.4rem;
    letter-spacing: 0.02rem;
    margin-bottom: 2rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
    background-color: ${props => props.theme.backgroundLine};
`;

function Card() {
    return (
        <Container>
            <Hero />
            <Title>Equilibrium #3429</Title>
            <Description>Our Equilibrium collection promotes balance and calm.</Description>
            <Row>
                <Crypto />
                <Timer />
            </Row>
            <Divider />
            <Author />
        </Container>
    );
}

export default Card;