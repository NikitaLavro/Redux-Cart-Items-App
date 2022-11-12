import { configureStore, combineReducers } from "@reduxjs/toolkit";

//Slices
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/ModalSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
