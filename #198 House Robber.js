/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let ans = 0;
  for (let i = 0, prev = ans; i < nums.length; i++) {
    let tmp = ans;
    ans = Math.max(prev + nums[i], ans);
    prev = tmp;
  }
  return ans;
};