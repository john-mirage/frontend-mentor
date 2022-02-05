import styled from 'styled-components';
import Card from "@components/card";
import orderSummaryImage from "@docs/order-summary/images/desktop-preview.jpg";
import nftPreviewCardImage from "@docs/nft-preview-card/images/desktop-preview.jpg";
import faqAccordionCardImage from "@docs/faq-accordion-card/images/desktop-preview.jpg";
import chatAppCssIllustrationImage from "@docs/chat-app-css-illustration/images/desktop-preview.jpg";
import fyloDataStorageImage from "@docs/fylo-data-storage/images/desktop-preview.jpg";
import interactivePricingImage from "@docs/interactive-pricing/images/desktop-preview.jpg";
import launchCountdownTimerImage from "@docs/launch-countdown-timer/images/desktop-preview.jpg";
import ecommerceProductPageImage from "@docs/ecommerce-product-page/images/desktop-preview.jpg";
import roomHomepageImage from "@docs/room-homepage/images/desktop-preview.jpg";

const cards = [
    {
        id: 1,
        title: "Order Summary Component",
        description: "A perfect project for newbies who are starting to build confidence with layouts!",
        link: "/solution/order-summary",
        imageSrc: orderSummaryImage.src,
        imageAlt:"Order Summary Component design illustration",
    },
    {
        id: 2,
        title: "NFT Preview Card Component",
        description: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
        link: "/solution/nft-preview-card",
        imageSrc: nftPreviewCardImage.src,
        imageAlt:"NFT Preview Card Component design illustration",
    },
    {
        id: 3,
        title: "FAQ Accordion Card Component",
        description: "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
        link: "/solution/faq-accordion-card",
        imageSrc: faqAccordionCardImage.src,
        imageAlt:"FAQ Accordion Card Component design illustration",
    },
    {
        id: 4,
        title: "Chat App CSS Illustration",
        description: "In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!",
        link: "/solution/chat-app-css-illustration",
        imageSrc: chatAppCssIllustrationImage.src,
        imageAlt:"Chat App CSS design illustration",
    },
    {
        id: 5,
        title: "Fylo data storage Illustration",
        description: "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
        link: "/solution/fylo-data-storage",
        imageSrc: fyloDataStorageImage.src,
        imageAlt:"Fylo data storage design illustration",
    },
    {
        id: 6,
        title: "Interactive Pricing component Illustration",
        description: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
        link: "/solution/interactive-pricing",
        imageSrc: interactivePricingImage.src,
        imageAlt:"Interactive Pricing component illustration",
    },
    {
        id: 7,
        title: "Launch Countdown Timer component Illustration",
        description: "This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!",
        link: "/solution/launch-countdown-timer",
        imageSrc: launchCountdownTimerImage.src,
        imageAlt:"Launch Countdown Timer component Illustration",
    },
    {
        id: 8,
        title: "E-commerce Product Page Illustration",
        description: "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
        link: "/solution/ecommerce-product-page",
        imageSrc: ecommerceProductPageImage.src,
        imageAlt:"E-commerce Product Page Illustration",
    },
    {
        id: 9,
        title: "Room Homepage Illustration",
        description: "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
        link: "/solution/room-homepage",
        imageSrc: roomHomepageImage.src,
        imageAlt:"Room Homepage Illustration",
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