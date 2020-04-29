class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.key = [];
    this.map = {};
  }

  updateKey(key) {
    const index = this.key.indexOf(key);
    if (index === -1) return false;
    this.key = [
      ...this.key.slice(0, index),
      ...this.key.slice(index + 1),
      this.key[index],
    ];
    return true;
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    this.updateKey(key);
    return this.map[key] || -1;
  }

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.updateKey(key)) {
      if (this.key.length === this.capacity)
        delete this.map[this.key.shift()];
      this.key.push(key);
    }
    this.map[key] = value;
  }
}