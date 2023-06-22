import * as Styled from "./product.style";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BasePrice from "@components/solution/ecommerce-product-page/price";
import BaseCountInput from "@components/solution/ecommerce-product-page/count-input";
import Button from "@components/solution/ecommerce-product-page/button";
import BaseCartIcon from "@assets/solution/ecommerce-product-page/icon-cart.svg?react";

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

function Product({
  className,
  cartItemsNumber,
  cartIsOpen,
  setCartIsOpen,
  setCartItemsNumber,
}) {
  const [itemsNumber, setItemsNumber] = useState(0);
  const [formIsNotValid, setFormIsNotValid] = useState(false);

  function handleCartUpdate(event) {
    event.preventDefault();
    if (itemsNumber > 0) {
      if (formIsNotValid) setFormIsNotValid(false);
      setCartItemsNumber(cartItemsNumber + itemsNumber);
      if (!cartIsOpen) setCartIsOpen(true);
    } else {
      if (!formIsNotValid) setFormIsNotValid(true);
    }
  }

  return (
    <Container className={className}>
      <Company>sneaker company</Company>
      <Name>Fall Limited Edition Sneakers</Name>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Description>
      <Price />
      <Form>
        <CountInput itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} />
        <CartButton action={handleCartUpdate} label="Add to cart">
          <CartIcon />
        </CartButton>
      </Form>
      <AnimatePresence>
        {formIsNotValid && (
          <ErrorMessage
            key="form-error-message"
            initial="hidden"
            animate="flash"
            exit="hidden"
            variants={errorMessageMotion}
          >
            Click on the plus button to add at least one item.
          </ErrorMessage>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Product;
