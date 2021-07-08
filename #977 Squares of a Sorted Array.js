/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const len = nums.length;
  const ans = Array(len);

  let [i, j, pos] = [0, len - 1, len - 1];
  while (i <= j) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      ans[pos] = nums[i] * nums[i];
      ++i;
    } else {
      ans[pos] = nums[j] * nums[j];
      --j;
    }
    --pos;
  }
  return ans;
};