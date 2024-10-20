type Props = {
  position: {
    rowNumber: number;
    value: string;
  };
  image?: string;
};

const Piece = ({ position: { rowNumber, value }, image }: Props) => {
  return (
    <div>
      <img src={image} alt={`${value}${rowNumber}`} />
    </div>
  );
};

export default Piece;
