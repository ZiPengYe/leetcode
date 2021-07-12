class MedianFinder {
  /**
  * initialize your data structure here.
  */
  constructor() {
    this.nums = [];
  }
  /**
  * @param {number} num
  * @return {void}
  */
  addNum(num) {
    if (this.nums.length === 0) {
      this.nums.push(num);
      return
    }
    const idx = this.findInsertIndex(0, this.nums.length - 1, num);
    this.nums.splice(idx, 0, num);
  }

  /**
  * @return {number}
  */
  findMedian() {
    const len = this.nums.length;
    const mid = len >>> 1;

    return len & 1
      ? this.nums[mid]
      : (this.nums[mid - 1] + this.nums[mid]) / 2
  }

  /**
   * @param {number} left
   * @param {number} right
   * @param {number} num
   * @return {number}
   */
  findInsertIndex(left, right, num) {
    if (num >= this.nums[right]) return right + 1;
    if (num <= this.nums[left]) return left;
    if (left === right) return right;
    if (right - left === 1) return right;

    const mid = (left + right) >>> 1;
    if (num >= this.nums[mid]) return this.findInsertIndex(mid, right, num);
    return this.findInsertIndex(left, mid, num)
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
