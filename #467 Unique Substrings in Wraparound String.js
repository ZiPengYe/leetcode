/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function(p) {
  const len = p.length;
  if (len < 2) return len;
  const dp = new Array(26).fill(0);

  for (let i = 0, max = 1, prev, cur; i < len; i++, prev = cur) {
    cur = p.charCodeAt(i) - 97;
    if (cur - prev === 1 || cur - prev === -25) {
      max++;
    } else {
      max = 1;
    }
    dp[cur] = Math.max(dp[cur], max);
  }

  return dp.reduce((acc, val) => acc + val, 0);
};