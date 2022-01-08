import styled from "styled-components";
import Illustration from "@components/faq-accordion-card/Illustration";
import Accordion from "@components/faq-accordion-card/Accordion";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    background-color: #fff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    @media screen and (min-width: 748px) {
        width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1340px) {
        display: flex;
        flex-direction: row;
        width: 120rem;
    }
`;

const Body = styled.div`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 6.4rem;

    @media screen and (min-width: 748px) {
        padding-left: 9.6rem;
        padding-right: 9.6rem;
    }

    @media screen and (min-width: 1340px) {
        flex: 1 1 60%;
        padding: 9.6rem 14rem;
    }
`;

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 2.5rem;
    color: ${props => props.theme.neutralTextDarkBlue};

    @media screen and (min-width: 748px) {
        font-size: 4rem;
    }

    @media screen and (min-width: 1340px) {
        text-align: start;
    }
`;

function Dialog() {
    return (
        <Container>
            <Illustration />
            <Body>
                <Title>FAQ</Title>
                <Accordion />
            </Body>
        </Container>
    );
}

export default Dialog;