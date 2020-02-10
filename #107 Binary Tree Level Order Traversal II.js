/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// TODO 待优化
const levelOrderBottom = function(root, depth = 0, arr = []) {
  if (!root) return [];
  arr[depth] = arr[depth] || [];
  arr[depth].push(root.val);
  levelOrderBottom(root.left, depth + 1, arr);
  levelOrderBottom(root.right, depth + 1, arr);
  if (depth === 0) return arr.reverse();
};