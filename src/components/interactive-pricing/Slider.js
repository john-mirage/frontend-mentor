import styled from "styled-components";
import sliderIcon from "@assets/interactive-pricing/icon-slider.svg";

const Container = styled.div`
    width: 100%;
    height: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const EmptyBar = styled.div`
    width: 100%;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};
    overflow: visible;
`;

const ProgressBar = styled.div`
    position: relative;
    width: 50%;
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
    return (
        <Container className={props.className}>
            <EmptyBar>
                <ProgressBar>
                    <Handle />
                </ProgressBar>
            </EmptyBar>
        </Container>
    );
}

export default Slider;