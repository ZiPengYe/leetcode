/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let [left, right] = [0, nums.length];
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
