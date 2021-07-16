/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = m + n - 1;
  while (left <= right) {
    const mid = left + ((right - left) >>> 1);
    const x = matrix[Math.floor(mid / n)][mid % n];
    if (x < target) {
      left = mid + 1;
    } else if (x > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
