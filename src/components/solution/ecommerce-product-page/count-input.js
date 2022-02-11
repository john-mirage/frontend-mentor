import styled, { css } from "styled-components";
import BaseIconButton from "@components/solution/ecommerce-product-page/icon-button";
import BaseMinusIcon from "@assets/solution/ecommerce-product-page/icon-minus.svg?react";
import BasePlusIcon from "@assets/solution/ecommerce-product-page/icon-plus.svg?react";

const Container = styled.div`
    width: 100%;
    height: 6rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.neutral.lightGrayishBlue};
    padding-left: 0.4rem;
    padding-right: 0.4rem;
`;

const Count = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const IconButton = styled(BaseIconButton)`
    transition-property: opacity background-color;
    transition-duration:  300ms;

    &:hover {
        opacity: 0.6;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Icon = css`
    width: 1.2rem;
    height: auto;
    fill: ${props => props.theme.color.primary.orange};
`;

const MinusIcon = styled(BaseMinusIcon)`${Icon}`;
const PlusIcon = styled(BasePlusIcon)`${Icon}`;

function CountInput({ className, itemsNumber, setItemsNumber }) {

    function handleMinusButton(event) {
        event.preventDefault();
        if (itemsNumber > 0) setItemsNumber(itemsNumber - 1);
    }

    function handlePlusButton(event) {
        event.preventDefault();
        setItemsNumber(itemsNumber + 1);
    }

    return (
        <Container className={className}>
            <IconButton action={handleMinusButton}>
                <MinusIcon />
            </IconButton>
            <Count>{itemsNumber}</Count>
            <IconButton action={handlePlusButton}>
                <PlusIcon />
            </IconButton>
        </Container>
    );
}

export default CountInput;