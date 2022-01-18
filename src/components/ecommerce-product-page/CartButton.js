import styled from "styled-components";
import cartIcon from "@assets/ecommerce-product-page/icon-cart.svg";

const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.primary.orange};
`;

const Icon = styled.img`
    width: 2rem;
    height: auto;
    margin-right: 1.6rem;
`;

const Label = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.white};
`;

function CartButton() {
    return (
        <Container>
            <Icon src={cartIcon.src} />
            <Label>Add to cart</Label>
        </Container>
    );
}

export default CartButton;