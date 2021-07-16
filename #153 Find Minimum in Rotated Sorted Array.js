/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
