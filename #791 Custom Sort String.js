/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = (order, s) => {
  const arr = s.split('');
  arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return arr.join('');
};
