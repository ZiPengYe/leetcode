/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0, end = nums.length - 2; i < end; ++i) {
    let k = i + 2;
    for (let j = i + 1, end = nums.length - 1; j < end && nums[i] !== 0; ++j) {
      while (k < len && nums[i] + nums[j] > nums[k]) ++k;
      count += k - j - 1;
    }
  }
  return count;
};
