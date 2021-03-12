/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => nums.reduce(
  (acc, val) => acc - val,
  nums.length * (nums.length + 1) / 2,
);