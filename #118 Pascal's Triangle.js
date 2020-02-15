// 存储之前的运算值
const store = [
  ,
  [1],
  [1,1],
];
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  for (let i = 2; i < numRows + 1; i++) {
    if (store[i]) continue;
    store[i] = Array(i).fill(1);
    for(let j = 1; j < i - 1; j++) {
      store[i][j] = store[i - 1][j - 1] + store[i - 1][j];
    }
  }
  return store.slice(1, numRows + 1);
};
