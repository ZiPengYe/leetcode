const Y = f => (x => x(x))(y => f(x => y(y)(x)));
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
const sumRootToLeaf = Y(f => (root, val = 0) => {
  if (!root) return 0;
  val = val * 2 + root.val;
  if (!(root.left || root.right)) return val;
  return sumRootToLeaf(root.left, val) + sumRootToLeaf(root.right, val);
});