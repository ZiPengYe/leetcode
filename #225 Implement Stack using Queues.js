class MyStack extends Array {
  /**
   * Initialize your data structure here.
   */
  // constructor() {}
  
  /**
   * Push element x onto stack. 
   * @param {number} x
   * @return {void}
   */
  // push(x) {}

  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    for (let i = this.length; i > 1; i--) {
      this.push(this.shift());
    }
    return this.shift();
  }

  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    for (let i = this.length; i > 1; i--) {
      this.push(this.shift());
    }
    const val = this.shift();
    this.push(val);
    return val;
  }

  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return this.length === 0;
  }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */