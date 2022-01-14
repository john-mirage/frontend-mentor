import styled from "styled-components";
import Countdown from "@components/launch-countdown-timer/Countdown";
import SocialMedias from "@components/launch-countdown-timer/SocialMedias";
import hillsIllustration from "@assets/launch-countdown-timer/pattern-hills-custom.svg";
import starsIllustration from "@assets/launch-countdown-timer/bg-stars.svg";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 20rem 2rem 10rem 2rem;
    background-color: ${props => props.theme.color.neutral.veryDarkBlue};
    background-image:
        url(${starsIllustration.src}),
        url(${hillsIllustration.src});
    background-repeat: repeat-x;
    background-size: auto calc(100% - 30rem), auto 30rem;
    background-position: top, bottom;
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

const StyledSocialMedias = styled(SocialMedias)`
    margin-top: auto;
`;

function Page() {
    return (
        <Container>
            <Title>we're launching soon</Title>
            <Countdown />
            <StyledSocialMedias />
        </Container>
    );
}

export default Page;