/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;
  const dp = Array(rows + 1)
    .fill(1)
    .map(() => Array(cols + 1).fill(0));
  let len = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '0') continue;
      dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
      len = Math.max(len, dp[i][j]);
    }
  }
  return len * len;
};