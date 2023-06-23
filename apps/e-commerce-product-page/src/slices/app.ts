import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  lightboxIsOpen: boolean;
  drawerIsOpen: boolean;
  cartIsOpen: boolean;
  scrimIsOpen: boolean;
}

const initialState: InitialStateProps = {
  lightboxIsOpen: false,
  drawerIsOpen: false,
  cartIsOpen: false,
  scrimIsOpen: false,
};

export const appSlide = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLightbox: (state, action: PayloadAction<boolean>) => {
      state.lightboxIsOpen = action.payload;
      state.scrimIsOpen = action.payload;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawerIsOpen = action.payload;
      state.scrimIsOpen = action.payload;
    },
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.cartIsOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLightbox, toggleDrawer, toggleCart } = appSlide.actions;

export default appSlide.reducer;
