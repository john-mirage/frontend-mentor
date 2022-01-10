import styled from "styled-components";
import arrowIcon from "@assets/faq-accordion-card/icon-arrow-down.svg";

const Container = styled.label`
    display: block;
    width: 100%;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.neutralDivider};
    cursor: pointer;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Input = styled.input.attrs(props => {
    return {
        type: "checkbox",
        id: props.inputId,
        name: props.inputId,
    }
})`
    display: none;
`;

const Question = styled.h2`
    flex: 1 1 0;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.primaryTextBlue};

    ${Input}:checked + ${Header} & {
        font-weight: 700;
        color: ${props => props.theme.neutralTextDarkBlue};
    }

    @media screen and (min-width: 1440px) {
        font-size: 1.6rem;
    }
`;

const ArrowIcon = styled.img`
    flex: 0 0 1rem;
    display: block;
    width: 1rem;
    height: auto;
    margin-left: 2rem;
    transition: transform 0.3s;

    ${Input}:checked + ${Header} & {
        transform: rotate(180deg);
    }
`;

const Answer = styled.p`
    display: none;
    padding-top: 1rem;
    padding-right: 3rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextBlue};

    ${Input}:checked ~ & {
        display: block;
    }

    @media screen and (min-width: 1440px) {
        padding-top: 2rem;
    }
`;

function Accordion(props) {
    return (
        <Container htmlFor={props.inputId}>
            <Input inputId={props.inputId} />
            <Header>
                <Question>{props.question}</Question>
                <ArrowIcon src={arrowIcon.src} />
            </Header>
            <Answer>{props.answer}</Answer>
        </Container>
    );
}

export default Accordion;