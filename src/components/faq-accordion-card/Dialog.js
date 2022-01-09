import styled from "styled-components";
import Illustration from "@components/faq-accordion-card/Illustration";
import FrequentlyAskedQuestions from "@components/faq-accordion-card/FrequentlyAskedQuestions";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 3rem 5rem 3rem;
    border-radius: 2.4rem;
    background-color: #fff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    @media screen and (min-width: 768px) {
        width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        width: 128rem;
    }
`;

const Body = styled.div`
    margin-top: 2rem;
`;

function Dialog() {
    return (
        <Container>
            <Illustration />
            <Body>
                <FrequentlyAskedQuestions />
            </Body>
        </Container>
    );
}

export default Dialog;