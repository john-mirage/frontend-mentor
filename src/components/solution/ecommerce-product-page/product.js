import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BasePrice from "@components/solution/ecommerce-product-page/price";
import BaseCountInput from "@components/solution/ecommerce-product-page/count-input";
import Button from "@components/solution/ecommerce-product-page/button";
import BaseCartIcon from "@assets/solution/ecommerce-product-page/icon-cart.svg?react";

const errorMessageMotion = {
    flash: {
        opacity: [1, 0, 1, 0, 1],
        transition: {
            type: 'tween',
            duration: 1,
            times: [0, 0.25, 0.5, 0.75, 1],
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
}

const Container = styled.div`
    position: relative;
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

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
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
    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`;

const CountInput = styled(BaseCountInput)`
    margin-bottom: 1.6rem;

    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        flex: 1 1 35%;
        margin-bottom: 0;
        margin-right: 2rem;
    }
`;

const CartButton = styled(Button)`
    @media screen and (min-width: ${props => props.theme.screen.xl}) {
        flex: 1 1 65%;
    }
`;

const CartIcon = styled(BaseCartIcon)`
    margin-right: 1.6rem;
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.white};
`;

const ErrorMessage = styled(motion.p)`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 1rem));
    padding-left: 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.color.primary.orange};

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        padding-left: 0;
    }
`;

function Product({ className, cartItemsNumber, cartIsOpen, setCartIsOpen, setCartItemsNumber }) {
    const [itemsNumber, setItemsNumber] = useState(0);
    const [formIsNotValid, setFormIsNotValid] = useState(false);

    function handleCartUpdate(event) {
        event.preventDefault();
        if (itemsNumber > 0) {
            if (formIsNotValid) setFormIsNotValid(false);
            setCartItemsNumber(cartItemsNumber + itemsNumber);
            if (!cartIsOpen) setCartIsOpen(true);
        } else {
            if (!formIsNotValid) setFormIsNotValid(true);
        }
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
            <AnimatePresence>
                {formIsNotValid && (
                    <ErrorMessage
                        key="form-error-message"
                        initial="hidden"
                        animate="flash"
                        exit="hidden"
                        variants={errorMessageMotion}
                    >You cannot add 0 items in the cart.</ErrorMessage>
                )}
            </AnimatePresence>
        </Container>
    );
}

export default Product;