class FirstUnique {
  /**
   * @param {number[]} nums
  */
  constructor(nums) {
    this.head = this.tail = {
      val: -1,
      prev: null,
      next: null,
    };
    this.map = {};
    nums.forEach(e => this.add(e));
  }

  /**
   * @return {number}
   */
  showFirstUnique() {
    return (this.head.next || this.head).val;
  }

  /** 
   * @param {number} value
   * @return {void}
   */
  add(value) {
    if (this.map[value]) {
      for (let p = this.head.next; p; p = p.next) {
        if (p.val !== value) continue;
        p.prev.next = p.next;
        if (p.next === null) this.tail = p.prev; 
        else p.next.prev = p.prev;
        break;
      }
    } else {
      this.map[value] = true;
      this.tail.next = {
        val: value,
        prev: this.tail,
        next: null,
      };
      this.tail = this.tail.next;
    }
  }
}

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */