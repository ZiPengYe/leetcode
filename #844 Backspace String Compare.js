/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  let i = S.length - 1,
    j = T.length - 1;
  // 记录退格数量
  let s = t = 0;

  while (i >= 0 || j >=0) {
    
    // 处理 S 的退格操作
    while (i >= 0) {
      if (S[i] === '#') {
        // 是退格符
        ++s;
        --i;
      } else if (s > 0) {
        // 退格
        --s;
        --i;
      } else {
        break;
      }
    }
    
    // 处理 T 的退格操作
    while (j >= 0) {
      if (T[j] === '#') {
        ++t;
        --j;
      } else if (t > 0) {
        --t;
        --j;
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0) {
      // 都还有字符, 判断当前字符
      if (S[i] !== T[j]) {
        return false;
      }
    } else if (i >= 0 || j >= 0) {
      // 其中一个有字符
      return false;
    }
    --i;
    --j;
  }
  return true;
};
