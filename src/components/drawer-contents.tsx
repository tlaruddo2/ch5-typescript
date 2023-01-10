import React from "react";
import { Box, Toolbar, Divider, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
          {props.page.map((text, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
    </Box>
  );
};
