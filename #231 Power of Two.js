/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  if (n < 1) n = 1 / n;
  return /^10*$/g.test(n.toString(2));
};