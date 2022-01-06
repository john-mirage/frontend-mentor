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

const Trigger = styled.input`
    display: none;
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

    ${Trigger}:checked ~ ${Row} & {
        font-weight: 600;
        color: ${props => props.theme.neutralTextDarkBlue};
    }

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

    ${Trigger}:checked ~ ${Row} & {
        transform: rotate(180deg);
    }
`;

const Answer = styled.p`
    display: none;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextBlue};
    padding-top: 2rem;
    padding-right: 3.4rem;

    ${Trigger}:checked ~ & {
        display: block;
    }

    @media screen and (min-width: 716px) {
        font-size: 1.6rem;
    }
`;

function Accordion(props) {
    return (
        <Container htmlFor={props.accordionId}>
            <Trigger type="checkbox" id={props.accordionId} name={props.accordionId} />
            <Row>
                <Question>{props.question}</Question>
                <ArrowIcon>
                    <Image
                        src={arrowIcon}
                        alt="Down arrow icon"
                        layout="responsive"
                    />
                </ArrowIcon>
            </Row>
            <Answer>{props.answer}</Answer>
        </Container>
    );
}

export default Accordion;