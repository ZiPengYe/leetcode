const bit = [0];
const bitCount = i => {
  if (typeof bit[i] === 'undefined') {
    bit[i] = bitCount(i >> 1) + (i & 1);
  }
  return bit[i];
}
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
