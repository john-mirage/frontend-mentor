import styled from "styled-components";
import Display from "@components/launch-countdown-timer/Display";

const Container = styled.div`
    width: 21%;
    height: auto;

    @media screen and (min-width: 576px) {
        width: 11rem;
    }

    @media screen and (min-width: 848px) {
        width: 16rem;
    }
`;

const Unit = styled.h2`
    margin-top: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 2vw;
    font-weight: 700;
    letter-spacing: 0.4vw;
    color: ${props => props.theme.color.primary.grayishBlue};

    @media screen and (min-width: 576px) {
        font-size: 1.2rem;
        letter-spacing: 0.4rem;
    }

    @media screen and (min-width: 848px) {
        margin-top: 3rem;
        font-size: 1.4rem;
        letter-spacing: 0.8rem;
    }
`;

function Time(props) {
    return (
        <Container>
            <Display
                currentValue={props.currentValue}
                nextValue={props.nextValue}
                hasChanged={props.hasChanged}
            />
            <Unit>{props.unit}</Unit>
        </Container>
    );
}

export default Time;