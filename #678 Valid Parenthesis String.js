/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  let min = 0;
  let max = 0;
  for (let char of s) {
    min += char === '(' ? 1 : -1;
    max += char !== ')' ? 1 : -1;
    if (max < 0) return false;
    min = Math.max(0, min);
  }
  return min === 0;
};