/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  // 升序数组集
  const dp = [];
  // 数组长度
  let len = 0;
  for(let num of nums) {
    // 当前下标
    let i = 0, r = len;

    // 二分查找 找 当前数 在 升序数组集中 可 替换 的下标
    while (i !== r) {
      let mid = Math.floor((i + r) / 2);
      if (num > dp[mid]) i = mid + 1;
      else r = mid;
    }

    // 替换
    dp[i] = num;
    // 如果 下标 到数组长度, 则更新长度
    if(i === len) len++;
  }
  return len;
};