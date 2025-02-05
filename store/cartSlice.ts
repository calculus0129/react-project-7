import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "@/ds";

const initialState: CartState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: { payload: { pid: string; amount: number } }) {
      state.cart[action.payload.pid] =
        state.cart[action.payload.pid] ?? 0 + action.payload.amount;
    },
    removeProduct(state, action: { payload: string }) {
      delete state.cart[action.payload];
    },
    clearCart(state) {
      state.cart = {};
    },
  },
});

export default cartSlice;
