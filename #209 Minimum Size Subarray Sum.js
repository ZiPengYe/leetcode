/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  const len = nums.length;
  if (!len) return 0;

  let ans = len + 1,
    sum = 0,
    left = 0,
    right = 0;

  // 双指针
  while (right < len) {
    sum += nums[right];
    
    // 符合条件时, 尝试 左指针 右移
    while (sum >= target) {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      ++left;
    }

    ++right;
  }

  return ans === len + 1 ? 0 : ans;
};
