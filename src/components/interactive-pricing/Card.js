import styled from "styled-components";
import Slider from "@components/interactive-pricing/Slider";
import PricePerMonth from "@components/interactive-pricing/PricePerMonth";
import Plan from "@components/interactive-pricing/Plan";
import Feature from "@components/interactive-pricing/Feature";
import CallToAction from "@components/interactive-pricing/CallToAction";

const Container = styled.article`
    width: 100%;
    height: auto;
    padding: 4rem 0;
    text-align: center;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.1);
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const StyledSlider = styled(Slider)`
    margin-bottom: 3rem;
`;

const StyledPricePerMonth = styled(PricePerMonth)`
    margin-bottom: 4rem;
`;

const StyledPlan = styled(Plan)`
    margin-bottom: 5rem;
`;

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};
`;

const StyledFeature = styled(Feature)`
    margin-bottom: 3rem;
`;

function Card() {
    return (
        <Container>
            <Title>100k pageviews</Title>
            <StyledSlider />
            <StyledPricePerMonth />
            <StyledPlan />
            <Divider />
            <Feature feature="Unlimited websites" />
            <Feature feature="100% data ownership" />
            <StyledFeature feature="Email reports" />
            <CallToAction />
        </Container>
    );
}

export default Card;