/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = nums => {
  let dup = 0, missing = 1;
  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      dup = Math.abs(num);
    } else {
      nums[Math.abs(num) - 1] *= -1;
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
    }
  }
  return [dup, missing];
};