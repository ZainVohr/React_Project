import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import usersSlice from "./usersSlice";
import { AuthReducer } from "./auth/AuthSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    category: categorySlice,
    customers: usersSlice,
    Auth: AuthReducer,
  },
});
