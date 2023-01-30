import { Children, ReactNode } from "react";

interface SquareProps {
  black: boolean;
  children: ReactNode;
}

export const Square = ({ black, children }: SquareProps) => {
  const fill = black === true ? "black" : "white";
  const stroke = black === true ? "white" : "black";
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100vh",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};
