import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoHead } from "../content-display/info-head";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

type Props = {};

export const Home = (props: Props) => {
  return <Layout title={PAGES.home}>Home Page</Layout>;
};
