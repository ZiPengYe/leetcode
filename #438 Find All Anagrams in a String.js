const A_CHARCODE = 'a'.charCodeAt();
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const m = s.length,
    n = p.length,
    ans = [];
  if (m < n) return ans;

  // s字符计数集
  const sCount = Array(26).fill(0);
  // p字符计数集
  const pCount = Array(26).fill(0);

  // p字符计数
  for (let i = 0; i < n; ++i) {
    ++pCount[p.charCodeAt(i) - A_CHARCODE];
  }

  // 双指针
  let left = 0;
  for (let right = 0; right < m; ++right) {
    // s字符计数
    const rightIdx = s.charCodeAt(right) - A_CHARCODE;
    ++sCount[rightIdx];

    // 当 s字符计数 超过 p字符计数, 则 左指针 右移
    while (sCount[rightIdx] > pCount[rightIdx]) {
      const leftIdx = s.charCodeAt(left) - A_CHARCODE;
      --sCount[leftIdx];
      ++left;
    }

    // 符合条件
    if (right - left + 1 === n) {
      ans.push(left);
    }
  }

  return ans;
};
