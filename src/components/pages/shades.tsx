import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {}

export const Shades = (props: Props) => {
  return <Layout title={PAGES.shades}>Shade Page</Layout>;
};
