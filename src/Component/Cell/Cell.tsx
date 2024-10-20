import "./Cell.css";

type Props = {
  image?: string;
  rowNumber: number;
  calculableNumber: number;
  value: string;
};

const Cell = ({ image, rowNumber, value, calculableNumber }: Props) => {
  return (
    <div className={`cell ${calculableNumber % 2 === 0 ? "light" : "dark"}`}>
      {value}
      {rowNumber}{" "}
    </div>
  );
};

export default Cell;
