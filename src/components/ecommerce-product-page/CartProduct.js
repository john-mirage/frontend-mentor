import styled, { useTheme } from 'styled-components';
import IconButton from "@components/ecommerce-product-page/IconButton";
import Button from "@components/ecommerce-product-page/Button";
import productThumbnail from "@assets/ecommerce-product-page/image-product-1-thumbnail.jpg";
import DeleteIcon from "@assets/ecommerce-product-page/icon-delete.svg?react";
import { useContext } from "react";
import { PageContext } from "@components/ecommerce-product-page/PageContext";

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Product = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 2.5rem;
`;

const Thumbnail = styled.img`
    flex: 0 0 5rem;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 0.4rem;
    margin-right: 2rem;
`;

const Info = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
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
    color: ${props => props.theme.color.neutral.verydarkBlue};
`;

const DeleteButton = styled(IconButton)`
    flex: 0 0 4.8rem;
    margin-left: auto;
    margin-right: -1.7rem;
`;

function CartProduct(props) {
    const pageContext = useContext(PageContext);
    const totalPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(pageContext.cartItemsNumber * 125);
    const theme = useTheme();
    

    function handleCartReset(event) {
        event.preventDefault();
        pageContext.setCartItemsNumber(0);
    }

    return (
        <Container>
            <Product>
                <Thumbnail src={productThumbnail.src} />
                <Info>
                    <Title>Autumn Limited Edition...</Title>
                    <Price>$125 x {pageContext.cartItemsNumber} <TotalPrice>{totalPrice}</TotalPrice></Price>
                </Info>
                <DeleteButton action={handleCartReset}>
                    <DeleteIcon width="14" fill={theme.color.neutral.grayishBlue} />
                </DeleteButton>
            </Product>
            <Button
                label="Checkout"
            />
        </Container>
    );
}

export default CartProduct;