import Image from "next/image";
import styled from "styled-components";
import Order from "@components/order-summary/Order";
import Button from "@components/order-summary/Button";
import heroIllustration from "@assets/order-summary/illustration-hero.svg";

const Container = styled.article`
    width: 100%;
    height: auto;
    border-radius: 3rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    overflow: hidden;
    background-color: #FFF;

    @media screen and (min-width: 550px) {
        width: 50rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Body = styled.div`
    padding: 3rem;

    @media screen and (min-width: 550px) {
        padding: 4.5rem;
    }
`;

const Row = styled.div`
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0"};
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
    color: ${props => props.theme.primaryText};

    @media screen and (min-width: 550px) {
        font-size: 3rem;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.04rem;
    color: ${props => props.theme.secondaryText};
    line-height: 2.5rem;

    @media screen and (min-width: 384px) {
        padding-left: 10%;
        padding-right: 10%;
    }
`;

function Dialog() {
    return (
        <Container>
            <Image
                src={heroIllustration}
                alt="Women listening and dancing to music with headphone"
                layout="responsive"
            />

            <Body>
                <Row marginBottom="2.5rem">
                    <Title>Order Summary</Title>
                </Row>

                <Row marginBottom="3rem">
                    <Description>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Description>
                </Row>

                <Row marginBottom="3rem">
                    <Order />
                </Row>

                <Row marginBottom="1rem">
                    <Button buttonLabel="Proceed to Payment" buttonType="primary" />
                </Row>

                <Row>
                    <Button buttonLabel="Cancel Order" buttonType="secondary" />
                </Row>
            </Body>

        </Container>
    );
}

export default Dialog;