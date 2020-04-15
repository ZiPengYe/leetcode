/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = {};
  return strs.reduce((acc, cur) => {
    let value = 0;
    for (let i = 0; i < cur.length; i++) {
      value += (cur.codePointAt(i) - 64) ** 5;
    }
    value *= cur.length;
    let index = map[value];
    if (typeof index === 'undefined') {
      index = map[value] = acc.length;
    }
    if (!acc[index]) acc[index] = [];
    acc[index].push(cur);
    return acc;
  }, []);
};