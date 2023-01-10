import React from "react";
import { Box, Toolbar, Divider, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

interface Props {
  page: Array<string>;
}

export const DrawerContents = (props: Props) => {
  return (
    <Box>
      <>
        <Toolbar />
        <Divider />
        <List>
          {props.page.map((page, index) => (
            <Link to={`${page}`} key={index}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </>
    </Box>
  );
};
