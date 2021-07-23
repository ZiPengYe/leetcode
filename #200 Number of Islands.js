/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const m = grid.length;
  if (!m) return 0;
  const n = grid[0].length;

  /**
   * 深度遍历, 将坐标位置标为 0
   * @param {number} i
   * @param {number} j
   */
  const dfs = (i, j) => {
    grid[i][j] = '0';
    // 如果在范围内, 且是 1, 则继续深度遍历
    if (i - 1 >= 0 && grid[i - 1][j] === '1') dfs(i - 1, j);
    if (i + 1 < m && grid[i + 1][j] === '1') dfs(i + 1, j);
    if (j - 1 >= 0 && grid[i][j - 1] === '1') dfs(i, j - 1);
    if (j + 1 < n && grid[i][j + 1] === '1') dfs(i, j + 1);
  };

  let ans = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '1') {
        ++ans;
        dfs(i, j);
      }
    }
  }
  return ans;
};
