/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
class Solution {
  constructor(radius, x_center, y_center) {
    this.r = radius;
    this.x = x_center;
    this.y = y_center;
  }

  /**
   * @return {number[]}
   */
  randPoint() {
    const d = this.r * Math.sqrt(Math.random());
    const θ = Math.random() * 2 * Math.PI;
    return [d * Math.cos(θ) + this.x, d * Math.sin(θ) + this.y];
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */