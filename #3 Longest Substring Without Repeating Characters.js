/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  // 最大长度, 字符串下标指针
  let max = 0, p = 0;
  // 遍历字符串
  for(let i = 0; i < s.length; i++) {
    // 当前指针 往后找 当前字符 的 下标
    const index = s.indexOf(s[i], p);
    // 如果 字符出现重复 则 指针往前推进
    if (index !== -1 && index < i) p = index + 1;
    // 长度为 下标到指针的距离
    max = Math.max(max, index - p + 1);
  }
  return max;
};
