import Image from "next/image";
import styled from "styled-components";
import Accordion from "@components/faqaccordioncard/Accordion";
import mobileIllustration from "@assets/faqaccordioncard/illustration-woman-online-mobile.svg";
import mobilePattern from "@assets/faqaccordioncard/bg-pattern-mobile.svg";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

    @media screen and (min-width: 1048px) {
        width: 100rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const MobileIllustration = styled.div`
    position: absolute;
    z-index: 20;
    top: 0;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 75%;
    height: auto;
`;

const MobilePattern = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, -10%);
    width: 75%;
    height: auto;
`;

const Body = styled.div`
    padding: 2.4rem;
    margin-top: 30%;
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
            <MobileIllustration>
                <Image
                    src={mobileIllustration}
                    layout="responsive"
                />
            </MobileIllustration>
            <MobilePattern>
                <Image
                    src={mobilePattern}
                    layout="responsive"
                />
            </MobilePattern>
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
            </Body>
        </Container>
    );
}

export default Dialog;