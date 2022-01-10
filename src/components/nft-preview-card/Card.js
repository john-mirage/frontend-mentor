import styled from "styled-components";
import Hero from "@components/nft-preview-card/Hero";
import Crypto from "@components/nft-preview-card/Crypto";
import Timer from "@components/nft-preview-card/Timer";
import Author from "@components/nft-preview-card/Author";

const Container = styled.article`
    width: 100%;
    height: auto;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: ${props => props.theme.color.neutral.darkBlue};

    @media screen and (min-width: 448px) {
        width: 40rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Title = styled.a`
    font-size: 2.4rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.white};
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    letter-spacing: 0.04rem;
    transition-property: color;
    transition-duration: 300ms;

    &:hover {
        color: ${props => props.theme.color.primary.cyan};
    }
`;

const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: ${props => props.theme.color.primary.softBlue};
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
    background-color: ${props => props.theme.color.neutral.blue};
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