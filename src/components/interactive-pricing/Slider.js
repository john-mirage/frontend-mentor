import styled from "styled-components";
import sliderIcon from "@assets/interactive-pricing/icon-slider.svg";
import { useState } from "react";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 5rem;
`;

const Input = styled.input.attrs(props => {
    return {
        type: "range",
        min: 0,
        max: 100,
        step: 25,
        value: props.sliderValue,
        name: "pricing-slider",
    };
})`
    position: absolute;
    z-index: 20;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
    margin: 0;
    cursor: pointer;
    opacity: 0;
`;

const EmptyBar = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};
    overflow: visible;
`;

const ProgressBar = styled.div`
    position: relative;
    width: ${props => props.sliderValue}%;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: ${props => props.theme.color.primary.softCyan};
`;

const Handle = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.primary.strongCyan};
    background-image: url(${sliderIcon.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3rem auto;
`;

function Slider(props) {
    const [sliderValue, setSliderValue] = useState(50);

    function handleSliderChange(event) {
        setSliderValue(event.target.value);
        switch (event.target.value) {
            case "0":
                props.setPageViews("10k");
                break;
            case "25":
                props.setPageViews("50k");
                break;
            case "50":
                props.setPageViews("100k");
                break;
            case "75":
                props.setPageViews("500k");
                break;
            case "100":
                props.setPageViews("1m");
                break;
        }
    }

    return (
        <Container className={props.className}>
            <Input sliderValue={sliderValue} onChange={handleSliderChange} />
            <EmptyBar>
                <ProgressBar sliderValue={sliderValue}>
                    <Handle />
                </ProgressBar>
            </EmptyBar>
        </Container>
    );
}

export default Slider;