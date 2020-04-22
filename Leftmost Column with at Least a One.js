/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = (binaryMatrix) => {
  const [yLen, xLen] = binaryMatrix.dimensions();
  let ans = -1;
  let x = xLen - 1;
  let y = 0;
  while (x >= 0 && y < yLen) {
    const v = binaryMatrix.get(y, x);
    if (v) ans = x--;
    else y++;
  }
  return ans;
};