import styled from "styled-components";
import BaseClockIcon from "@assets/solution/nft-preview-card/icon-clock.svg?react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 340px) {
        flex-direction: row;
    }
`;

const ClockIcon = styled(BaseClockIcon)`
    width: 1.7rem;
    height: auto;
    margin-bottom: 0.4rem;
    fill: ${props => props.theme.color.primary.softBlue};

    @media screen and (min-width: 340px) {
        margin-bottom: 0;
        margin-right: 0.8rem;
    }
`;

const TimeLeft = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    color: ${props => props.theme.color.primary.softBlue};
    letter-spacing: 0.02rem;
`;

function Timer() {
    return (
        <Container>
            <ClockIcon />
            <TimeLeft>3 days left</TimeLeft>
        </Container>
    );
}

export default Timer;