/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  const m = board.length,
    n = board[0].length;

  if (m <= 2 || n <= 2) return board;

  // 深度遍历 将边缘相连的标记为A
  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      board[x][y] !== 'O'
    ) return;
    board[x][y] = 'A';
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  // 纵向遍历边缘 即 左右两列
  for (let i = 0; i < m; ++i) {
    dfs(i, 0);
    dfs(i, n - 1);
  }
  // 横向遍历边缘 即 上下两行
  for (let i = 1; i < n - 1; ++i) {
    dfs(0, i);
    dfs(m - 1, i);
  }
  // 将 A 标记回 O
  // 将 O 标记成 X
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
  return board;
};
