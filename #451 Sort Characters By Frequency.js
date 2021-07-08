/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  const map = {};
  for (let i = s.length - 1; i >= 0; i--) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .reduce((acc, cur) => acc.padEnd(acc.length + map[cur], cur), '');
};