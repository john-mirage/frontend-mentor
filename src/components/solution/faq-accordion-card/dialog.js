import styled from "styled-components";
import BaseFrequentlyAskedQuestions from "@components/solution/faq-accordion-card/frequently-asked-questions";
import mobileIllustration from "@assets/solution/faq-accordion-card/illustration-woman-online-mobile.svg";
import mobileShadow from "@assets/solution/faq-accordion-card/bg-pattern-mobile.svg";
import desktopIllustration from "@assets/solution/faq-accordion-card/illustration-woman-online-desktop.svg";
import desktopShadow from "@assets/solution/faq-accordion-card/bg-pattern-desktop.svg";
import desktopBox from "@assets/solution/faq-accordion-card/illustration-box-desktop.svg";

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
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        width: 120rem;
        padding: 0;
    }
`;

const Illustration = styled.div`
    width: 16rem;
    height: 16rem;
    margin-top: -8.8rem;
    margin-left: auto;
    margin-right: auto;
    background-image:
        url(${mobileIllustration}),
        url(${mobileShadow});
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
        position: relative;
        flex: 1 1 40%;
        width: 40%;
        height: auto;
        margin-top: 0;
        background-image:
            url(${desktopIllustration}),
            url(${desktopShadow});
        background-size: 58rem auto, auto 116rem;
        background-position: right top 8rem, right top -36rem;
    }
`;

const BoxIllustration = styled.div`
    display: none;

    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 19.1rem;
        height: 100%;
        transform: translateX(-50%);
        background-image: url(${desktopBox});
        background-repeat: no-repeat;
        background-position: left top 27rem;
    }
`;

const FrequentlyAskedQuestions = styled(BaseFrequentlyAskedQuestions)`
    margin-top: 2rem;

    @media screen and (min-width: 1440px) {
        flex: 1 1 60%;
        width: 60%;
        margin-top: 0;
        padding: 8rem 14rem 12rem 14rem;
    }
`;

function Dialog() {
    return (
        <Container>
            <Illustration>
                <BoxIllustration />
            </Illustration>
            <FrequentlyAskedQuestions />
        </Container>
    );
}

export default Dialog;