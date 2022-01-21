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
            currentTime: 1209600, // 14 days
            currentFormatedTime: this.getFormatedTime(1209600),
            nextTime: 1209599, // 13 days 23 hours 59 minutes 59 seconds
            nextFormatedTime: this.getFormatedTime(1209599),
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.time === 0) {
                clearInterval(this.timer);
            } else {
                const nextTime = this.state.nextTime - 1;
                this.setState({
                    currentTime: this.state.nextTime,
                    currentFormatedTime: this.state.nextFormatedTime,
                    nextTime: nextTime,
                    nextFormatedTime: this.getFormatedTime(nextTime),
                });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getFormatedTime(seconds) {
        const formatedTime = { seconds: seconds };
        formatedTime.days = Math.floor(formatedTime.seconds / 86400);
        formatedTime.seconds %= 86400;
        formatedTime.hours = Math.floor(formatedTime.seconds / 3600);
        formatedTime.seconds %= 3600;
        formatedTime.minutes = Math.floor(formatedTime.seconds / 60);
        formatedTime.seconds %= 60;
        Object.keys(formatedTime).forEach((unit) => {
            formatedTime[unit] = (`0${formatedTime[unit].toString()}`.slice(-2));
        });
        return formatedTime;
    }

    render() {
        return (
            <Container>
                <Time
                    hasChanged={this.state.nextFormatedTime.days !== this.state.currentFormatedTime.days}
                    currentValue={this.state.currentFormatedTime.days}
                    nextValue={this.state.nextFormatedTime.days}
                    unit="days"
                />
                <Time
                    hasChanged={this.state.nextFormatedTime.hours !== this.state.currentFormatedTime.hours}
                    currentValue={this.state.currentFormatedTime.hours}
                    nextValue={this.state.nextFormatedTime.hours}
                    unit="hours"
                />
                <Time
                    hasChanged={this.state.nextFormatedTime.minutes !== this.state.currentFormatedTime.minutes}
                    currentValue={this.state.currentFormatedTime.minutes}
                    nextValue={this.state.nextFormatedTime.minutes}
                    unit="minutes"
                />
                <Time
                    hasChanged={this.state.nextFormatedTime.seconds !== this.state.currentFormatedTime.seconds}
                    currentValue={this.state.currentFormatedTime.seconds}
                    nextValue={this.state.nextFormatedTime.seconds}
                    unit="seconds"
                />
            </Container>
        );
    }
}

export default Countdown;