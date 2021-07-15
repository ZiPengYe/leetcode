/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
  const len = triangle.length;
  const f = [Array(len).fill(0), Array(len).fill(0)];
  f[0][0] = triangle[0][0];
  
  for (let i = 1; i < len; ++i) {
    const [curr, prev] = [i % 2, 1 - i % 2];
    f[curr][0] = f[prev][0] + triangle[i][0];
    for (let j = 1; j < i; ++j) {
      f[curr][j] = Math.min(f[prev][j - 1], f[prev][j]) + triangle[i][j];
    }
    f[curr][i] = f[prev][i - 1] + triangle[i][i];
  }
  return Math.min(...f[(len - 1) % 2]);
};
