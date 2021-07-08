const A_CHAR_CODE = 'a'.charCodeAt();
/**
 * @param {string} char
 * @return {number}
 */
const getCharCodeFromA = (char) => {
  return char.charCodeAt() - A_CHAR_CODE;
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  const [n, m] = [s1.length, s2.length];
  if (n > m) return false;
  // 统计字符集
  const cnt = Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    // s1 有的则 以减为标识
    --cnt[getCharCodeFromA(s1[i])];
    // s2 有的则 以加为标识
    ++cnt[getCharCodeFromA(s2[i])];
  }
  // 差异量 计数
  let diff = 0;
  // 计算差异量
  for (const c of cnt) {
    if (c !== 0) ++diff;
  }
  if (diff === 0) return true;
  for (let i = n; i < m; ++i) {
    // 开始滑窗, x为准备新增的字符, y为准备删去的字符
    const [x, y] = [getCharCodeFromA(s2[i]), getCharCodeFromA(s2[i - n])];
    // 如果字符相同
    if (x === y) continue;
    // 本来该字符量是匹配的, 则 diff +1
    if (cnt[x] === 0) ++diff;
    ++cnt[x];
    // 因为 新增的字符 而将该字符量匹配了, 则diff -1
    if (cnt[x] === 0) --diff;
    // 同理, 本来该字符量是匹配的, 则 diff +1
    if (cnt[y] === 0) ++diff;
    --cnt[y];
    if (cnt[y] === 0) --diff;
    if (diff === 0) return true;
  }
  return false;
};
