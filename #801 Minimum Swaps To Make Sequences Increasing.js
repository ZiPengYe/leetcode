/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minSwap = (nums1, nums2) => {
  const len = nums1.length;
  let n1 = 0, s1 = 1;

  for (let i = 1; i < len; ++i) {
    let n2 = s2 = Number.MAX_VALUE;

    if (nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i]) {
      n2 = Math.min(n2, n1);
      s2 = Math.min(s2, s1 + 1);
    }

    if (nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i]) {
      n2 = Math.min(n2, s1);
      s2 = Math.min(s2, n1 + 1);
    }
    n1 = n2;
    s1 = s2;
  }
  return Math.min(n1, s1);
};
