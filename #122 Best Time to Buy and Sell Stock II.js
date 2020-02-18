/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  return Math.abs(prices.reduce((acc, cur, idx) => acc + Math.min(0, cur - (prices[idx + 1] || 0)), 0));
};
