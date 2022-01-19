import styled from "styled-components";
import Price from "@components/ecommerce-product-page/Price";
import CountInput from "@components/ecommerce-product-page/CountInput";
import CartButton from "@components/ecommerce-product-page/CartButton";

const Container = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
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

const SpacedPrice = styled(Price)`
    margin-bottom: 2rem;
`;

const SpacedCountInput = styled(CountInput)`
    margin-bottom: 1.6rem;
`;

function Product(props) {
    return (
        <Container>
            <Company>sneaker company</Company>
            <Name>Fall Limited Edition Sneakers</Name>
            <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Description>
            <SpacedPrice />
            <SpacedCountInput
                cartItemsNumber={props.cartItemsNumber}
                setCartItemsNumber={props.setCartItemsNumber}
            />
            <CartButton />
        </Container>
    );
}

export default Product;