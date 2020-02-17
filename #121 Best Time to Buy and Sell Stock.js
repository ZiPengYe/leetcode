/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let [min] = prices;
  // 从前往后找 最小值, 及作差 最小值
  return Math.abs(prices.reduce((acc, cur) => {
    min = Math.min(min, cur);
    return Math.min(acc, min - cur);
  }, 0));
};
