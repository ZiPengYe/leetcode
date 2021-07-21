class Solution {
  /**
  * @param {number[]} nums
  */
  constructor(nums) {
    this.nums = nums;
    this.original = [...nums];
  }

  /**
  * Resets the array to its original configuration and return it.
  * @return {number[]}
  */
  reset() {
    this.nums = this.original;
    return this.original = [...this.original];
  }

  /**
  * Returns a random shuffling of the array.
  * @return {number[]}
  */
  shuffle() {
    for (let i = 0, len = this.nums.length; i < len; ++i) {
      const j = ((Math.random() * (len - i)) >>> 0) + i;
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums;
  }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
