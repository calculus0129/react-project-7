import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "@/ds";

const initialState: UiState = {
  isCartOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export default uiSlice;
