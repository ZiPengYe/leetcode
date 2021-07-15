const store = {};
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (store[n]) return store[n];
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    [p, q, r] = [q, r, r + q];
  }
  return store[n] = r;
};
