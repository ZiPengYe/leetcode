/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const len = nums.length;
  let l = 0,
    r = len - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (nums[mid] === target) {
      return mid;
    }
    // 选转点 不在左侧
    if (nums[0] <= nums[mid]) {
      // 目标值 在 0 到 mid
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 目标值 在 mid 到 len - 1
      if (nums[mid] < target && target <= nums[len - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
