import styled from "styled-components";
import Time from "@components/launch-countdown-timer/Time";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 76rem;
    height: auto;
`;

function Countdown() {
    return (
        <Container>
            <Time timeType="days" />
            <Time timeType="hours" />
            <Time timeType="minutes" />
            <Time timeType="seconds" />
        </Container>
    );
}

export default Countdown;