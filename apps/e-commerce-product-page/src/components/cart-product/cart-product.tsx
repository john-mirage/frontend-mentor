import * as Styled from "./cart-product.style";
import Button from "../button";
import productThumbnail from "../../images/image-product-1-thumbnail.jpg";

interface CartProductProps {
  className?: string;
  cartItemsNumber: number;
  setCartItemsNumber: (cartItemsNumber: number) => void;
}

const CartProduct = ({
  className,
  cartItemsNumber,
  setCartItemsNumber,
}: CartProductProps) => {
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartItemsNumber * 125);

  function handleCartReset(event: MouseEvent) {
    event.preventDefault();
    setCartItemsNumber(0);
  }

  return (
    <Styled.Container className={className}>
      <Styled.Product>
        <Styled.Thumbnail src={productThumbnail} />
        <Styled.Info>
          <Styled.Title>Autumn Limited Edition...</Styled.Title>
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
