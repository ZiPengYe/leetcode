/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  // 排序
  nums = nums.sort((a, b) => a - b);
  // 两个两个遍历
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]; 
  }
};
