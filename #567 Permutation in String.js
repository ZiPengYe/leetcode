/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;
  const map = {};
  for (let i = s1.length - 1; i >= 0; i--) {
    map[s1[i]] = (map[s1[i]] || 0) + 1;
  }
  for (
    let l = 0,
      r = 0,
      c = s1.length,
      len = s2.length;
    r < len;
  ) {
    if (map[s2[r]] > 0) c--;
    map[s2[r]] = (map[s2[r]] || 0) - 1;
    r++;
    if (c === 0) return true;
    if (r - l === s1.length) {
      if (map[s2[l]] >= 0) c++;
      map[s2[l]]++;
      l++;
    }
  }
  return false;
};