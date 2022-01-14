import styled from "styled-components";
import Display from "@components/launch-countdown-timer/Display";

const Container = styled.div`
    width: auto;
    height: auto;
`;

const StyledDisplay = styled(Display)`
    width: 16rem;
    height: 16rem;
`;

const Type = styled.h2`
    margin-top: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 1rem;
    color: ${props => props.theme.color.primary.grayishBlue};
`;

function Time(props) {
    return (
        <Container>
            <StyledDisplay />
            <Type>{props.timeType}</Type>
        </Container>
    );
}

export default Time;