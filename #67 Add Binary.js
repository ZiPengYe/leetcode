/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  // 需要求和 的长度
  const minLen = Math.min(aLen, bLen);
  // 多出来的部分 的长度
  const restLen = Math.max(aLen, bLen) - minLen;
  let ans = '';
  // 进位
  let carry = 0;
  // 从后往前遍历 求和
  for (let i = 0; i < minLen; i++) {
    // 当前位的和
    const sum = (parseInt(a[aLen - i - 1] || 0, 2) + parseInt(b[bLen - i - 1] || 0, 2) + carry).toString(2);
    const { length } = sum;
    carry = length === 2
      ? 1
      : 0;
    ans = sum[length - 1] + ans;
  }
  // 有进位 或者 有多出来的部分 则拼进去
  if (carry || restLen) ans = (parseInt((aLen > bLen ? a : b).slice(0, restLen) || 0, 2) + carry).toString(2) + ans;
  return ans;
};
