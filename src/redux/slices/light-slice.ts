import { createSlice } from "@reduxjs/toolkit";

interface Light {
  id: number;
  value: number;
}

export const lightSlice = createSlice({
  name: "lightSlice",
  initialState: { value: 20 },
  reducers: {
    //up, down, chaneByValue: action and reducer at the same time
    up: state => {
      //state: RootState
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
