/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const map = {};
  for (let i = 0; i < order.length; ++i) {
    map[order.charAt(i)] = i;
  }

  search: for (let i = 0; i < words.length - 1; ++i) {
    const word1 = words[i];
    const word2 = words[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); ++j) {
      if (word1.charAt(j) !== word2.charAt(j)) {
        if (map[word1.charAt(j)] > map[word2.charAt(j)]) {
          return false;
        }
        continue search;
      }
    }

    if (word1.length > word2.length) {
      return false;
    }
  }
  return true;
};