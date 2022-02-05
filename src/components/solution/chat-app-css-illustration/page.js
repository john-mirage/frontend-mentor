import styled from "styled-components";
import BasePhone from "@components/solution/chat-app-css-illustration/phone";
import BaseHero from "@components/solution/chat-app-css-illustration/hero";

const Container = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    padding: 9.6rem 2rem;

    @media screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6rem 0;
    }
`;

const Shape = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 55%;

    @media screen and (min-width: 1280px) {
        width: 40%;
        height: 80%;
    }
`;

const LeftShape = styled(Shape)`
    top: 0;
    left: 0;
    transform: translateX(-50%);
    border-bottom-right-radius: 9999px;
    border-bottom-left-radius: 9999px;
    background: ${props => props.theme.color.primary.gradient.magentaToVioletVertical};

    @media screen and (min-width: 1280px) {
        transform: translateX(calc(-100% - 41.6rem));
        left: 50%;
    }
`;

const RightShape = styled(Shape)`
    bottom: 0;
    right: 0;
    transform: translateX(50%);
    border-top-right-radius: 9999px;
    border-top-left-radius: 9999px;
    background-color: ${props => props.theme.color.secondary.lightGrayishViolet};

    @media screen and (min-width: 1280px) {
        transform: translateX(calc(100% + 41.6rem));
        right: 50%;
    }
`;

const Section = styled.div`
    position: relative;
    width: 100%;
    z-index: 20;

    @media screen and (min-width: 1280px) {
        width: 50%;
    }
`;

const Phone = styled(BasePhone)`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6.4rem;

    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 10rem;
    }
`;

const Hero = styled(BaseHero)`
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 1280px) {
        margin-left: 10rem;
    }
`;

function Page() {
    return (
        <Container>
            <LeftShape />
            <RightShape />

            <Section>
                <Phone />
            </Section>

            <Section>
                <Hero />
            </Section>
        </Container>
    );
}

export default Page;