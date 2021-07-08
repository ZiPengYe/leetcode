/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let [left, right] = [0, nums.length];
  while (left <= right) {
    const pivot = left + ((right - left) >> 1);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
};