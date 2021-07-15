/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const len = nums.length;
  const ans = [];
  const backtrack = (first = 0) => {
    if (first === len) {
      ans.push([...nums]);
    }

    for (let i = first; i < len; ++i) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  };

  backtrack();
  return ans;
};
