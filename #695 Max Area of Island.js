/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  const [m, n] = [grid.length, grid[0].length];

  const dfs = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      x === m ||
      y === n ||
      grid[x][y] !== 1
    ) {
      return 0;
    }

    grid[x][y] = 0;
    let ans = 1;
    for ([x1, y1] of [
      [x - 1, y], // top
      [x + 1, y], // bottom
      [x, y - 1], // left
      [x, y + 1], // right
    ]) {
      ans += dfs(x1, y1);
    }
    return ans;
  };

  let ans = 0;
  for (let x = 0; x < m; ++x) {
    for (let y = 0; y < n; ++y) {
      ans = Math.max(dfs(x, y), ans);
    }
  }
  return ans;
};
