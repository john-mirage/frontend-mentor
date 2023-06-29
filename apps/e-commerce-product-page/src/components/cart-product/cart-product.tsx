import * as Styled from "./cart-product.style";
import Button from "../button";
import productThumbnail from "../../images/image-product-1-thumbnail.jpg";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { removeCartItems } from "../../slices/cart";

interface CartProductProps {
  className?: string;
}

const CartProduct = ({ className }: CartProductProps) => {
  const cartItemsNumber = useSelector(
    (state: RootState) => state.cart.cartItemsNumber
  );
  const dispatch = useDispatch();
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartItemsNumber * 125);

  function handleCartReset() {
    dispatch(removeCartItems());
  }

  return (
    <Styled.Container className={className}>
      <Styled.Product>
        <Styled.Thumbnail src={productThumbnail} />
        <Styled.Info>
          <Styled.Title>Fall Limited Edition Sneakers</Styled.Title>
          <Styled.Price>
            $125 x {cartItemsNumber}{" "}
            <Styled.TotalPrice>{totalPrice}</Styled.TotalPrice>
          </Styled.Price>
        </Styled.Info>
        <Styled.DeleteButton action={handleCartReset}>
          <Styled.DeleteIcon />
        </Styled.DeleteButton>
      </Styled.Product>
      <Button label="Checkout" />
    </Styled.Container>
  );
};

export default CartProduct;
