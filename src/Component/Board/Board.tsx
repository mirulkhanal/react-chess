import Row from "../Row/Row";
import "./Board.css";

function Board() {
  const renderBoard = () => {
    const board = [];
    const row = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let i = 7; i >= 0; i--) {
      board.push(<Row row={row} number={i + 1} />);
    }

    return board;
  };

  console.log(renderBoard());

  return <div className="board">{renderBoard()}</div>;
}

export default Board;
