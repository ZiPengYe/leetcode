/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
  [pattern, str] = [pattern.split('').map(e => `_${e}`), str.split(' ')];
  const { length } = pattern;
  if (length !== str.length) return false;
  const map = {};
  for (let i = 0; i < length; i++) {
    if (map[pattern[i]] || map[str[i]]) {
      if (map[pattern[i]] !== str[i] || map[str[i]] !== pattern[i]) return false;
    } else {
      [map[pattern[i]], map[str[i]]] = [str[i], pattern[i]];
    }
  }
  return true;
};