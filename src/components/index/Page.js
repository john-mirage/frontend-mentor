import styled from "styled-components";
import Card from "@components/index/Card";
import orderSummaryIllustration from "@assets/index/ordersummary.jpg";
import nftPreviewCardIllustration from "@assets/index/nftpreviewcard.jpg";
import FAQAccordionCardIllustration from "@assets/index/faqaccordioncard.jpg";
import ChatApp from "@assets/index/chatapp.jpg";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    background: linear-gradient(to right, ${props => props.theme.darkBlue}, ${props => props.theme.blue});
`;

function Page() {
    return (
        <Container>

            <Card
                link="/ordersummary"
                title="Order Summary Component"
                description="A perfect project for newbies who are starting to build confidence with layouts!"
                imageSrc={orderSummaryIllustration}
                imageAlt="Order Summary Component design illustration"
            />

            <Card
                link="/nftpreviewcard"
                title="NFT Preview Card Component"
                description="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
                imageSrc={nftPreviewCardIllustration}
                imageAlt="NFT Preview Card Component design illustration"
            />

            <Card
                link="/faqaccordioncard"
                title="FAQ Accordion Card Component"
                description="In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!"
                imageSrc={FAQAccordionCardIllustration}
                imageAlt="FAQ Accordion Card Component design illustration"
            />

            <Card
                link="/chatapp"
                title="Chat App CSS Illustration"
                description="In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!"
                imageSrc={ChatApp}
                imageAlt="Chat App CSS design illustration"
            />

        </Container>
    );
}

export default Page;