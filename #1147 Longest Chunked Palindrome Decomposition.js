/**
 * @param {string} text
 * @return {number}
 */
const longestDecomposition = text => {
  const { length } = text;
  // 从后往前找 第一个字符 的下标
  for (let i = text.lastIndexOf(text[0], length); i >= length/2; i = text.lastIndexOf(text[0], i - 1)) {
    const subLen = length - i;
    if (text.substring(0, subLen) === text.substring(i)) {
      return 2 + longestDecomposition(text.substring(subLen, i));
    }
  }
  return length ? 1 : 0;
};