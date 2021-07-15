/**
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} lower
 * @return {number}
 */
const binarySearch = (nums, target, lower) => {
  let [left, right] = [0, nums.length - 1],
    idx = nums.length;
  while (left <= right) {
    const mid = (left + right) >>> 1;
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      idx = mid;
    } else {
      left = mid + 1;
    }
  }
  return idx;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) return [leftIdx, rightIdx];
  return ans;
};
