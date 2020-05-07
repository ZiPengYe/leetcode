/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let l = 1, r = n;
    while (l < r) {
      const m = l + Math.floor((r - l) / 2);
      if (isBadVersion(m)) r = m;
      else l = m + 1;
    }
    return l;
  };
};