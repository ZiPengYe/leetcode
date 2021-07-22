/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = (nums) => {
  const len = nums.length;
  const maxLeft = Array(len),
    minRight = Array(len);

  let [m] = nums;
  // 从左扫描, 记录最大值
  for (let i = 0; i < len; ++i) {
    m = Math.max(m, nums[i]);
    maxLeft[i] = m;
  }

  m = nums[len - 1];
  // 从右扫描, 记录最小值
  for (let i = len - 1; i >= 0; --i) {
    m = Math.min(m, nums[i]);
    minRight[i] = m;
  }

  // 找到左边的最大值 <= 右边的最小值
  for (let i = 1; i < len; ++i) {
    if (maxLeft[i - 1] <= minRight[i]) {
      return i;
    }
  }

  throw new Error(-1);
};
