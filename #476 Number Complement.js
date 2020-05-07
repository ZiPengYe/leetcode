/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num =>
  num ^ parseInt(Array(num.toString(2).length).fill(1).join(''), 2);