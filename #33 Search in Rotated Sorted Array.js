/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  // 二分找 转点
  let i = 0;
  let j = nums.length - 1;
  while(i < j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] > nums[j]) i = mid + 1;
    else j = mid;
  }
  const rotate = i;
  // 二分找 目标值
  i = 0;
  j = nums.length - 1;
  while(i <= j) {
    const mid = Math.floor((i + j) / 2);
    const realMid = (mid + rotate) % nums.length;
    if (nums[realMid] === target) return realMid;
    if (nums[realMid] < target) i = mid + 1;
    else j = mid - 1;
  }
  return -1;
};