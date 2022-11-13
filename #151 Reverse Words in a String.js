/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s.trim().split(/\s+/).reverse().join(' ');
};
