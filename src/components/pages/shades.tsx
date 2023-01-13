import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";
import { CustomButton } from "../actions/buttons/custom-button";

interface Props {}

export const Shades = (props: Props) => {
  return (
    <Layout title={PAGES.shades}>
      <>
        Shade Page
        <CustomButton contents="buttonnnnnnnnnnnn" href="www.google.com" />
      </>
    </Layout>
  );
};
