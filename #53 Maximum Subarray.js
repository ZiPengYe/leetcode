/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  // 当前最大和, 中间变量
  let curMax = 0;
  return nums.reduce((acc, cur) => {
    curMax = Math.max(cur, curMax + cur);
    // 当前最大和 或 历史最大和
    return Math.max(curMax, acc);
  }, nums[0]);
}
