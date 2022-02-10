import styled from 'styled-components';
import IconButton from "@components/solution/ecommerce-product-page/icon-button";
import Button from "@components/solution/ecommerce-product-page/button";
import productThumbnail from "@assets/solution/ecommerce-product-page/image-product-1-thumbnail.jpg";
import BaseDeleteIcon from "@assets/solution/ecommerce-product-page/icon-delete.svg?react";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 2.5rem;
    text-align: center;

    @media screen and (min-width: 300px) {
        flex-direction: row;
        text-align: start;
    }
`;

const Thumbnail = styled.img`
    flex: 0 0 5rem;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 0.4rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 300px) {
        margin-right: 2rem;
        margin-bottom: 0;
    }
`;

const Info = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 300px) {
        margin-right: 2rem;
        margin-bottom: 0;
    }
`;

const Title = styled.h4`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};
`;

const Price = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};
`;

const TotalPrice = styled.span`
    font-weight: 700;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const DeleteButton = styled(IconButton)`
    flex: 0 0 4.8rem;

    @media screen and (min-width: 300px) {
        margin-right: -1.7rem;
    }
`;

const DeleteIcon = styled(BaseDeleteIcon)`
    width: 1.4rem;
    height: auto;
    fill: ${props => props.theme.color.neutral.grayishBlue};
`;

function CartProduct({ cartItemsNumber, setCartItemsNumber }) {
    const totalPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(cartItemsNumber * 125);

    function handleCartReset(event) {
        event.preventDefault();
        setCartItemsNumber(0);
    }

    return (
        <Container>
            <Product>
                <Thumbnail src={productThumbnail.src} />
                <Info>
                    <Title>Autumn Limited Edition...</Title>
                    <Price>$125 x {cartItemsNumber} <TotalPrice>{totalPrice}</TotalPrice></Price>
                </Info>
                <DeleteButton action={handleCartReset}>
                    <DeleteIcon />
                </DeleteButton>
            </Product>
            <Button label="Checkout" />
        </Container>
    );
}

export default CartProduct;