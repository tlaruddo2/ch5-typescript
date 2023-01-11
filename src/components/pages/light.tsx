import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {}

export const Lights = (props: Props) => {
  return <Layout title={PAGES.lights}>Light Page</Layout>;
};
