import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element;
}

export const Layout = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{ display: { xs: "none", sm: "flex" }, height: 100, width: 260 }}
      />
      <Box
        sx={{ display: { xs: "flex", sm: "none" }, height: 100, width: 230 }}
      />
      {props.children}
    </Box>
  );
};
