/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 深度优先搜索
 * @param {TreeNode} node
 */
const dfs = function(node) {
  // 递归结束
  if (!node) return 0;
  let left = 1 + dfs(node.left);
  let right = 1 + dfs(node.right);
  // 左右节点 深度差 > 1 则返回一个无穷标识
  if (Math.abs(left - right) > 1) return Infinity;
  // 返回该节点最大深度
  return Math.max(left, right);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  return dfs(root) === Infinity ? false : true;
};