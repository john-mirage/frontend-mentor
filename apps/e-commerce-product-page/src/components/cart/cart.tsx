import { CSSProperties, forwardRef } from "react";
import CartProduct from "../cart-product";
import * as Styled from "./cart.style";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface CartProps {
  className?: string;
  style: CSSProperties;
}

const Cart = forwardRef(({ className, style }: CartProps, ref) => {
  const cartItemsNumber = useSelector(
    (state: RootState) => state.cart.cartItemsNumber
  );

  return (
    <Styled.Container className={className} style={style} ref={ref}>
      <Styled.Header>
        <Styled.Title>Cart</Styled.Title>
      </Styled.Header>
      <Styled.Body>
        {cartItemsNumber > 0 ? (
          <CartProduct />
        ) : (
          <Styled.EmptyCartText>Your cart is empty</Styled.EmptyCartText>
        )}
      </Styled.Body>
    </Styled.Container>
  );
});

export default Cart;
