/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (i > k) map[nums[i - k - 1]] = false;
    if (map[nums[i]]) return true;
    map[nums[i]] = true;
  }
  return false;
};