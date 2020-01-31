class Window {
  constructor() {
      this.count = {};
      this.nonzero = 0;
  }
  add(x) {
    this.count[x] = (this.count[x] || 0) + 1;
    if (this.count[x] === 1) this.nonzero += 1;
  }
  remove(x) {
    this.count[x] = (this.count[x] || 0) - 1;
      if (this.count[x] === 0) this.nonzero -= 1;
  }
}
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const subarraysWithKDistinct = function(A, K) {
  const window1 = new Window();
  const window2 = new Window();
  let left1 = 0;
  let left2 = 0;
  return A.reduce((acc, cur) => {
      window1.add(cur);
      window2.add(cur);
      while (window1.nonzero > K) {
          window1.remove(A[left1]);
          left1 += 1;
      }
      while (window2.nonzero >= K) {
          window2.remove(A[left2]);
          left2 += 1;
      }
      return acc + left2 - left1;
  }, 0);
};
