import styled from "styled-components";
import arrowIcon from "@assets/faq-accordion-card/icon-arrow-down.svg";
import React, { useRef, useState } from "react";

const Container = styled.section`
    display: block;
    width: 100%;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${props => props.theme.color.neutral.lightGrayishBlue};
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

const Question = styled.h2`
    flex: 1 1 0;
    font-size: 1.4rem;
    font-weight: ${props => props.isActive ? "700" : "400"};
    color: ${props =>
        props.isActive 
        ? props.theme.color.primary.veryDarkDesaturatedBlue
        : props.theme.color.neutral.veryDarkGrayishBlue
    };

    @media screen and (min-width: 1440px) {
        font-size: 1.6rem;
    }
`;

const Icon = styled.img`
    flex: 0 0 1rem;
    display: block;
    width: 1rem;
    height: auto;
    margin-left: 2rem;
    transition: transform 0.3s;
    ${props => props.isActive && "transform: rotate(180deg);"}
`;

const Body = styled.div`
    height: 0;
    overflow: hidden;
    transition: height 300ms ease-out;
`;

const Answer = styled.p`
    padding-top: 1rem;
    padding-right: 3rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};

    @media screen and (min-width: 1440px) {
        padding-top: 2rem;
    }
`;

function Accordion(props) {
    const [isActive, setIsActive] = useState(false);
    const body = useRef();

    function handleActiveState() {
        if (isActive && body.current.style.height === "auto") {
            collapseBody();
            setIsActive(false);
        } else if (body.current.style.height === "") {
            expandBody();
            setIsActive(true);
        }
    }

    function expandBody() {
        const bodyHeight = body.current.scrollHeight;
        body.current.style.height = `${bodyHeight}px`;
        body.current.addEventListener("transitionend", () => {
            body.current.style.height = "auto";
        }, {once: true});
    }

    function collapseBody() {
        const bodyHeight = body.current.scrollHeight;
        const bodyTransition = body.current.style.transition;
        body.current.style.transition = "";
        requestAnimationFrame(() => {
            body.current.style.height = `${bodyHeight}px`;
            body.current.style.transition = bodyTransition;
            requestAnimationFrame(() => {
                body.current.style.height = "";
            });
        });
    }

    return (
        <Container onClick={handleActiveState}>
            <Header>
                <Question isActive={isActive}>{props.question}</Question>
                <Icon isActive={isActive} src={arrowIcon.src}/>
            </Header>
            <Body isActive={isActive} ref={body}>
                <Answer>{props.answer}</Answer>
            </Body>
        </Container>
    );
}

export default Accordion;