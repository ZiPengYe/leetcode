/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const map = { 0: 1 };
  let count = 0;
  for(let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) count += map[sum - k];
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
};