/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (strs, m, n) => {
  const dp = Array(m + 1).fill(void 0).map(() => Array(n + 1).fill(0));
  for (const str of strs) {
    let zeroCount = oneCount = 0;
    for (const char of str) {
      if (char === '0') zeroCount++;
      if (char === '1') oneCount++;
    }
    for (let zeros = m; zeros >= zeroCount; --zeros) {
      for (let ones = n; ones >= oneCount; --ones) {
        dp[zeros][ones] = Math.max(1 + dp[zeros - zeroCount][ones - oneCount], dp[zeros][ones]);
      }
    }
  }
  return dp[m][n];
};