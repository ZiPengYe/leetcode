/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const [m, n] = [grid.length, grid[0].length];

  const queue = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 2) {
        queue.push([i , j, 0]);
      }
    }
  }

  let ans = 0;
  while(queue.length) {
    let [x, y, time] = queue.shift();
    for ([x1, y1] of [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]) {
      if (
        0 <= x1 && x1 < m &&
        0 <= y1 && y1 < n &&
        grid[x1][y1] === 1
      ) {
        grid[x1][y1] = 2;
        queue.push([x1, y1, time + 1]);
      }
    }
    ans = time
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1) return -1;
    }
  }
  return ans;
};
