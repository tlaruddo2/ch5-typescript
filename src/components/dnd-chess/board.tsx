import { Square } from "./square";
import { Knight } from "./knight";
import { Empty } from "./empty";

const renderSquare = (i: number, [knightX, knightY]: [number, number]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <Square black={black}>{piece}</Square>
    </div>
  );
};

interface BoardProps {
  knightPosition: [number, number];
}

export const Board = ({ knightPosition }: BoardProps) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  console.log(squares);
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};
