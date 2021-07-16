/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let a = 0; a < len; ++a) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    let c = len - 1;
    const target = -nums[a];
    forB: for (let b = a + 1; b < len; ++b) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      while (b < c && nums[b] + nums[c] > target) --c;
      if (b === c) break forB;
      if (nums[b] + nums[c] === target) {
        ans.push([nums[a], nums[b], nums[c]]);
      }
    }
  }
  return ans;
};
