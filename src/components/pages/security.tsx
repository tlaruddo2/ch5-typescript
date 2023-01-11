import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {}

export const Security = (props: Props) => {
  return <Layout title={PAGES.security}>Security</Layout>;
};
