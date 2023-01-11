import { configureStore } from "@reduxjs/toolkit";
import { lightReducer } from "./slices/light-slice";

export const store = configureStore({
  reducer: {
    light0: lightReducer,
    light1: lightReducer,
    light2: lightReducer,
  },
});
