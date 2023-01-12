import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  contents: string;
  href: string;
  // variant: string;
}

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button href={props.href} variant="contained">
      {props.contents}
    </Button>
  );
};
