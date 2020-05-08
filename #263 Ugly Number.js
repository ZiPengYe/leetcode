/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = (num) => {
  if (num <= 0) return false;
  for(const p of [2, 3, 5])
    while(num % p === 0)
      num /= p;
  return num === 1;
};