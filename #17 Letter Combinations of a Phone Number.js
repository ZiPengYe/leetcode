const DIGIT_LETTER = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const { length } = digits;
  if (length <= 1) {
    return (DIGIT_LETTER[digits] || '').split('');
  }
  const ans = [];
  const comb = [];
  const backtrack = (i) => {
    if (i === length) {
      ans.push(comb.join(''));
    } else {
      const d = digits[i];
      for (const char of DIGIT_LETTER[d]) {
        comb.push(char);
        backtrack(i + 1);
        comb.pop();
      }
    }
  }
  backtrack(0);
  return ans;
};