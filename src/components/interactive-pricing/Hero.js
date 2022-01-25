import styled from "styled-components";
import circles from "@assets/interactive-pricing/pattern-circles.svg";

const Container = styled.article`
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-image: url(${circles});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};

    @media screen and (min-width: 860px) {
        font-size: 4rem;
    }
`;

const Description = styled.p`
    width: 22rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 3rem;
    color: ${props => props.theme.color.neutral.grayishBlue};

    @media screen and (min-width: 860px) {
        width: 50rem;
        font-size: 1.8rem;
    }
`;

function Hero(props) {
    return (
        <Container className={props.className}>
            <Title>Simple, traffic-based pricing</Title>
            <Description>Sign-up for our 30-day trial. No credit card required.</Description>
        </Container>
    );
}

export default Hero;