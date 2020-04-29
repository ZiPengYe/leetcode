/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[t[i]]) return false;
    map1[s[i]] = i;
    map2[t[i]] = i;
  }
  return true;
};