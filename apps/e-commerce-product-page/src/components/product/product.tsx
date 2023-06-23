import * as Styled from "./product.style";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { addCartItem } from "../../slices/cart";
import { toggleCart } from "../../slices/app";

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
}

const Product = ({ className }: ProductProps) => {
  const { cartIsOpen } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const [itemsNumber, setItemsNumber] = useState(1);
  const [formIsNotValid, setFormIsNotValid] = useState(false);

  function handleCartUpdate() {
    if (itemsNumber > 0) {
      if (formIsNotValid) setFormIsNotValid(false);
      dispatch(addCartItem(itemsNumber));
      if (!cartIsOpen) dispatch(toggleCart(true));
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
