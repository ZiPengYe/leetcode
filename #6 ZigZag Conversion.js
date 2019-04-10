/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if(numRows === 1) return s;

  // 摆动间距
  const len = 2*numRows -2;
  let result = '';

  // 遍历 行
  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j + i < s.length; j += len) {
      result += s[j+i];
      // 如果 不是 首尾两行, 则 把 "V" 结构 对应的字符加上
      if(i != 0 && i != numRows -1 && j + len - i < s.length)
        result += s[j + len - i];
    }
  }
  return result;
};
