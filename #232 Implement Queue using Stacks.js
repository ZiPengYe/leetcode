
class MyQueue extends Array {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    super();
    this._pop = Array.prototype.pop.bind(this);
  }

  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  // push(x) {}

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    let tmp = [];
    for (let i = this.length; i > 1; i--) {
      tmp.push(this._pop());
    }
    const val = this._pop();
    for(let i = tmp.length; i > 0; i--) {
      this.push(tmp.pop());
    }
    return val;
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    let tmp = [];
    for (let i = this.length; i > 1; i--) {
      tmp.push(this._pop());
    }
    const val = this._pop();
    this.push(val);
    for(let i = tmp.length; i > 0; i--) {
      this.push(tmp.pop());
    }
    return val;
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.length === 0;
  }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */