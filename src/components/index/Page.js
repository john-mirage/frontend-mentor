import styled from "styled-components";
import Header from "@components/index/Header";
import Hero from "@components/index/Hero";
import Card from "@components/index/Card";
import orderSummary from "@assets/index/order-summary.jpg";
import NFTPreviewCard from "@assets/index/nft-preview-card.jpg";
import FAQAccordionCard from "@assets/index/faq-accordion-card.jpg";
import ChatAppCSSIllustration from "@assets/index/chat-app-css-illustration.jpg";
import FyloDataStorage from "@assets/index/fylo-data-storage.jpg";
import InteractivePricing from "@assets/index/interactive-pricing.jpg";
import LaunchCountdownTimer from "@assets/index/launch-countdown-timer.jpg";

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.color.primary.darkGray};
    padding-bottom: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: 580px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

const Content = styled.div`
    width: 100%;
    height: auto;

    @media screen and (min-width: 1080px) {
        width: 100rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const StyledHeader = styled(Header)`
    margin-bottom: 10rem;
`;

const StyledHero = styled(Hero)`
    margin-bottom: 10rem;
`;

const StyledCard = styled(Card)`
    width: 100%;
    margin-bottom: 4rem;

    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (min-width: 880px) {
        width: 80rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

function Page() {
    return (
        <Container>
            <Content>
                <StyledHeader />
                <StyledHero />

                <StyledCard
                    link="/order-summary"
                    title="Order Summary Component"
                    description="A perfect project for newbies who are starting to build confidence with layouts!"
                    imageSrc={orderSummary}
                    imageAlt="Order Summary Component design illustration"
                />

                <StyledCard
                    link="/nft-preview-card"
                    title="NFT Preview Card Component"
                    description="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
                    imageSrc={NFTPreviewCard}
                    imageAlt="NFT Preview Card Component design illustration"
                />

                <StyledCard
                    link="/faq-accordion-card"
                    title="FAQ Accordion Card Component"
                    description="In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!"
                    imageSrc={FAQAccordionCard}
                    imageAlt="FAQ Accordion Card Component design illustration"
                />

                <StyledCard
                    link="/chat-app-css-illustration"
                    title="Chat App CSS Illustration"
                    description="In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!"
                    imageSrc={ChatAppCSSIllustration}
                    imageAlt="Chat App CSS design illustration"
                />

                <StyledCard
                    link="/fylo-data-storage"
                    title="Fylo data storage Illustration"
                    description="This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!"
                    imageSrc={FyloDataStorage}
                    imageAlt="Fylo data storage design illustration"
                />

                <StyledCard
                    link="/interactive-pricing"
                    title="Interactive Pricing component Illustration"
                    description="In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!"
                    imageSrc={InteractivePricing}
                    imageAlt="Interactive Pricing component illustration"
                />

                <StyledCard
                    link="/launch-countdown-timer"
                    title="Launch Countdown Timer component Illustration"
                    description="This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!"
                    imageSrc={LaunchCountdownTimer}
                    imageAlt="Launch Countdown Timer component Illustration"
                />

            </Content>
        </Container>
    );
}

export default Page;

/*

*/