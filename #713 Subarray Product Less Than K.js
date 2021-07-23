/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;
  const len = nums.length;
  let prod = 1,
    ans = left = 0;

  // 双指针
  for (let right = 0; right < len; ++right) {
    prod *= nums[right];
    // 左指针 右移
    while (prod >= k) {
      prod /= nums[left];
      ++left;
    }
    // https://leetcode-cn.com/problems/subarray-product-less-than-k/solution/cheng-ji-xiao-yu-kde-zi-shu-zu-by-leetcode/781754
    ans += right - left + 1;
  }

  return ans;
};
