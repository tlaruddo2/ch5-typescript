import React from "react";
import { Box } from "@mui/material";
import { CurrentTime } from "./current-time";
import { CurrentDate } from "./current-date";
import { CurrentWeather } from "./current-weather";

interface Props {}
//chane name Props for other, could be exported

//same
export const InfoHead: React.FC<Props> = props => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CurrentDate />
      <CurrentTime />
      <CurrentWeather />
    </Box>
  );
};
