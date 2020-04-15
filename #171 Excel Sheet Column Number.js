/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  let ans = 0;
  for (let i = 0, j = s.length - 1; j >= 0; i++, j--) {
    ans += 26**i * (s[j].charCodeAt() - 64);
  }
  return ans;
};