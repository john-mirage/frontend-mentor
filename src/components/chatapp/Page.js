import styled from "styled-components";
import Phone from "@components/chatapp/Phone";

const Container = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    padding: 9.6rem 2rem;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`;

const LeftShape = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 200%;
    height: 55%;
    transform: translateX(-75%);
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    background: linear-gradient(to bottom, ${props => props.theme.gradientLightMagenta}, ${props => props.theme.gradientLightViolet});

    @media screen and (min-width: 1280px) {
        width: 20%;
        height: 80%;
        transform: translateX(-10%);
        border-bottom-right-radius: 50% 10%;
        border-bottom-left-radius: 50% 10%;
    }
`;

const RightShape = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 200%;
    height: 55%;
    transform: translateX(75%);
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    background-color: ${props => props.theme.secondaryLightGrayishViolet};
`;

const Section = styled.div`
    z-index: 20;
`;

const Title = styled.h1`
    font-size: 4.4rem;
    font-weight: 500;
    color: ${props => props.theme.textVeryDarkDesaturedViolet};
    margin-bottom: 2.4rem;
`;

const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3rem;
    color: ${props => props.theme.textDarkGrayishViolet};
`;

function Page() {
    return (
        <Container>
            <LeftShape />
            <RightShape />

            <Section>
                <Phone />
            </Section>
            
            <Section>
                <Title>Simple booking</Title>
                <Description>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</Description>
            </Section>
        </Container>
    );
}

export default Page;