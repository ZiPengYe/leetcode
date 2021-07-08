/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // 记录出现字符的下标
  const map = {};
  let max = 0, start = 0;
  for (let end = 0, len = s.length; end < len; ++end) {
    const char = s.charAt(end);
    if (char in map) {
      // 如果出现过, 则左边指针右移
      start = Math.max(map[char] + 1, start);
    }
    max = Math.max(max, end - start + 1);
    map[char] = end;
  }
  return max;
};
