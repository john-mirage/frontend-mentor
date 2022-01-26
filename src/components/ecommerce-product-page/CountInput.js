import styled, { useTheme } from "styled-components";
import IconButton from "@components/ecommerce-product-page/IconButton";
import MinusButton from "@assets/ecommerce-product-page/icon-minus.svg?react";
import PlusButton from "@assets/ecommerce-product-page/icon-plus.svg?react";

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

function CountInput(props) {
    const theme = useTheme();

    function handleMinusButton(event) {
        event.preventDefault();
        if (props.itemsNumber > 0) {
            props.setItemsNumber(props.itemsNumber - 1);
        }
    }

    function handlePlusButton(event) {
        event.preventDefault();
        props.setItemsNumber(props.itemsNumber + 1);
    }

    return (
        <Container className={props.className}>
            <IconButton action={handleMinusButton}>
                <MinusButton width="1.2rem" fill={theme.color.primary.orange} />
            </IconButton>
            <Count>{props.itemsNumber}</Count>
            <IconButton action={handlePlusButton}>
                <PlusButton width="1.2rem" fill={theme.color.primary.orange} />
            </IconButton>
        </Container>
    );
}

export default CountInput;