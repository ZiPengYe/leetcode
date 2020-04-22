const DFSMark = (grid, i, j) => {
  if (
    i < 0
    || j < 0
    || i >= grid.length
    || j >= grid[i].length
    || grid[i][j] !== '1'
  ) return;
  grid[i][j] = '0';
  DFSMark(grid, i + 1, j);
  DFSMark(grid, i - 1, j);
  DFSMark(grid, i, j + 1);
  DFSMark(grid, i, j - 1);
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => grid.reduce((acc, cur, idx) => {
  for(let i = 0; i < cur.length; i++) {
    if (cur[i] === '0') continue;
    DFSMark(grid, idx, i);
    acc++;
  }
  return acc;
}, 0);