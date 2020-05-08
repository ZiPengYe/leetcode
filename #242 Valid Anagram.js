/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const { length } = s;
  if (length !== t.length) return false;
  const map = {};
  for (let i = 0; i < length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (let i = 0; i < length; i++) {
    if (map[t[i]]) map[t[i]]--;
    else return false;
  }
  return Object.values(map).every(e => e === 0);
};