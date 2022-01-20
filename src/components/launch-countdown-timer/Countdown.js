import styled from "styled-components";
import Time from "@components/launch-countdown-timer/Time";
import React from "react";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 76rem;
    height: auto;
`;

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1209600,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.time === 0) {
                clearInterval(this.timer);
            } else {
                this.setState({ time: this.state.time - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTime(seconds) {
        const times = {
            seconds: seconds
        };
        times.days = Math.floor(times.seconds / 86400);
        times.seconds %= 86400;
        times.hours = Math.floor(times.seconds / 3600);
        times.seconds %= 3600;
        times.minutes = Math.floor(times.seconds / 60);
        times.seconds %= 60;
        return times;
    }

    render() {
        const previousTime = this.getTime(this.state.time - 1);
        const currentTime = this.getTime(this.state.time);

        return (
            <Container>
                <Time
                    hasChanged={previousTime.days !== currentTime.days}
                    previousTime={previousTime.days}
                    currentTime={currentTime.days}
                    timeType="days"
                />
                <Time
                    hasChanged={previousTime.hours !== currentTime.hours}
                    previousTime={previousTime.hours}
                    currentTime={currentTime.hours}
                    timeType="hours"
                />
                <Time
                    hasChanged={previousTime.minutes !== currentTime.minutes}
                    previousTime={previousTime.minutes}
                    currentTime={currentTime.minutes}
                    timeType="minutes"
                />
                <Time
                    hasChanged={previousTime.seconds !== currentTime.seconds}
                    previousTime={previousTime.seconds}
                    currentTime={currentTime.seconds}
                    timeType="seconds"
                />
            </Container>
        );
    }
}

export default Countdown;