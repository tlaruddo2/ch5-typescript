import { Box, Typography } from "@mui/material";
import { ButtonsTitleHead } from "./buttons-title-head";
import React from "react";

interface TitleHeadProps {
  title: string;
  subtitle: string;
}

export const TitleHead = (props: TitleHeadProps) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{props.title} </Typography>
        <ButtonsTitleHead />
      </Box>
      <Typography>{props.subtitle}</Typography>
    </Box>
  );
};
