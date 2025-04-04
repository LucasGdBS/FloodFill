interface SquareProps {
  color: string;
}

export default function allSameColor(matrix: SquareProps[][]): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return true;

  const firstColor = matrix[0][0].color;

  return matrix.every((row) =>
    row.every((square) => square.color === firstColor)
  );
}
