/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let left = 0,
    right = height.length - 1;
  let ans = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    ans = Math.max(ans, area);
    if (height[left] <= height[right]) {
      ++left;
    } else {
      --right;
    }
  }
  return ans;
};
