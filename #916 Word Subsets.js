/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const wordSubsets = (A, B) => {
  const charCount = str => {
    const count = Array(26).fill(0);
    const aCodePoint = 'a'.codePointAt(0);
    for (const char of str) {
      count[char.codePointAt(0) - aCodePoint]++;
    }
    return count;
  };
  const BMaxCount = B
    .map(charCount)
    .reduce((acc, val) => {
      for (let i = 0; i < acc.length; i++) {
        acc[i] = Math.max(acc[i], val[i]);
      }
      return acc;
    }, Array(26).fill(0));
  return A
    .filter((value) => {
      const ACount = charCount(value);
      for (let i = 0; i < ACount.length; i++) {
        if (ACount[i] < BMaxCount[i]) return false;
      }
      return true;
    });
};