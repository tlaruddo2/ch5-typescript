import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {
  // children: JSX.Element;
}

export const Listen = (props: Props) => {
  return (
    <Layout title={PAGES.listen}>
      <Typography>Listen Page</Typography>
    </Layout>
  );
};
