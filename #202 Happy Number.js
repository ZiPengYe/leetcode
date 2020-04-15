const loopMap = {};
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const countMap = { [n]: 1 };
  while(!/^10*$/.test(n)) {
    if (loopMap[n]) return false;
    n = ('' + n).split('').reduce((acc, cur) => acc + cur**2, 0);
    countMap[n] = 1 + countMap[n] >>> 0;
    if (countMap[n] > 1) {
      loopMap[n] = true;
      return false;
    }
  }
  return true;
};