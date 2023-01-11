import { useState } from "react";
import { Stack, Slider, Button } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {}

export const LightSlider = (props: Props) => {
  const [light, setLight] = useState(10);
  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="column">
      <Button>
        <ArrowDropUpIcon />
      </Button>
      <Slider
        aria-label="Volume"
        value={light}
        onChange={(e: Event, newValue: number | number[]) => {
          const light = Array.isArray(newValue) ? newValue[0] : newValue;
          setLight(light);
        }}
        orientation="vertical"
      />
      <Button>
        <ArrowDropDownIcon />
      </Button>
    </Stack>
  );
};
