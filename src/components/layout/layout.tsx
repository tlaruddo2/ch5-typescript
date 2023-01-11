import React from "react";
import { Box } from "@mui/material";
import { InfoHead } from "../content-display/info-head";
import { TitleHead } from "../content-display/title-head";

{
  /* how to set defult props, easy way? */
}
interface LayoutProps {
  title: string;
  subtitle?: string;
  children: JSX.Element | string;
}

export const Layout = (props: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          height: "100%",
          width: "15%",
        }}
      />
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          height: "100%",
          width: "10%",
        }}
      />
      <Box>
        <InfoHead />

        <TitleHead title={props.title} subtitle={"empty subtitle"} />
        {props.children}
      </Box>
    </Box>
  );
};
