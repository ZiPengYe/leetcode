/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  nums.sort((a, b) => {
    let sa = sb = 10;
    while (sa <= a) {
      sa *= 10;
    }
    while (sb <= b) {
      sb *= 10;
    }
    return (sa * b + a) - (sb * a + b);
  });
  return nums[0] === 0
    ? '0'
    : nums.join('');
};