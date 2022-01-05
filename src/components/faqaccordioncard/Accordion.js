import Image from "next/image";
import styled from "styled-components";
import arrowIcon from "@assets/faqaccordioncard/icon-arrow-down.svg";

const Container = styled.label`
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.neutralDivider};
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
    color: ${props => props.theme.primaryTextBlue};

    @media screen and (min-width: 716px) {
        font-size: 1.6rem;
    }
`;

const ArrowIcon = styled.div`
    display: block;
    flex: 0 0 1.4rem;
    width: 1.4rem;
    height: auto;
    margin-left: 2rem;
    transition: transform;
    transition-duration: 300ms;
`;

const Answer = styled.p`
    display: none;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextBlue};
    padding-top: 2rem;
    padding-right: 3.4rem;

    @media screen and (min-width: 716px) {
        font-size: 1.6rem;
    }
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

function Accordion(props) {
    return (
        <Container htmlFor={props.accordionId}>
            <Trigger type="checkbox" id={props.accordionId} name={props.accordionId} />
            <Row className="cd-Accordion__row">
                <Question className="cd-Accordion__question">{props.question}</Question>
                <ArrowIcon className="cd-Accordion__icon">
                    <Image
                        src={arrowIcon}
                        alt="Down arrow icon"
                        layout="responsive"
                    />
                </ArrowIcon>
            </Row>
            <Answer className="cd-Accordion__answer">{props.answer}</Answer>
        </Container>
    );
}

export default Accordion;