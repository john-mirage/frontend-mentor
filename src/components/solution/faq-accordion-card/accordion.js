import styled from "styled-components";
import BaseArrowIcon from "@assets/solution/faq-accordion-card/icon-arrow-down.svg?react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    height: 2rem;
`;

const Question = styled.h2`
    flex: 1 1 0;
    font-size: 1.4rem;
    font-weight: ${props => props.isActive ? 700 : 400};
    color: ${props => props.isActive
        ? props.theme.color.primary.veryDarkDesaturatedBlue
        : props.theme.color.neutral.veryDarkGrayishBlue
    };

    @media screen and (min-width: 1440px) {
        font-size: 1.6rem;
    }
`;

const ArrowIcon = styled(motion(BaseArrowIcon))`
    flex: 0 0 1rem;
    width: 1rem;
    height: auto;
    margin-left: 2rem;
    stroke: ${props => props.theme.color.primary.softRed};
    fill: none;
`;

const Body = styled(motion.div)`
    width: 100%;
    overflow: hidden;
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

    return (
        <Container onClick={() => setIsActive(!isActive)}>
            <Header>
                <Question
                    isActive={isActive}
                >
                    {props.question}
                </Question>
                <ArrowIcon
                    key={`accordion-icon${props.accordionIndex}`}
                    animate={{ rotate: isActive ? "180deg" : 0}}
                    transition={{ type: "tween", duration: 0.3 }}
                />
            </Header>
            <AnimatePresence>
                {isActive && (
                    <Body
                        key={`accordion${props.accordionIndex}`}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    >
                        <Answer>
                            {props.answer}
                        </Answer>
                    </Body>
                )}
            </AnimatePresence>
        </Container>
    );
};

export default Accordion;