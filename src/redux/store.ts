import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { lightReducer } from "./slices/light-slice";
import { productsApi } from "./quries/products-query";
import { setupListeners } from "@reduxjs/toolkit/query";
//configureStore > not typing
export const store = configureStore({
  reducer: {
    light0: lightReducer,
    light1: lightReducer,
    light2: lightReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  //middleware?
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
//Define RootState and Dispatch Types
//https://react-redux.js.org/using-react-redux/usage-with-typescript
//store.getState: return current state of Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
