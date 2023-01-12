import { useState } from "react";
import { Stack, Slider, Button } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLight } from "../../hooks/useLight";

interface LightSliderProps {
  id: number;
}

export const LightSlider = (props: LightSliderProps) => {
  // const [light, setLight] = useState(10);
  const [value, up, down, changeByValue] = useLight(props.id);
  console.log(`id: ${props.id}`);

  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="column">
      <Button>
        <ArrowDropUpIcon onClick={up} />
      </Button>
      <Slider
        aria-label="Volume"
        value={value}
        onChange={changeByValue}
        orientation="vertical"
      />
      <Button>
        <ArrowDropDownIcon onClick={down} />
      </Button>
    </Stack>
  );
};
