import styled from 'styled-components';
import IconButton from "@components/ecommerce-product-page/IconButton";
import Button from "@components/ecommerce-product-page/Button";
import productThumbnail from "@assets/ecommerce-product-page/image-product-1-thumbnail.jpg";
import deleteIcon from "@assets/ecommerce-product-page/icon-delete.svg";

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
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 0.4rem;
    margin-right: 2rem;
`;

const Info = styled.div`

`;

const Title = styled.h4`

`;

const Price = styled.p`

`;

const DeleteButton = styled(IconButton)`
    margin-left: auto;
`;

function CartProduct(props) {
    const totalPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.cartItemsNumber * 125);

    function handleCartReset(event) {
        event.preventDefault();
        props.setCartItemsNumber(0);
    }

    return (
        <Container>
            <Product>
                <Thumbnail src={productThumbnail.src} />
                <Info>
                    <Title>Fall Limited Edition...</Title>
                    <Price>$125 x {props.cartItemsNumber} {totalPrice}</Price>
                </Info>
                <DeleteButton
                    icon={deleteIcon}
                    iconSize="1.6rem"
                    action={handleCartReset}
                />
            </Product>
            <Button
                label="Checkout"
            />
        </Container>
    );
}

export default CartProduct;