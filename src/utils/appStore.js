import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Store/cartSlice";

//will take set of reducer
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
