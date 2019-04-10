/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  // 从后往前遍历, 如果不是 9, 则+1, 否则 判断前一位
  for(let i = digits.length -1; i >=0; i--) {
    if(digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
