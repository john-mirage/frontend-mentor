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
            days: 14,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (
                this.state.seconds === 0 &&
                this.state.minutes === 0 &&
                this.state.hours === 0 &&
                this.state.days === 0
            ) {
                clearInterval(this.timer);
            } else if (
                this.state.seconds === 0 &&
                this.state.minutes === 0 &&
                this.state.hours === 0
            ) {
                this.setState({
                    days: this.state.days - 1,
                    hours: 23,
                    minutes: 59,
                    seconds: 59,
                });
            } else if (
                this.state.seconds === 0 &&
                this.state.minutes === 0
            ) {
                this.setState({
                    hours: this.state.hours - 1,
                    minutes: 59,
                    seconds: 59,
                });
            } else if (
                this.state.seconds === 0
            ) {
                this.setState({ 
                    minutes: this.state.minutes - 1,
                    seconds: 59,
                });
            } else {
                this.setState({ seconds: this.state.seconds - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Container>
                <Time timeValue={this.state.days} timeType="days" />
                <Time timeValue={this.state.hours} timeType="hours" />
                <Time timeValue={this.state.minutes} timeType="minutes" />
                <Time timeValue={this.state.seconds} timeType="seconds" />
            </Container>
        );
    }
}

export default Countdown;