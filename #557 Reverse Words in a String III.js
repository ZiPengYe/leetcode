/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s.replace(/([^ ]*)/g, (match, word) => {
    let ans = '';
    for (let i = 0, len = word.length; i < len; ++i) {
      ans = word.charAt(i) + ans;
    }
    return ans;
  });
};