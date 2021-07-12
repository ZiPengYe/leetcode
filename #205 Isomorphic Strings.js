/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const sIdx = Array(128);
  const tIdx = Array(128);
  for (let i = 0, len = s.length; i < len; ++i) {
    if (sIdx[s.charCodeAt(i)] !== tIdx[t.charCodeAt(i)]) return false;
    sIdx[s.charCodeAt(i)] = i;
    tIdx[t.charCodeAt(i)] = i;
  }
  return true;
};
