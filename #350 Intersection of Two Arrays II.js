/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const m = nums1.length,
    n = nums2.length,
    intersection = [];
  let idx1 = idx2 = 0;

  while (idx1 < m && idx2 < n) {
    if (nums1[idx1] < nums2[idx2]) ++idx1;
    else if (nums1[idx1] > nums2[idx2]) ++idx2;
    else {
      intersection.push(nums1[idx1]);
      [idx1, idx2] = [idx1 + 1, idx2 + 1];
    }
  }

  return intersection;
};
