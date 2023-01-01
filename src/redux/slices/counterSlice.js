import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2;
    },
    decrement: (state) => {
      state.value -= 3;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
