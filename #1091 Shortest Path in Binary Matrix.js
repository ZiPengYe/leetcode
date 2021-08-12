/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  let m = grid.length, n = grid[0].length;

  if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return -1;

  let ans = 0;
  const queue = [[0, 0]];

  while(queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; ++i) {
      const [x, y] = queue.shift();

      if (x === (n - 1) && y === (m - 1)) return ans + 1;

      for (const [x1, y1] of [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x - 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y - 1],
      ]) {
        if (
          x1 < 0 ||
          x1 >= n ||
          y1 < 0 ||
          y1 >= m ||
          grid[y1][x1] === 1
        ) continue;
        grid[y1][x1] = 1;
        queue.push([x1, y1]);
      }
    }
    ++ans;
  }
  return -1;
};
