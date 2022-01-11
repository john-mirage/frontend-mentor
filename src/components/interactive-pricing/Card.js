import styled from "styled-components";
import Slider from "@components/interactive-pricing/Slider";
import PricePerMonth from "@components/interactive-pricing/PricePerMonth";
import Plan from "@components/interactive-pricing/Plan";
import Feature from "@components/interactive-pricing/Feature";
import CallToAction from "@components/interactive-pricing/CallToAction";

const Container = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 4rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.1);

    @media screen and (min-width: 860px) {
        justify-content: flex-start;
        align-items: center;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: ${props => props.theme.color.neutral.grayishBlue};

    @media screen and (min-width: 860px) {
        width: 50%;
        order: 1;
    }
`;

const StyledSlider = styled(Slider)`
    margin-bottom: 3rem;

    @media screen and (min-width: 860px) {
        order: 3;
    }
`;

const StyledPricePerMonth = styled(PricePerMonth)`
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 860px) {
        justify-content: flex-end;
        width: 50%;
        order: 2;
        margin-left: auto;
    }
`;

const StyledPlan = styled(Plan)`
    margin-bottom: 5rem;

    @media screen and (min-width: 860px) {
        order: 4;
    }
`;

const Divider = styled.div`
    width: calc(100% + 8rem);
    height: 0.1rem;
    margin-left: -4rem;
    margin-right: -4rem;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};

    @media screen and (min-width: 860px) {
        order: 5;
    }
`;

const Features = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    text-align: center;

    @media screen and (min-width: 860px) {
        margin-bottom: 0;
        width: 50%;
        order: 6;
        text-align: start;
    }
`;

const StyledCallToAction = styled(CallToAction)`
    @media screen and (min-width: 860px) {
        margin-left: auto;
        order: 7;
    }
`;

function Card(props) {
    return (
        <Container className={props.className}>
            <Title>100k pageviews</Title>
            <StyledSlider />
            <StyledPricePerMonth />
            <StyledPlan />
            <Divider />
            <Features>
                <Feature feature="Unlimited websites" />
                <Feature feature="100% data ownership" />
                <Feature feature="Email reports" />
            </Features>
            <StyledCallToAction />
        </Container>
    );
}

export default Card;