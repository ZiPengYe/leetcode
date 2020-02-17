// 存储之前的运算
const store = [
  [1],
  [1,1],
];
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// TODO 待优化
const getRow = function(rowIndex) {
  for (let i = 2; i <= rowIndex; i++) {
    if (store[i]) continue;
    store[i] = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      store[i][j] = store[i - 1][j - 1] + store[i - 1][j];
    }
  }
  return store[rowIndex];
};
