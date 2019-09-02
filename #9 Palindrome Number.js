/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    // 将x头部抽一半出来
    let revert = 0;
    while(x > revert) {
      revert = 10 * revert + x % 10;
      x = parseInt(x / 10, 10);
    }
    return x === revert || x === parseInt(revert / 10, 10);
};