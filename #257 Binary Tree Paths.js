/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const helper = ({ val, left, right }, path, ans) => {
  if (!(left || right)) ans.push(path + val);
  if (left) helper(left, `${path}${val}->`, ans);
  if (right) helper(right, `${path}${val}->`, ans);
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const ans = [];
  if (root) helper(root, '', ans);
  return ans;
};