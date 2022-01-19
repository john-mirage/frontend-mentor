import styled from "styled-components";
import IconButton from "@components/ecommerce-product-page/IconButton";
import minusButton from "@assets/ecommerce-product-page/icon-minus.svg";
import plusButton from "@assets/ecommerce-product-page/icon-plus.svg";

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

    function handleMinusButton(event) {
        event.preventDefault();
        if (props.cartItemsNumber > 0) {
            props.setCartItemsNumber(props.cartItemsNumber - 1);
        }
    }

    function handlePlusButton(event) {
        event.preventDefault();
        props.setCartItemsNumber(props.cartItemsNumber + 1);
    }

    return (
        <Container className={props.className}>
            <IconButton
                icon={minusButton.src}
                iconSize="1.2rem"
                action={handleMinusButton}
            />
            <Count>{props.cartItemsNumber}</Count>
            <IconButton
                icon={plusButton.src}
                iconSize="1.2rem"
                action={handlePlusButton}
            />
        </Container>
    );
}

export default CountInput;