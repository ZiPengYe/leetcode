// 字母, 数字的正则
const alphanumericRegex = /[A-Za-z0-9]/
/**
 * @param {string} s
 * @return {boolean}
 */
// TODO 待优化
const isPalindrome = function(s) {
  for(let i = 0, j = s.length - 1; i < j; i++, j--) {
    // 前面的字符
    while(!alphanumericRegex.test(s[i])) i++;
    // 后面的字符
    while(!alphanumericRegex.test(s[j])) j--;
    // 如果前后字符都没有匹配到
    if (!(s[i] || s[j])) return true;
    // 如果前后字符不一致
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
  }
  return true;
};
