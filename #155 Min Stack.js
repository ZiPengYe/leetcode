/**
 * initialize your data structure here.
 */
class MinStack extends Array {
  constructor() {
    super();
    this.min = null;
  }

  push(x) {
    Array.prototype.push.call(this, x);
    this.min = Math.min(this.min === null ? Infinity : this.min, x);
  }

  pop() {
    Array.prototype.pop.call(this);
    this.min = Math.min.apply(this, this) || null;
  }

  /**
   * @return {number}
   */
  top() {
    return this[this.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */