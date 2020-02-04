// 本地化
const store = ['1'];
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  // 从存储中获取
  let ans = store[n - 1] || '';
  if (ans) return ans;
  // 递归
  ans = countAndSay(n - 1)
  // 用(匹配长度 + 匹配值)替换 (连续相同的匹配值)
    .replace(/(\d)\1*/g, (match) => match.length + match[0]);
  // 存储答案
  store[n - 1] = ans;
  return ans;
};
