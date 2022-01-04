import Image from "next/image";
import styled from "styled-components";
import arrowIcon from "@assets/faqaccordioncard/icon-arrow-down.svg";

const Container = styled.label`
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
    padding-top: 1.6rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Question = styled.h2`
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextDarkBlue};
    margin-right: 1.6rem;
`;

const Answer = styled.p`
    display: none;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextBlue};
    margin-top: 1.6rem;
    margin-right: 1.6rem;
`;

const Trigger = styled.input`
    display: none;

    &:checked ~ .cd-Accordion__row .cd-Accordion__question {
        font-weight: 600;
        color: ${props => props.theme.neutralTextDarkBlue};
    }

    &:checked ~ .cd-Accordion__row .cd-Accordion__icon {
        transform: rotate(180deg);
    }

    &:checked ~ .cd-Accordion__answer {
        display: block;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-top: 1.6rem;
    background-color: ${props => props.theme.neutralDivider};
`;

function Accordion(props) {
    return (
        <Container htmlFor={props.accordionId}>
            <Trigger type="checkbox" id={props.accordionId} name={props.accordionId} />
            <Row className="cd-Accordion__row">
                <Question className="cd-Accordion__question">{props.question}</Question>
                <Image
                    className="cd-Accordion__icon"
                    src={arrowIcon}
                    alt="Down arrow icon"
                    width="10"
                    height="7"
                />
            </Row>
            <Answer className="cd-Accordion__answer">{props.answer}</Answer>
            <Divider />
        </Container>
    );
}

export default Accordion;