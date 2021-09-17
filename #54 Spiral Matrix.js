/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let [top, right, bottom, left] = [0, n - 1, m - 1, 0];
  const ans = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; ++i) {
      ans.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; ++i) {
      ans.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; --i) {
        ans.push(matrix[bottom][i]);
      }
      for (let i = bottom; i > top; --i) {
        ans.push(matrix[i][left]);
      }
    }
    [left, top, right, bottom] = [left + 1, top + 1, right - 1, bottom - 1];
  }
  return ans;
};
