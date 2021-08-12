const A_CHAR_CODE = 'a'.charCodeAt();

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = new Map();

  for (const str of strs) {
    const count = Array(26).fill(0);
    for (const char of str) {
      ++count[char.charCodeAt() - A_CHAR_CODE];
    }
    const countStr = count.toString();
    if (!map.has(countStr)) map.set(countStr, []);
    map.get(countStr).push(str);
  }

  return Array.from(map.values());
};
