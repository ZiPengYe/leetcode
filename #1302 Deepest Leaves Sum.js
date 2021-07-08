/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = (root) => {
  let maxDep = -1, total = 0;
  const dfs = (node, dep) => {
    if (!node) return;
    if (dep > maxDep) {
      maxDep = dep;
      total = node.val;
    } else if (dep === maxDep) {
      total += node.val;
    }
    dfs(node.left, dep + 1);
    dfs(node.right, dep + 1);
  }
  dfs(root, 0);
  return total;
};