interface SquareProps {
    color: string; 
}
function floodFill(
  matrix: SquareProps[][],
  row: number,
  col: number,
  newColor: string
): SquareProps[][] {

  const numRows = matrix.length; // Número de linhas na matriz
  const numCols = matrix[0].length; // Número de colunas na matriz
  const targetColor = matrix[row][col].color; // Cor do pixel inicial

  // Verifica se o pixel já tem a nova cor.
  // Se sim, não faz nada e retorna a matriz original.
  if (targetColor === newColor) return matrix;

  // Essa é a função DFS recursiva que preenche a cor.
  // Ela verifica se a célula atual está dentro dos limites da matriz e se tem a cor alvo.
  // Se sim, muda a cor da célula e chama a função recursivamente para as células adjacentes.
  function fill(row: number, col: number) {
    if (
      row < 0 ||
      col < 0 ||
      row >= numRows ||
      col >= numCols ||
      matrix[row][col].color !== targetColor
    ) {
      return;
    }

    matrix[row][col].color = newColor; // Muda a cor da célula atual

    // Chama a função recursivamente para as células adjacentes (cima, baixo, esquerda, direita)
    fill(row - 1, col);
    fill(row + 1, col); 
    fill(row, col - 1); 
    fill(row, col + 1); 
  }

  fill(row, col); // Inicia a função DFS na célula inicial
  // A função fill preenche todas as células adjacentes que têm a cor alvo com a nova cor.

  return matrix; // Retorna a matriz atualizada
}

export default floodFill;
