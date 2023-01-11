import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoHead } from "../content-display/info-head";

type Props = {};

export const Home = (props: Props) => {
  return (
    <Box
      sx={{
        marginLeft: { xs: 8, sm: 25 },
        display: "block",
      }}
    >
      <InfoHead />
    </Box>
  );
};
