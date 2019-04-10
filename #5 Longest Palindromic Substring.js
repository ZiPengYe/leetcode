/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  const P = manacher(s);
  const l = P.length;
  // 最大回文半径R, 对应字符串下标C
  let R = 0, C = 0;
  for(let i = 1; i < l-1; i++) {
    if(R < P[i]) {
      R = P[i];
      C = i;
    }
  }
  return s.substring((C-R)/2, (C+R)/2);
};

// Manacher算法 https://zh.wikipedia.org/wiki/%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2#Python
function manacher(s) {
  const T = '^#' + s.split('').join('#') + '#$';
  const l = T.length;
  const P = Array(l).fill(0);
  let R = 0, C = 0;
  for(let i = 1; i < l-1; i++) {
    if(i < R) P[i] = Math.min(P[2*C - i], R - i);
    while(T[i + (P[i]+1)] === T[i - (P[i]+1)]) P[i]++;
    if(P[i] + i > R) {
      R = P[i] + i;
      C = i
    }
  }
  return P;
}