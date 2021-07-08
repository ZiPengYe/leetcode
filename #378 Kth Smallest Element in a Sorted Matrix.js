/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  const len = matrix.length;

  const check = (mid) => {
    let [i, j] = [len - 1, 0];
    let num = 0;
    while (i >= 0 && j < len) {
      if (matrix[i][j] <= mid) {
        num += i + 1;
        ++j;
      } else {
        --i;
      }
    }
    return num >= k;
  }

  let [left, right] = [matrix[0][0], matrix[len - 1][len - 1]];
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};