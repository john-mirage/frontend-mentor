import { CSSProperties, forwardRef } from "react";
import CartProduct from "../cart-product";
import * as Styled from "./cart.style";

interface CartProps {
  className?: string;
  cartItemsNumber: number;
  setCartItemsNumber: (cartItemsNumber: number) => void;
  style: CSSProperties;
}

const Cart = forwardRef(
  (
    { className, cartItemsNumber, setCartItemsNumber, style }: CartProps,
    ref
  ) => {
    return (
      <Styled.Container className={className} style={style} ref={ref}>
        <Styled.Header>
          <Styled.Title>Cart</Styled.Title>
        </Styled.Header>
        <Styled.Body>
          {cartItemsNumber > 0 ? (
            <CartProduct
              cartItemsNumber={cartItemsNumber}
              setCartItemsNumber={setCartItemsNumber}
            />
          ) : (
            <Styled.EmptyCartText>Your cart is empty</Styled.EmptyCartText>
          )}
        </Styled.Body>
      </Styled.Container>
    );
  }
);

export default Cart;
