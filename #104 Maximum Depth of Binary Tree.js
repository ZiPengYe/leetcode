/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// TODO 待优化
const maxDepth = function(root, depth = 0) {
  // 如果没有当前节点, 则返回 深度
  if (!root) return depth;
  // 递归, 每个节点
  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
};