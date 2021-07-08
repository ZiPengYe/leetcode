class StockSpanner {
  constructor() {
    this.prices = [];
    this.weights = [];
  }

  /** 
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let weight = 1;
    while (
      this.prices.length
      && this.prices[this.prices.length - 1] <= price
    ) {
      this.prices.pop();
      weight += this.weights.pop();
    }
    this.prices.push(price);
    this.weights.push(weight);
    return weight;
  };
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */