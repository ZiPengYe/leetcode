/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let ans = root;
  while (true) {
    if (p.val > ans.val && q.val > ans.val) {
      ans = ans.right;
    } else if (p.val < ans.val && q.val < ans.val) {
      ans = ans.left;
    } else {
      break;
    }
  }
  return ans;
};
