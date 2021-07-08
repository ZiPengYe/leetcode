/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat
  .map((value, index) => {
    const civilianIndex = value.indexOf(0);
    return {
      value: civilianIndex === -1 ? value.length : civilianIndex,
      index,
    };
  })
  .sort((a, b) => b.value - a.value)
  .slice(0, k)
  .map(({index}) => index);