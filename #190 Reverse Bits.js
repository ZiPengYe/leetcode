/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = n => {
  const bits = n.toString(2);
  return parseInt([...Array(32 - bits.length).fill('0'), ...bits.split('')].reverse().join(''), 2);
  }