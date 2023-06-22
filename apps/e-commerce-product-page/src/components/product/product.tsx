import * as Styled from "./product.style";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const errorMessageMotion = {
  flash: {
    opacity: [1, 0, 1, 0, 1],
    transition: {
      type: "tween",
      duration: 1,
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

interface ProductProps {
  className?: string;
  cartItemsNumber: number;
  cartIsOpen: boolean;
  setCartIsOpen: (cartIsOpen: boolean) => void;
  setCartItemsNumber: (cartItemsNumber: number) => void;
}

const Product = ({
  className,
  cartItemsNumber,
  cartIsOpen,
  setCartIsOpen,
  setCartItemsNumber,
}: ProductProps) => {
  const [itemsNumber, setItemsNumber] = useState(1);
  const [formIsNotValid, setFormIsNotValid] = useState(false);

  function handleCartUpdate() {
    if (itemsNumber > 0) {
      if (formIsNotValid) setFormIsNotValid(false);
      setCartItemsNumber(cartItemsNumber + itemsNumber);
      if (!cartIsOpen) setCartIsOpen(true);
    } else {
      if (!formIsNotValid) setFormIsNotValid(true);
    }
  }

  return (
    <Styled.Container className={className}>
      <Styled.Company>sneaker company</Styled.Company>
      <Styled.Name>Fall Limited Edition Sneakers</Styled.Name>
      <Styled.Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Styled.Description>
      <Styled.Price />
      <Styled.Form>
        <Styled.CountInput
          itemsNumber={itemsNumber}
          setItemsNumber={setItemsNumber}
        />
        <Styled.CartButton action={handleCartUpdate} label="Add to cart">
          <Styled.CartIcon />
        </Styled.CartButton>
      </Styled.Form>
      <AnimatePresence>
        {formIsNotValid && (
          <Styled.ErrorMessage
            key="form-error-message"
            initial="hidden"
            animate="flash"
            exit="hidden"
            variants={errorMessageMotion}
          >
            Click on the plus button to add at least one item.
          </Styled.ErrorMessage>
        )}
      </AnimatePresence>
    </Styled.Container>
  );
};

export default Product;
