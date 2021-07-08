/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const len = nums.length;
  let [left, right] = [0, 0];
  while (right < len) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      ++left;
    }
    ++right;
  }
}