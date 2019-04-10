/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
  // 找到最高 和 次高 以及 最高的下标
  let max = 0, secondMax = 0, index = 0;
  for(let i = 0; i < nums.length; i++) {
    if(max < nums[i]) {
      secondMax = max;
      max = nums[i];
      index = i;
    } else if(secondMax < nums[i]) {
      secondMax = nums[i];
    }
  }
  return 2*secondMax <= max ? index : -1;
};
