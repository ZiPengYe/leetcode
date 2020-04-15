/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
  let ans = 0;
  for (let power = 1, factor = 5**power; n >= factor; factor = 5**++power) {
    ans += (n / factor) >>> 0;
  }
  return ans;
};