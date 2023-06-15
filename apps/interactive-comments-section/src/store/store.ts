import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/slice";

export const store = configureStore({
  reducer: {
    comment: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
