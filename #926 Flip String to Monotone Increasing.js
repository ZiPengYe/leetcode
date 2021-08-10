/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = (s) => {
  const len = s.length;
  const P = Array(len + 1).fill(0);
  for (let i = 0; i < len; ++i) {
    P[i + 1] = P[i] + +s[i];
  }
  let ans = Number.MAX_VALUE;
  for (let i = 0; i <= len; ++i) {
    ans = Math.min(ans, P[i] + len - i - (P[len] - P[i]));
  }
  return ans;
};
