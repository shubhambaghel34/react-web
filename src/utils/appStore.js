import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Store/cartSlice";
import themeReducer from "./Store/themeSlice";

//will take set of reducer
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default appStore;
