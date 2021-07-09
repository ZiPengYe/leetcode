/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const d = [];
  for (const num of nums) {
    if (!d.length || num > d[d.length - 1]) {
      d.push(num);
    } else {
      let [left, right] = [0, d.length - 1];
      let loc = right;
      while (left <= right) {
        const mid = (left + right) >>> 1;
        if (d[mid] >= num) {
          loc = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      d[loc] = num;
    }
  }

  return d.length;
};
