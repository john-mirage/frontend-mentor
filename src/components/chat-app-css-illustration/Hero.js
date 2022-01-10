import styled from "styled-components";

const Container = styled.div`
    max-width: 50rem;
    text-align: center;

    @media screen and (min-width: 1280px) {
        text-align: start;
    }
`;

const Title = styled.h1`
    font-size: 4.4rem;
    font-weight: 500;
    color: ${props => props.theme.color.primary.text.veryDarkDesaturedViolet};
    margin-bottom: 2.4rem;
`;

const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3rem;
    color: ${props => props.theme.color.primary.text.darkGrayishViolet};
`;

function Hero(props) {
    return (
        <Container className={props.className}>
            <Title>Simple booking</Title>
            <Description>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</Description>
        </Container>
    );
}

export default Hero;