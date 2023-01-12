import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";
import { useGetAllProductsListQuery } from "../../redux/quries/products-query";

interface Props {}

export const Climate = (props: Props) => {
  const { data, error, isLoading } = useGetAllProductsListQuery(".");

  if (isLoading) {
    return <Layout title={PAGES.climate}>query loading...</Layout>;
  }

  if (error || !data) {
    return <Layout title={PAGES.climate}>query loading... error....</Layout>;
  }

  const product1 = data.products[0];

  console.log(data.products);

  return <Layout title={PAGES.climate}>{product1.title}</Layout>;
};
