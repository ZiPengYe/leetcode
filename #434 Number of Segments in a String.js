/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function(s) {
  return s.split(' ').filter(e => e).length;
};
