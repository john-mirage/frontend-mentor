import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  cartItemsNumber: number;
}

const initialState: InitialStateProps = {
  cartItemsNumber: 0,
};

export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<number>) => {
      state.cartItemsNumber += action.payload;
    },
    removeCartItems: (state) => {
      state.cartItemsNumber = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItems } = cartSlide.actions;

export default cartSlide.reducer;
