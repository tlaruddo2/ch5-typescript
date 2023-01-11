import React from "react";
import { Box, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LockIcon from "@mui/icons-material/Lock";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface Props {}

export const ButtonsTitleHead = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton>
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton>
        <LockIcon />
      </IconButton>
      <IconButton>
        <LightbulbIcon />
      </IconButton>
    </Box>
  );
};
