/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  const memo = Array(text2.length + 1).fill(0);
  for (let i = 1; i <= text1.length; i++) {
    let prev = 0;
    for (let j = 1; j <= text2.length; j++) {
      const tmp = memo[j];
      if (text1[i - 1] === text2[j - 1]) {
        memo[j] = prev + 1;
      } else {
        memo[j] = Math.max(memo[j], memo[j - 1]);
      }
      prev = tmp;
    }
  }
  return memo[text2.length];
};