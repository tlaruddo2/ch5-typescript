import React from "react";
import { Box, Typography } from "@mui/material";
type Props = {};

export const Home = (props: Props) => {
  return (
    <Box sx={{ marginLeft: { xs: 8, sm: 25 } }}>
      <Typography>Homepage</Typography>
    </Box>
  );
};
