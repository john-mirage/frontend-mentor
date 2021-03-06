import styled from "styled-components";
import CartProduct from "@components/solution/ecommerce-product-page/cart-product";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 25rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Header = styled.header`
    flex: 0 0 6rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 6rem;
    color: ${props => props.theme.color.neutral.veryDarkBlue};
`;

const Body = styled.div`
    flex: 1 1 0;
    display: flex;
    padding: 2.4rem;
`;

const EmptyCartText = styled.p`
    width: 100%;
    height: auto;
    margin: auto;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.color.neutral.darkGrayishBlue};
`;

function Cart({ className, cartItemsNumber, setCartItemsNumber, opacity, y, tippyAttrs}) {
    return (
        <Container
            className={className}
            style={{ opacity, y }}
            {...tippyAttrs}
        >
            <Header>
                <Title>Cart</Title>
            </Header>
            <Body>
                {cartItemsNumber > 0
                    ? <CartProduct cartItemsNumber={cartItemsNumber} setCartItemsNumber={setCartItemsNumber}/>
                    : <EmptyCartText>Your cart is empty</EmptyCartText>
                }
            </Body>
        </Container>
    );
};

export default Cart;