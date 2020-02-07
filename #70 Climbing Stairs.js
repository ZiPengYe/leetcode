// 记忆
const store = [];
/**
 * 理解成下楼梯, n为总阶数, i为当前阶数
 * @param {number} n
 * @param {number} i
 * @return {number}
 */
const climbStairs = function(n, i = n) {
  if (i < 0) return 0;
  // 刚好到达 0阶
  if (i === 0) return 1;
  // 读取记忆
  if (store[i]) return store[i];
  // 存储记忆, 模拟 下1阶, 下2阶
  store[i] = climbStairs(n, i - 1) + climbStairs(n, i - 2);
  return store[i];
};
