/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  let [first, second] = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; ++i) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }
  return second;
};
