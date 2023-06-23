import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/app";
import cartReducer from "../slices/cart";
import sliderReducer from "../slices/slider";

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    slider: sliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
