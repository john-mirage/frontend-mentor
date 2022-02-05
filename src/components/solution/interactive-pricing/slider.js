import styled from "styled-components";
import sliderIcon from "@assets/solution/interactive-pricing/icon-slider.svg";
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
    -webkit-appearance: none;
    background: transparent;
    position: absolute;
    z-index: 20;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
    margin: 0;
    cursor: pointer;
    opacity: 0;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }

    &::-moz-range-thumb {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        outline: none;
    }
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
    width: ${props => props.sliderValue === "0" ? "2.5rem"
                    : props.sliderValue === "100" ? "calc(100% - 2.5rem)"
                    : `${props.sliderValue}%`};
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: ${props => props.theme.color.primary.softCyan};
    transition: width 100ms;
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
    background-image: url(${sliderIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3rem auto;
    transition: transform 100ms;
`;

const steps = {
    "0": "10k",
    "25": "50k",
    "50": "100k",
    "75": "500k",
    "100": "1m",
}

function Slider(props) {
    const [sliderValue, setSliderValue] = useState(50);

    function handleSliderChange(event) {
        setSliderValue(event.target.value);
        props.setPageViews(steps[event.target.value]);
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