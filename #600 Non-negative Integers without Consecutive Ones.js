const LEN = 32;
const dp = Array(LEN);
/**
 * @refer https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/solution/bu-han-lian-xu-1de-fei-fu-zheng-shu-by-leetcode/531334
 * 找规律, 每x位, 就会有 f(x) = f(x - 1) + f(x - 2) 个不连续1
 */
dp[0] = 1, dp[1] = 2;
for (let i = 2; i < LEN; ++i) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
/**
 * @param {number} n
 * @return {number}
 */
const findIntegers = (n) => {
  let ans = 0;
  // 前一位 0 或 1
  let prev_bit = 0;
  // 从左到右
  for (let i = n.toString(2).length; i >= 0; --i) {
    if ((n & (1 << i)) !== 0) {
      // 当前位是 1
      ans += dp[i];
      // 连续 1, 弃之
      if (prev_bit === 1) {
        --ans;
        break;
      }
      prev_bit = 1;
    } else {
      // 当前位是 0
      prev_bit = 0;
    }
  }

  return ans + 1;
};

