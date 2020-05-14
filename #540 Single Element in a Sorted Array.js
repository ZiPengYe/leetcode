/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (m % 2) {
      if (nums[m] === nums[m - 1]) {
        l = m + 1;
      } else {
        r = m;
      }
    } else {
      if (nums[m] === nums[m + 1]) {
        l = m + 2;
      } else {
        r = m;
      }
    }
  }
  return nums[l];
};