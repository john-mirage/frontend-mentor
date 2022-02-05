import styled from "styled-components";
import BaseCountdown from "@components/solution/launch-countdown-timer/countdown";
import BaseSocialMedias from "@components/solution/launch-countdown-timer/social-medias";
import hillsIllustration from "@assets/solution/launch-countdown-timer/pattern-hills-custom.svg";
import starsIllustration from "@assets/solution/launch-countdown-timer/bg-stars.svg";

const Container = styled.main`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.neutral.veryDarkBlue};
    background-image:
        url(${starsIllustration}),
        url(${hillsIllustration});
    background-repeat: repeat-x;
    background-size: auto calc(80%), auto 20%;
    background-position: top, bottom right;

    @media screen and (min-width: 848px) {
        background-position: top, bottom;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 10rem 2rem 10% 2rem;

    @media screen and (min-width: 576px) {
        width: 54rem;
        margin-left: auto;
        margin-right: auto;
        padding: 20rem 2rem 8rem 2rem;
    }

    @media screen and (min-width: 848px) {
        width: 80rem;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1rem;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.color.neutral.white};
    margin-bottom: 10rem;
`;

const Countdown = styled(BaseCountdown)`
    margin-bottom: 8rem;
`;

const SocialMedias = styled(BaseSocialMedias)`
    margin-top: auto;
`;

function Page() {
    return (
        <Container>
            <Content>
                <Title>we're launching soon</Title>
                <Countdown />
                <SocialMedias />
            </Content>
        </Container>
    );
}

export default Page;