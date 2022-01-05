import styled from "styled-components";
import Illustration from "@components/faqaccordioncard/Illustration";
import Accordion from "@components/faqaccordioncard/Accordion";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    background-color: #fff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    @media screen and (min-width: 1248px) {
        display: flex;
        flex-direction: row;
        width: 120rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Body = styled.div`
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 4.8rem;

    @media screen and (min-width: 716px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }

    @media screen and (min-width: 1248px) {
        flex: 1 1 60%;
        padding: 8rem 16rem 9.6rem 16rem;
    }
`;

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
    padding-bottom: 2.5rem;
    color: ${props => props.theme.neutralTextDarkBlue};

    @media screen and (min-width: 1248px) {
        text-align: start;
    }
`;

function Dialog() {
    return (
        <Container>
            <Illustration />
            <Body>
                <Title>FAQ</Title>
                <Accordion
                    question="How many team members can i invite?"
                    answer="You can invite all the members you want, it's free and unlimited!"
                    accordionId="accordion-1"
                />
                <Accordion
                    question="What is the maximum upload file?"
                    answer="No more than 2GB. All files in your account must fit the allotted storage space."
                    accordionId="accordion-2"
                />
                <Accordion
                    question="How do i reset my password?"
                    answer="You can reset your password at any time by clicking your avatar and settings / account."
                    accordionId="accordion-3"
                />
                <Accordion
                    question="Can i cancel my subscription?"
                    answer="You can cancel your subscription at any time."
                    accordionId="accordion-4"
                />
                <Accordion
                    question="Do you provide additional support?"
                    answer="You are available by phone or email."
                    accordionId="accordion-5"
                />
            </Body>
        </Container>
    );
}

export default Dialog;