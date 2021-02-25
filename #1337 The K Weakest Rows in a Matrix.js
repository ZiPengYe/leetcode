/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat
  .map((val) => val.indexOf(0))
  .sort()
  .slice(0, k);