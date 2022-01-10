import styled from "styled-components";
import Accordion from "@components/faq-accordion-card/Accordion";

const Container = styled.article`
    width: 100%;
    height: auto;
`;

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
    color: ${props => props.theme.neutralTextDarkBlue};

    @media screen and (min-width: 1440px) {
        text-align: start;
    }
`;

const Accordions = styled.div`
    margin-top: 2rem;
`;

function FrequentlyAskedQuestions() {
    return (
        <Container>
            <Title>FAQ</Title>
            <Accordions>
                <Accordion
                    question="How many team members can i invite?"
                    answer="You can invite all the members you want, it's free and unlimited!"
                    inputId="accordion-1"
                />

                <Accordion
                    question="What is the maximum upload file?"
                    answer="No more than 2GB. All files in your account must fit the allotted storage space."
                    inputId="accordion-2"
                />

                <Accordion
                    question="How do i reset my password?"
                    answer="You can reset your password at any time by clicking your avatar and settings / account."
                    inputId="accordion-3"
                />

                <Accordion
                    question="Can i cancel my subscription?"
                    answer="You can cancel your subscription at any time."
                    inputId="accordion-4"
                />

                <Accordion
                    question="Do you provide additional support?"
                    answer="You are available by phone or email."
                    inputId="accordion-5"
                />
            </Accordions>
        </Container>
    );
}

export default FrequentlyAskedQuestions;