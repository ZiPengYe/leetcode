/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = (s) => {
  let ans = [['']];
  
  for (const char of s) {
    const len = ans.length;
    const charCode = char.charCodeAt();
    // 是 数字
    if (charCode >= 48 && charCode <= 57) {
      for (let i = 0; i < len; ++i) {
        ans[i].push(char);
      }
    } else {
      for (let i = 0; i < len; ++i) {
        ans.push([...ans[i]])
        ans[i].push(char.toLowerCase());
        ans[i + len].push(char.toUpperCase());
      }
    }
  }
  return ans.map(v => v.join(''));
};
