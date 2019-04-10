/**
 * @param {number} N
 * @return {boolean}
 */
const map = new Set();
// 缓存 2的30次幂数到 map
for(let i = 0; i < 31; i++)
  map.add(count(1 << i));
const reorderedPowerOf2 = function(N) {
  const c = count(N);
  return map.has(c);
};

function count(N) {
  let ans = 0;
  // 各 数 的计数, 按 对应位数 存储
  for(; N > 0; N = Math.floor(N / 10))
    ans += Math.pow(10, N % 10);
  return ans;
}
