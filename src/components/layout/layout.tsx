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
  children: JSX.Element | JSX.Element[] | string | string[];
}

export const Layout = ({ title, subtitle, children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%", p: 1 }}>
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

        <TitleHead title={title} subtitle={"empty subtitle"} />
        {children}
      </Box>
    </Box>
  );
};
