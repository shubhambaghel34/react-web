import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: ["burger,pizza"],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // this is reducer function which modifies the slice of store
  reducers: {
    //this will have state and action from dispatch
    addItems: (state, action) => {
      //mutating existing state
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },

    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
