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
const maxPathSum = (root) => {
  let ans = root.val;
  const dfs = (node) => {
    if (!node) return 0;
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    ans = Math.max(left + right + node.val, ans);
    return Math.max(left, right) + node.val;
  };
  dfs(root);
  return ans;
};
