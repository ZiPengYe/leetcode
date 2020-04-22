/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const { length: xLen } = grid[0];
  const { length: yLen } = grid;
  for(let i = 1; i < xLen; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for(let i = 1; i < yLen; i++) {
    grid[i][0] += grid[i - 1][0];
    for (let j = 1; j < xLen; j++) {
      grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }
  return grid[yLen - 1][xLen - 1];
};