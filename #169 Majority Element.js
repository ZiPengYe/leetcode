/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const { length } = nums;
  const half = length / 2;
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
    if ((countMap[nums[i]] = 1 + (countMap[nums[i]] || 0)) > half) return nums[i];
  }
};