import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 6,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
  },
});
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
