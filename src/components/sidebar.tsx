import React from "react";
import { Box, Drawer, Toolbar, Divider } from "@mui/material";
import { DrawerContents } from "./drawer-contents";
import { PAGES } from "../constants/pages";
import { watch } from "fs";
import { Outlet } from "react-router-dom";

//make constnat file later
const pages = [
  "WATCH",
  "LISTEN",
  "LIGHTS",
  "CLIMATE",
  "SHADES",
  "CAMERAS",
  "SECURITY",
];

interface Props {}

export const SideBar = (props: Props) => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          ".MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
      >
        <DrawerContents page={pages} />
      </Drawer>
      <Outlet />
    </Box>
  );
};
