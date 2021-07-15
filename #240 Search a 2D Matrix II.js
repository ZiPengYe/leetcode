/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const [m, n] = [matrix.length, matrix[0].length];
  let [row, col] = [m - 1, 0]; // left-bottom
  while (row >= 0 && col < n) {
    if (matrix[row][col] > target) {
      --row;
    } else if (matrix[row][col] < target) {
      ++col;
    } else {
      return true;
    }
  }
  return false;
};
