/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = (nums) => {
  if (nums.length < 2) {
    return nums.length;
  }
  let up = down = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1);
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down);
    }
  }
  return Math.max(up, down);
};