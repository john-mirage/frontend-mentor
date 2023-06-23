import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  slideIndex: number;
}

const initialState: InitialStateProps = {
  slideIndex: 0,
};

export const sliderSlide = createSlice({
  name: "slider",
  initialState,
  reducers: {
    changeSlide: (state, action: PayloadAction<number>) => {
      state.slideIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSlide } = sliderSlide.actions;

export default sliderSlide.reducer;
