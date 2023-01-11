import React, { useState } from "react";
import { Box, Typography, Stack, Slider, Button } from "@mui/material";
import { LightSlider } from "../inputs/light-slider";
import { Layout } from "../layout/layout";
import { PAGES } from "../../constants/pages";

interface Props {}

export const Lights = (props: Props) => {
  return (
    <Layout title={PAGES.lights}>
      <Stack direction="row">
        <LightSlider id={0} />
        <LightSlider id={1} />
        <LightSlider id={2} />
      </Stack>
    </Layout>
  );
};
