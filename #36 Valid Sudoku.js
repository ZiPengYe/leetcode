/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const set = new Set();

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const value = board[i][j];
      if (value === '.') continue;
      const k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      if (
        set.has(`${i}.${value}`) ||
        set.has(`.${j}${value}`) ||
        set.has(`${k}${value}`)
      ) return false;
      set.add(`${i}.${value}`);
      set.add(`.${j}${value}`);
      set.add(`${k}${value}`);
    }
  }

  return true;
};
