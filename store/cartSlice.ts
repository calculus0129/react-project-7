import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "@/ds";

import { productMap } from "@/db/Products";

const firstKey = productMap.keys().next().value ?? "";

const initialState: CartState = {
  cart: {
    [firstKey]: 3, // Just an example.
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: { payload: { pid: string; amount: number } }) {
      state.cart[action.payload.pid] = Math.max(
        0,
        (state.cart[action.payload.pid] ?? 0) + action.payload.amount,
      );
      if (state.cart[action.payload.pid] === 0) {
        delete state.cart[action.payload.pid];
      }
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
