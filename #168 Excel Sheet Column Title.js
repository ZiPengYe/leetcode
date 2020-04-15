/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = (n) => {
  let ans = '';
  while (n) {
    const rest = n % 26 || 26;
    ans = String.fromCharCode(rest + 64) + ans;
    n = (n - rest) / 26;
  }
  return ans;
};