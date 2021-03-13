const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} arr
 * @return {number}
 */
const numFactoredBinaryTrees = (arr) => {
  arr.sort((a, b) => a - b);
  const dp = Array(arr.length).fill(1);
  const index = arr.reduce((acc, val, idx) => ({
    ...acc,
    [arr[idx]]: idx,
  }), {});
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        const right = arr[i] / arr[j];
        if (right in index) {
          dp[i] = (dp[i] + dp[j] * dp[index[right]]) % MOD;
        }
      }
    }
  }
  return dp.reduce((acc, val) => acc + val, 0) % MOD;
};
