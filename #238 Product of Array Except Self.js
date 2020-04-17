/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const { length } = nums;
  const L = Array(length).fill(1);
  const R = Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
    R[length - i - 1] = R[length - i] * nums[length - i];
  }
  return L.map((val, idx) => val * R[idx]);
};