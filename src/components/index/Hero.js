import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 2rem;

    @media screen and (min-width: 580px) {
        font-size: 6rem;
    }
`;

const Description = styled.p`
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.gray};

    @media screen and (min-width: 580px) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
        font-size: 2rem;
        line-height: 3.5rem;
    }
`;

function Hero(props) {
    return (
        <Container className={props.className}>
            <Title>Frontend Mentor challenges</Title>
            <Description>All the challenges are made with Next / React and Styled components</Description>
        </Container>
    );
}

export default Hero;