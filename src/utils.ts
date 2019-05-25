const getRandom = (n: number, round?: number) =>
  (Math.random() * n).toFixed(round);

const generateColor = () => {
  return `rgba(${getRandom(255)}, ${getRandom(255)}, ${getRandom(
    255
  )}, ${getRandom(1, 2)})`;
};

export const generateMatrix = (size: number) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const row: string[] = [];
    matrix.push(row);
    for (let j = 0; j < size; j++) {
      row.push(generateColor());
    }
  }
  return matrix;
};

export interface BenchProps {
  matrix: string[][];
}
