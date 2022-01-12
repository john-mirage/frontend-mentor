import styled from "styled-components";
import Slider from "@components/interactive-pricing/Slider";
import PricePerMonth from "@components/interactive-pricing/PricePerMonth";
import Plan from "@components/interactive-pricing/Plan";
import Feature from "@components/interactive-pricing/Feature";
import CallToAction from "@components/interactive-pricing/CallToAction";
import { useState } from "react";

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
        padding: 4rem 6rem;
    }
`;

const PageViews = styled.h2`
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: ${props => props.theme.color.neutral.grayishBlue};
    text-align: center;

    @media screen and (min-width: 860px) {
        width: 50%;
        order: 1;
        text-align: start;
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
        width: calc(100% + 12rem);
        order: 5;
        margin-bottom: 4rem;
        margin-left: -6rem;
        margin-right: -6rem;
    }
`;

const Features = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    text-align: center;

    @media screen and (min-width: 860px) {
        text-align: start;
        margin-bottom: 0;
        width: 50%;
        order: 6;
    }
`;

const StyledSlider = styled(Slider)`
    margin-bottom: 3rem;

    @media screen and (min-width: 860px) {
        order: 3;
        margin-bottom: 2rem;
    }
`;

const StyledPricePerMonth = styled(PricePerMonth)`
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 860px) {
        justify-content: flex-end;
        width: 50%;
        order: 2;
        margin-bottom: 3rem;
    }
`;

const StyledPlan = styled(Plan)`
    margin-bottom: 5rem;

    @media screen and (min-width: 860px) {
        order: 4;
        margin-bottom: 3rem;
    }
`;

const StyledFeature = styled(Feature)`
    justify-content: center;

    @media screen and (min-width: 860px) {
        justify-content: flex-start;
    }
`;

const StyledCallToAction = styled(CallToAction)`
    @media screen and (min-width: 860px) {
        margin-left: auto;
        order: 7;
    }
`;

function Card(props) {
    const priceTable = {
        "10k": 8,
        "50k": 12,
        "100k": 16,
        "500k": 24,
        "1m": 36,
    };

    function getPrice(pageViews, plan) {
        if (plan === "month") {
            return priceTable[pageViews];
        } else if (plan === "year") {
            return (priceTable[pageViews] * 12) * 0.75;
        }
    }

    const [pageViews, setPageViews] = useState("100k");
    const [plan, setPlan] = useState("month");
    const price = getPrice(pageViews, plan);

    return (
        <Container className={props.className}>
            <PageViews>{pageViews} pageviews</PageViews>
            <StyledSlider />
            <StyledPricePerMonth price={price} plan={plan} />
            <StyledPlan setPlan={setPlan} />
            <Divider />
            <Features>
                <StyledFeature feature="Unlimited websites" />
                <StyledFeature feature="100% data ownership" />
                <StyledFeature feature="Email reports" />
            </Features>
            <StyledCallToAction />
        </Container>
    );
}

export default Card;