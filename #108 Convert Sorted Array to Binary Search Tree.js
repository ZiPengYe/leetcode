/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// TODO 待优化
const sortedArrayToBST = function(nums) {
  const { length } = nums;
  if (length === 0) return null;
  const mid = parseInt(nums.length / 2, 10);
  return {
    val: nums[mid],
    left: sortedArrayToBST(nums.slice(0, mid)),
    right: sortedArrayToBST(nums.slice(mid + 1, length)),
  };
};