/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  const { length } = nums;
  // 值等于 val 的索引集
  const stack = [];
  // 找到值等于 val 的索引
  for (let i = nums.indexOf(val); i !== -1; i = nums.indexOf(val, i + 1)) {
    stack.push(i);
  }
  const len = stack.length;
  const ans = length - len;
  // 在 val 的索引集从前往后替换值
  for (let i = stack.shift(), j = length - 1; i < ans; i = stack.shift(), --j) {
    // 从后往前找不等于 val 的值来替换
    for (v = nums[j]; j >= 0; v = nums[--j]) {
      if (val !== v) {
        nums[i] = v;
        break;
      }
    }
  }
  return ans;
};
