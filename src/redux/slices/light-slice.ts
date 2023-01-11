import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice({
  name: "lightSlice",
  initialState: { value: 20 },
  reducers: {
    up: state => {
      state.value += 1;
    },
    down: state => {
      state.value -= 1;
    },
    changeByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const lightReducer = lightSlice.reducer;
export const lightActions = lightSlice.actions;
