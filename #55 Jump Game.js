/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let lastI = nums.length - 1;
  for (let i = lastI; i >= 0; i--) {
    if (i + nums[i] >= lastI) lastI = i;
  }
  return lastI === 0;
};