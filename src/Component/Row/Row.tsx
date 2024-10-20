import Cell from "../Cell/Cell";
import "./Row.css";

const Row = ({ row, number }: { row: string[]; number: number }) => {
  return (
    <div className="row">
      {row.map((cell, cellIndex) => (
        <Cell
          rowNumber={number}
          calculableNumber={cellIndex + 1 + number}
          value={cell}
        />
      ))}
    </div>
  );
};

export default Row;
