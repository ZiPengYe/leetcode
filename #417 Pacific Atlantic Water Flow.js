const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
  const ans = [];
  if (!(matrix && matrix.length)) {
    return ans;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const in_area = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n;
  }
  const dfs = (matrix, x, y, tmp) => {
    tmp[x][y] = 1;
    for (const d of direction) {
      const newx = x + d[0];
      const newy = y + d[1];
      if (!in_area(newx, newy) || matrix[x][y] > matrix[newx][newy] || tmp[newx][newy] == 1){
        continue;
      }
      dfs(matrix, newx, newy, tmp);
    }
  };
  const po = Array(m).fill(void 0).map(() => Array(n).fill(0)); // po 太平洋
  const ao = Array(m).fill(void 0).map(() => Array(n).fill(0)); // ao 大西洋
  for (let i = 0; i < n; ++i) {
    dfs(matrix, 0, i, po);
    dfs(matrix, m - 1, i , ao);
  }
  for (let i = 0; i < m; ++i) {
    dfs(matrix, i, 0, po);
    dfs(matrix, i, n - 1, ao);
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (po[i][j] === 1 && ao[i][j] === 1) {
        ans.push([i, j]);
      }
    }
  }
  return ans;
};