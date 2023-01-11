import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {}

export const Climate = (props: Props) => {
  return <Layout title={PAGES.climate}>Climate Pages</Layout>;
};
