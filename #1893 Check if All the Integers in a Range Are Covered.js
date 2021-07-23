/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = (ranges, left, right) => {
  // 差分数组, 长度为区间范围 +1
  const diff = Array(52).fill(0);
  for (const [start, end] of ranges) {
    ++diff[start];
    --diff[end + 1];
  }

  // 区间值计数
  let sum = 0;
  for (let i = 1; i < 51; ++i) {
    sum += diff[i];
    if (left <= i && i <= right && sum <= 0) {
      return false;
    }
  }
  return true;
};
