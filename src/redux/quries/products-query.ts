import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: builder => ({
    //add builder.query<type..?> https://redux-toolkit.js.org/rtk-query/overview
    getAllProductsList: builder.query({
      query: (c: string) => "products",
    }),
  }),
});

export const { useGetAllProductsListQuery } = productsApi;
