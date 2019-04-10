/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // 使用 hashMap
  const map = {};
  // 遍历 数组
  for (let i = 0; i < nums.length - 1; i++) {
    // 将当前数 对应的 答案 以及 下标 以 {key:答案, value:下标} 的形式 存入 hashMap
    map[target-nums[i]] = i;
    // 如果 下个数 存在于 hashMap 的 key 则, 匹配到了
    if (nums[i+1] in map) return [map[nums[i+1]], i+1];
  }
};
