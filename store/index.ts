import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;

export const actions = {
  cartActions: cartSlice.actions,
  uiActions: uiSlice.actions,
};

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch; // Just an auto-typed expression. It's not used anywhere.
