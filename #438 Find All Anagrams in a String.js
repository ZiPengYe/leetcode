/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const ans = [];
  if (s.length < p.length) return ans;
  const map = {};
  for (let i = p.length - 1; i >= 0; i--) {
    map[p[i]] = (map[p[i]] || 0) + 1;
  }
  for (
    let l = 0,
      r = 0,
      c = p.length,
      len = s.length;
    r < len;
  ) {
    if (map[s[r]] > 0) c--;
    map[s[r]] = (map[s[r]] || 0) - 1;
    r++;
    if (c === 0) ans.push(l);
    if (r - l === p.length) {
      if (map[s[l]] >= 0) c++;
      map[s[l]]++;
      l++;
    }
  }
  return ans;
};