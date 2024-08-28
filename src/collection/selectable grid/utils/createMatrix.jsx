export const matrix = (col, row) =>
  Array(col)
    .fill()
    .map((_) => Array(row).fill(0));
