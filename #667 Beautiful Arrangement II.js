/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = (n, k) => {
  const ans = Array(n);
  for (let i = 1; i < n - k; ++i) {
    ans[i - 1] = i;
  }
  let l = 1;
  let r = k + 1;
  for (let i = n - k - 1; i < n; ++i) {
    if ((i - n - k - 1) % 2 === 0) {
      ans[i] = l++;
    } else {
      ans[i] = r--;
    }
    ans[i] += n - k - 1;
  }
  return ans;
};