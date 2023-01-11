import { configureStore } from "@reduxjs/toolkit";
import { lightReducer } from "./slices/light-slice";

//configureStore > not typing
export const store = configureStore({
  reducer: {
    light0: lightReducer,
    light1: lightReducer,
    light2: lightReducer,
  },
});

//Define RootState and Dispatch Types
//https://react-redux.js.org/using-react-redux/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
