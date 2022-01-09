import styled from "styled-components";
import FrequentlyAskedQuestions from "@components/faq-accordion-card/FrequentlyAskedQuestions";
import mobileIllustration from "@assets/faq-accordion-card/illustration-woman-online-mobile.svg";
import mobileShadow from "@assets/faq-accordion-card/bg-pattern-mobile.svg";
import desktopIllustration from "@assets/faq-accordion-card/illustration-woman-online-desktop.svg";
import desktopShadow from "@assets/faq-accordion-card/bg-pattern-desktop.svg";
import desktopBox from "@assets/faq-accordion-card/illustration-box-desktop.svg";

const Container = styled.article`
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 3rem 5rem 3rem;
    border-radius: 2.4rem;
    background-color: #fff;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    @media screen and (min-width: 768px) {
        width: 70rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        width: 128rem;
    }
`;

const Illustration = styled.div`

`;

const Body = styled.div`
    margin-top: 2rem;
`;

const Mobile = styled.div`
    width: 16rem;
    height: 16rem;
    margin-top: -8.8rem;
    margin-left: auto;
    margin-right: auto;
    background-image:
        url(${mobileIllustration.src}),
        url(${mobileShadow.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom 60%, center bottom;

    @media screen and (min-width: 375px) {
        width: 24rem;
        height: 24rem;
        margin-top: -13.2rem;
    }

    @media screen and (min-width: 768px) {
        width: 32rem;
        height: 32rem;
        margin-top: -17.6rem;
    }

    @media screen and (min-width: 1440px) {
        display: none;
    }
`;

const Desktop = styled.div`
    display: none;

    @media screen and (min-width: 1440px) {
        display: block;
    }
`;

const DesktopBox = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -15%);
`;

function Dialog() {
    return (
        <Container>
            <Illustration>
                <Mobile />
                <Desktop>
                    <DesktopBox src={desktopBox.src} />
                </Desktop>
            </Illustration>
            <Body>
                <FrequentlyAskedQuestions />
            </Body>
        </Container>
    );
}

export default Dialog;