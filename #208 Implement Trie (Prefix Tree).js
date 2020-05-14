class Trie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
  }

  /**
   * Inserts a word into the trie. 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    this[word] = true;
  }

  /**
   * Returns if the word is in the trie. 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return Boolean(this[word]);
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const { length } = prefix;
    return Object.keys(this).some((key) => {
      for (let i = 0; i < length; i++) {
        if (prefix[i] !== key[i]) return false;
      }
      return true;
    });
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */