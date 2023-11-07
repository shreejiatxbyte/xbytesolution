// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from "./db";

// const initialState = {
//   jasonData : data,
// }

const counterSlice = createSlice({
  name: 'data',
  initialState : data,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
