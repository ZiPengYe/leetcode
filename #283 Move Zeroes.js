/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const { length } = nums;
  const trimZero = nums.filter(val => val);
  trimZero.forEach((val, idx) => {
    if (nums[idx] !== val) {
      nums[idx] = val;
    }
  });
  for (let i = trimZero.length; i < length; i++) {
    nums[i] = 0;
  }
}