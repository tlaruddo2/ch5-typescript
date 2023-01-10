import React from "react";
import { Box, Drawer, Toolbar, Divider, Typography, List } from "@mui/material";
import { DrawerContents } from "./drawer-contents";
import { PAGES } from "../constants/pages";
import { watch } from "fs";
import { Outlet } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

//make constnat file later
const pages = [
  "HOME",
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
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "flex" },
          ".MuiDrawer-paper": { boxSizing: "border-box", width: 200 },
        }}
      >
        <DrawerContents page={pages} />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          padding: 0,
          display: { xs: "flex", sm: "none" },
          ".MuiDrawer-paper": { boxSizing: "border-box", width: 60 },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((page, index) => (
            <Link to={`${page}`} key={index}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={page[0]} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Outlet />
    </Box>
  );
};
