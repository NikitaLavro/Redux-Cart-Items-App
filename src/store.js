import { configureStore, combineReducers } from "@reduxjs/toolkit";

//Slices
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
