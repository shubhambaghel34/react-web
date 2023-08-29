import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Store/cartSlice";
import themeReducer from "./Store/themeSlice";
// import { productsApi } from "./Store/apiSlice";
// import { apiSlice } from "./Store/apiSlice";
//will take set of reducer
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,

    // products:productsApi
  },
});

export default appStore;
