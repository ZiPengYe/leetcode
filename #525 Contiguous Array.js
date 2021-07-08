/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const map = {0: -1};
  let count = 0;
  return nums.reduce((acc, cur, idx, arr) => {
    count += nums[idx] ? 1 : -1;
    if (count in map) return Math.max(acc, idx - map[count]);
    map[count] = idx;
    return acc;
  }, 0);
};