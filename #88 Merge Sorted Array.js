/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  // 换到各数组尾部下标
  m--, n--;
  // 从尾部开始排
  for(let i = m + n +1; i >= 0 && (m|n) >= 0; i--) {
    if(nums1[m] <= nums2[n]) nums1[i] = nums2[n--];
    else nums1[i] = nums1[m--];
  }
  // 把剩下的补上
  if(n >= 0) nums1.splice(0, n +1, ...nums2.slice(0, n +1));
};
