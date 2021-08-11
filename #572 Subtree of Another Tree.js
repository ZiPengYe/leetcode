/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSameTree = (s, t) => {
  if (s === t) return true;
  if (!s || !t) return false;
  return s.val === t.val &&
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  if (!root || !subRoot) return false;
  return isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot);
};
