import styled from 'styled-components';
import Card from "@components/index/Card";
import orderSummaryImage from "@assets/index/order-summary.jpg";
import nftPreviewCardImage from "@assets/index/nft-preview-card.jpg";
import faqAccordionCardImage from "@assets/index/faq-accordion-card.jpg";
import chatAppCSSIllustrationImage from "@assets/index/chat-app-css-illustration.jpg";
import fyloDataStorageImage from "@assets/index/fylo-data-storage.jpg";
import interactivePricingImage from "@assets/index/interactive-pricing.jpg";
import launchCountdownTimerImage from "@assets/index/launch-countdown-timer.jpg";
import ecommerceProductPageImage from "@assets/index/ecommerce-product-page.jpg";

const cards = [
    {
        id: 1,
        title: "Order Summary Component",
        description: "A perfect project for newbies who are starting to build confidence with layouts!",
        link: "/order-summary",
        imageSrc: orderSummaryImage.src,
        imageAlt:"Order Summary Component design illustration",
    },
    {
        id: 2,
        title: "NFT Preview Card Component",
        description: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
        link: "/nft-preview-card",
        imageSrc: nftPreviewCardImage.src,
        imageAlt:"NFT Preview Card Component design illustration",
    },
    {
        id: 3,
        title: "FAQ Accordion Card Component",
        description: "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
        link: "/faq-accordion-card",
        imageSrc: faqAccordionCardImage.src,
        imageAlt:"FAQ Accordion Card Component design illustration",
    },
    {
        id: 4,
        title: "Chat App CSS Illustration",
        description: "In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!",
        link: "/chat-app-css-illustration",
        imageSrc: chatAppCSSIllustrationImage.src,
        imageAlt:"Chat App CSS design illustration",
    },
    {
        id: 5,
        title: "Fylo data storage Illustration",
        description: "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
        link: "/fylo-data-storage",
        imageSrc: fyloDataStorageImage.src,
        imageAlt:"Fylo data storage design illustration",
    },
    {
        id: 6,
        title: "Interactive Pricing component Illustration",
        description: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
        link: "/interactive-pricing",
        imageSrc: interactivePricingImage.src,
        imageAlt:"Interactive Pricing component illustration",
    },
    {
        id: 7,
        title: "Launch Countdown Timer component Illustration",
        description: "This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!",
        link: "/launch-countdown-timer",
        imageSrc: launchCountdownTimerImage.src,
        imageAlt:"Launch Countdown Timer component Illustration",
    },
    {
        id: 8,
        title: "E-commerce Product Page Illustration",
        description: "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
        link: "/ecommerce-product-page",
        imageSrc: ecommerceProductPageImage.src,
        imageAlt:"E-commerce Product Page Illustration",
    },
];

const Container = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function CardList({ className, activeCard, setActiveCard }) {
    return (
        <Container className={className}>
            {cards.map(card => (
                <Card
                    key={card.id}
                    isActive={activeCard === card.id}
                    setActiveCard={setActiveCard}
                    {...card}
                />
            ))}
        </Container>
    );
}

export default CardList;