import { Box } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
//component in DnD: item of certain type.

export interface CradTestProps {
  id: number;
  text: string;
  index: number;
}

export const CardTestDnd = ({ id, text, index }: CradTestProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: "CardTestDnd",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: "50px",
        width: "50px",
        opacity: { opacity },
      }}
    >
      {text}
    </Box>
  );
};
