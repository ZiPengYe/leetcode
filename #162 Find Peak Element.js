/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = (left + right) >>> 1;
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
