import Image from "next/image";
import React from "react";
import styled from "styled-components";
import arrowIcon from "@assets/faqaccordioncard/icon-arrow-down.svg";

const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 40rem;

    @media screen and (min-width: 378px) {
        height: 36rem;
    }
`;

const Input = styled.input.attrs(props => {
    return {
        type: "radio",
        id: props.inputId,
        name: "accordion-selector",
    }
})`
    display: none;
`;

const Item = styled.label.attrs(props => {
    return {
        htmlFor: props.inputId
    };
})`
    flex: 0 0 5.8rem;
    overflow: hidden;
    display: block;
    width: 100%;
    height: auto;
    border-bottom: 0.1rem solid ${props => props.theme.neutralDivider};
    cursor: pointer;
    transition: all 0.3s;

    &:last-child {
        margin-bottom: 0;
    }

    ${Input}:checked + & {
        flex: 1 1 0;
    }

    @media screen and (min-width: 748px) {
        flex: 0 0 6rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 5.8rem;

    @media screen and (min-width: 748px) {
        height: 6rem;
    }
`;

const Question = styled.h2`
    flex: 1 1 0;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.primaryTextBlue};

    @media screen and (min-width: 748px) {
        font-size: 1.6rem;
    }

    ${Input}:checked + ${Item} ${Row} & {
        color: ${props => props.theme.neutralTextDarkBlue};
        font-weight: 700;
    }
`;

const ArrowIcon = styled.div`
    flex: 0 0 1rem;
    display: block;
    width: 1rem;
    height: auto;
    margin-left: 2rem;
    transition: transform 0.3s;

    ${Input}:checked + ${Item} ${Row} & {
        transform: rotate(180deg);
    }
`;

const Answer = styled.p`
    margin-right: 3rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.neutralTextBlue};
`;

function Accordion() {
    return (
        <List>

            <Input inputId="accordion-1" />
            <Item inputId="accordion-1">
                <Row>
                    <Question>How many team members can i invite?</Question>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="Down arrow icon" layout="responsive" />
                    </ArrowIcon>
                </Row>
                <Answer>You can invite all the members you want, it's free and unlimited!</Answer>
            </Item>

            <Input inputId="accordion-2" />
            <Item inputId="accordion-2">
                <Row>
                    <Question>What is the maximum upload file?</Question>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="Down arrow icon" layout="responsive" />
                    </ArrowIcon>
                </Row>
                <Answer>No more than 2GB. All files in your account must fit the allotted storage space.</Answer>
            </Item>

            <Input inputId="accordion-3" />
            <Item inputId="accordion-3">
                <Row>
                    <Question>How do i reset my password?</Question>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="Down arrow icon" layout="responsive" />
                    </ArrowIcon>
                </Row>
                <Answer>You can reset your password at any time by clicking your avatar and settings / account.</Answer>
            </Item>

            <Input inputId="accordion-4" />
            <Item inputId="accordion-4">
                <Row>
                    <Question>Can i cancel my subscription?</Question>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="Down arrow icon" layout="responsive" />
                    </ArrowIcon>
                </Row>
                <Answer>You can cancel your subscription at any time.</Answer>
            </Item>

            <Input inputId="accordion-5" />
            <Item inputId="accordion-5">
                <Row>
                    <Question>Do you provide additional support?</Question>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="Down arrow icon" layout="responsive" />
                    </ArrowIcon>
                </Row>
                <Answer>You are available by phone or email.</Answer>
            </Item>

        </List>
    );
}

export default Accordion;