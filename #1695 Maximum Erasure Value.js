/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = nums => {
  let max = 0;
  const sums = nums.reduce((acc, val, idx) => {
    acc[idx + 1] = acc[idx] + val;
    return acc;
  }, [0]);
  for (
    let sign = {}, left = 0, right = 0;
    right < nums.length;
    sign[nums[left++]] = false
  ) {
    for (;right < nums.length; right++) {
      if (sign[nums[right]]) break;
      sign[nums[right]] = true;
    }
    const sum = sums[right] - sums[left];
    max = Math.max(max, sum);
    if (right >= nums.length) break;
    while (left < right && nums[left] !== nums[right]) {
      sign[nums[left++]] = false;
    }
  }
  return max;
};