import Piece from "../Piece/Piece";
import "./Cell.css";

type Props = {
  rowNumber: number;
  calculableNumber: number;
  value: string;
  cellIndex: number;
};

const Cell = ({ rowNumber, value, calculableNumber, cellIndex }: Props) => {
  return (
    <div className={`cell ${calculableNumber % 2 === 0 ? "dark" : "light"}`}>
      {rowNumber === 2 && (
        <Piece
          position={{ value, rowNumber }}
          image={"assets/white-pawn.png"}
        />
      )}
      {rowNumber === 7 && (
        <Piece
          position={{ value, rowNumber }}
          image={"assets/black-pawn.png"}
        />
      )}
      {rowNumber === 8 ? (
        cellIndex === 0 || cellIndex === 7 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/black-rook.png"
          />
        ) : cellIndex === 1 || cellIndex === 6 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/black-knight.png"
          />
        ) : cellIndex === 2 || cellIndex === 5 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/black-bishop.png"
          />
        ) : cellIndex === 3 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/black-queen.png"
          />
        ) : cellIndex === 4 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/black-king.png"
          />
        ) : null
      ) : null}
      {rowNumber === 1 ? (
        cellIndex === 0 || cellIndex === 7 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/white-rook.png"
          />
        ) : cellIndex === 1 || cellIndex === 6 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/white-knight.png"
          />
        ) : cellIndex === 2 || cellIndex === 5 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/white-bishop.png"
          />
        ) : cellIndex === 3 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/white-queen.png"
          />
        ) : cellIndex === 4 ? (
          <Piece
            position={{ value, rowNumber }}
            image="assets/white-king.png"
          />
        ) : null
      ) : null}
    </div>
  );
};

export default Cell;
