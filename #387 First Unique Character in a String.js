/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const { length } = s;
  const arr = [];
  for (let i = 0; i < length; i++) {
    const ascii = s[i].charCodeAt();
    arr[ascii] = typeof arr[ascii] === 'number'
      ? Infinity
      : i;
  }
  const ans = Math.min.apply(null, arr.filter(() => true));
  return ans === Infinity ? -1 : ans;
};