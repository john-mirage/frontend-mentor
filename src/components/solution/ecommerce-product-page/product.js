import styled from "styled-components";
import { useState } from "react";
import BasePrice from "@components/solution/ecommerce-product-page/price";
import BaseCountInput from "@components/solution/ecommerce-product-page/count-input";
import Button from "@components/solution/ecommerce-product-page/button";
import BaseCartIcon from "@assets/solution/ecommerce-product-page/icon-cart.svg?react";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Company = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.color.primary.orange};
    margin-bottom: 1rem;
`;

const Name = styled.h1`
    font-size: 2.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
    margin-bottom: 1.6rem;

    @media screen and (min-width: 1200px) {
        font-size: 4.8rem;
    }
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};
    margin-bottom: 2.4rem;
`;

const Price = styled(BasePrice)`
    margin-bottom: 2rem;
`;

const Form = styled.div`
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`;

const CountInput = styled(BaseCountInput)`
    margin-bottom: 1.6rem;

    @media screen and (min-width: 1200px) {
        flex: 1 1 35%;
        margin-bottom: 0;
        margin-right: 2rem;
    }
`;

const CartButton = styled(Button)`
    @media screen and (min-width: 1200px) {
        flex: 1 1 65%;
    }
`;

const CartIcon = styled(BaseCartIcon)`
    margin-right: 1.6rem;
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.white};
`;

function Product({ className, cartItemsNumber, setCartIsOpen, setCartItemsNumber }) {
    const [itemsNumber, setItemsNumber] = useState(0);

    function handleCartUpdate(event) {
        event.preventDefault();
        setCartItemsNumber(cartItemsNumber + itemsNumber);
        setCartIsOpen(true);
    }

    return (
        <Container className={className}>
            <Company>sneaker company</Company>
            <Name>Fall Limited Edition Sneakers</Name>
            <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Description>
            <Price />
            <Form>
                <CountInput
                    itemsNumber={itemsNumber}
                    setItemsNumber={setItemsNumber}
                />
                <CartButton
                    action={handleCartUpdate}
                    label="Add to cart"
                >
                    <CartIcon />
                </CartButton>
            </Form>
        </Container>
    );
}

export default Product;