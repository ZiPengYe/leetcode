/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const { length } = nums;
  // 前一个不一样的值的索引
  let pi = 0;
  // 从第一个开始遍历
  for(let i = 1, [pv, v] = nums; i < length; v = nums[++i]) {
    // 值不一样，则赋值，不一样值索引+1
    if (v !== pv) {
      nums[++pi] = pv = v;
    }
  }
  return pi + 1;
};
