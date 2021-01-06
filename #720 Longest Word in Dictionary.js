/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = words => words
  .sort((a, b) => b.length - a.length || (a > b ? 1 : -1))
  .find((value, index, array) => {
    for (let i = value.length - 1; i > 0; i--) {
      index = array.indexOf(value.substring(0, i), index);
      if (index === -1) return false;
    }
    return true;
  }) || '';