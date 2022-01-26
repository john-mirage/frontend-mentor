import styled from "styled-components";
import { useContext, useState } from "react";
import BasePrice from "@components/ecommerce-product-page/Price";
import BaseCountInput from "@components/ecommerce-product-page/CountInput";
import Button from "@components/ecommerce-product-page/Button";
import BaseCartIcon from "@assets/ecommerce-product-page/icon-cart.svg?react";
import { PageContext } from "@components/ecommerce-product-page/PageContext";

const Container = styled.div`
    padding-bottom: 10rem;
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

const CountInput = styled(BaseCountInput)`
    margin-bottom: 1.6rem;
`;

const CartIcon = styled(BaseCartIcon)`
    margin-right: 1.6rem;
    width: 2rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.white};
`;

function Product(props) {
    const [itemsNumber, setItemsNumber] = useState(0);
    const pageContext = useContext(PageContext);

    function handleCartUpdate(event) {
        event.preventDefault();
        pageContext.setCartItemsNumber(pageContext.cartItemsNumber + itemsNumber);
    }

    return (
        <Container className={props.className}>
            <Company>sneaker company</Company>
            <Name>Fall Limited Edition Sneakers</Name>
            <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Description>
            <Price />
            <CountInput itemsNumber={itemsNumber} setItemsNumber={setItemsNumber}/>
            <Button action={handleCartUpdate} label="Add to cart">
                <CartIcon />
            </Button>
        </Container>
    );
}

export default Product;