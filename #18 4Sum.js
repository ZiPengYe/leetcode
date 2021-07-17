/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let a = 0, end = len - 3; a < end; ++a) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
    if (nums[a] + nums[end] + nums[len - 2] + nums[len - 1] < target) continue;
    for (let b = a + 1, end = len - 2; b < end; ++b) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      if (nums[a] + nums[b] + nums[b + 1] + nums[b + 2] > target) break ;
      if (nums[a] + nums[b] + nums[end] + nums[len - 1] < target) continue;
      let left = b + 1,
        right = len - 1;
      while (left < right) {
        const sum = nums[a] + nums[b] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[a], nums[b], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            ++left;
          }
          ++left;
          while (left < right && nums[right] === nums[right - 1]) {
            --right;
          }
          --right;
        } else if (sum < target) {
          ++left;
        } else {
          --right;
        }
      }
    }
  }
  return ans;
};
