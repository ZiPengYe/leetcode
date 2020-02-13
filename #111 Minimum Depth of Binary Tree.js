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
const minDepth = function(root) {
  if (!root) return 0;
  const { left, right } = root;
  // 左边深度
  const leftDepth = minDepth(left);
  // 右边深度
  const rightDepth = minDepth(right);

  // 如果没有 左叶, 则以 右叶 为准
  if (!left) return rightDepth + 1;
  // 如果没有 右叶, 则以 左叶 为准
  if (!right) return leftDepth + 1;
  // 返回 两边最浅
  return Math.min(left, right) + 1;
};