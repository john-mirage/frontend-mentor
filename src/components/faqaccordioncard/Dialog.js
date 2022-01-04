import Image from "next/image";
import styled from "styled-components";
import Accordion from "@components/faqaccordioncard/Accordion";
import heroIllustration from "@assets/faqaccordioncard/illustration-woman-online-mobile.svg";

const Container = styled.article`
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

const ImageContainer = styled.div`
    display: block;
    width: 70%;
    height: auto;
    margin-top: -37%;
    margin-bottom: 3.2rem;
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.6rem;
    color: ${props => props.theme.neutralTextDarkBlue};
`;

function Dialog() {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={heroIllustration}
                    alt="Illustration of a woman looking at a screen"
                    layout="responsive"
                />
            </ImageContainer>
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
        </Container>
    );
}

export default Dialog;