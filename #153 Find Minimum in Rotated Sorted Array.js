/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const p = l + Math.floor((r - l) / 2);
    if (nums[p] < nums[r]) {
      r = p;
    } else {
      l = p + 1;
    }
  }
  return nums[l];
};
