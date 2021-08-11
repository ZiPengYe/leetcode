/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = (nums) => {
  let ans = 0;
  const len = nums.length;
  const map = Array(len).fill(0).map(() => new Map());
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < i; ++j) {
      const d = nums[i] - nums[j];
      const cnt = map[j].get(d) || 0;
      ans += cnt;
      map[i].set(d, (map[i].get(d) || 0) + cnt + 1);
    }
  }
  return ans;
};
