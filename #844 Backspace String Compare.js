/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  for (
    let i = S.length - 1, j = T.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    let sb = 0;
    let tb = 0;
    while (S[i] === '#' || sb) {
      if (S[i] === '#') sb++;
      else sb--;
      i--;
    }
    while (T[j] === '#' || tb) {
      if (T[j] === '#') tb++;
      else tb--;
      j--;
    }
    if (S[i] !== T[j]) return false;
  }
  return true;
};