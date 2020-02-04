/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  const { length } = nums;
  const ans = nums.findIndex(e => e >= target);
  if (ans !== -1) return ans;
  return length;
};
