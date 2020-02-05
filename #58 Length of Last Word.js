/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const words = s.split(' ');
  while(words.length) {
    const { length } = words.pop();
    if (length) return length;
  }
  return 0;
};
