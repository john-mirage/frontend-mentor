import styled from "styled-components";
import Card from "@components/index/Card";
import orderSummary from "@assets/index/order-summary.jpg";
import NFTPreviewCard from "@assets/index/nft-preview-card.jpg";
import FAQAccordionCard from "@assets/index/faq-accordion-card.jpg";
import ChatAppCSSIllustration from "@assets/index/chat-app-css-illustration.jpg";
import FyloDataStorage from "@assets/index/fylo-data-storage.jpg";

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
                link="/order-summary"
                title="Order Summary Component"
                description="A perfect project for newbies who are starting to build confidence with layouts!"
                imageSrc={orderSummary}
                imageAlt="Order Summary Component design illustration"
            />

            <Card
                link="/nft-preview-card"
                title="NFT Preview Card Component"
                description="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
                imageSrc={NFTPreviewCard}
                imageAlt="NFT Preview Card Component design illustration"
            />

            <Card
                link="/faq-accordion-card"
                title="FAQ Accordion Card Component"
                description="In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!"
                imageSrc={FAQAccordionCard}
                imageAlt="FAQ Accordion Card Component design illustration"
            />

            <Card
                link="/chat-app-css-illustration"
                title="Chat App CSS Illustration"
                description="In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!"
                imageSrc={ChatAppCSSIllustration}
                imageAlt="Chat App CSS design illustration"
            />

            <Card
                link="/fylo-data-storage"
                title="Fylo data storage Illustration"
                description="This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!"
                imageSrc={FyloDataStorage}
                imageAlt="Fylo data storage design illustration"
            />

        </Container>
    );
}

export default Page;