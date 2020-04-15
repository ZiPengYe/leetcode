/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  while (k) {
    nums.unshift(nums.pop());
    k--;
  }
};