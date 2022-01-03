import Image from "next/image";
import styled from "styled-components";
import Crypto from "@components/ntfpreviewcard/Crypto";
import Timer from "@components/ntfpreviewcard/Timer";
import Author from "@components/ntfpreviewcard/Author";
import equilibrium from "@assets/nftpreviewcard/image-equilibrium.jpg";

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

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 0.8rem;
    overflow: hidden;
    margin-bottom: 2rem;
`;

const ImageOverlay = styled.a`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.cyan};
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
            <ImageContainer>
                <Image
                    src={equilibrium}
                    alt="Equilibrium illustration"
                    layout="responsive"
                    priority
                />
            </ImageContainer>
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