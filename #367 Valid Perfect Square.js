/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let min = 1, max = num;
  while (min <= max)  {
    const mid = (min + max) >>> 1;
    if (mid * mid === num) return true;
    else if (mid * mid < num) min = mid + 1;
    else max = mid - 1;
  }
  return false;
};