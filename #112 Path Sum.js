/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if(root === null) return false;
  const { val, left, right } = root;
  // 累减
  const currVal = sum - val;
  // 如果是 叶节点
  if(left === null && right === null) return currVal === 0;
  return hasPathSum(left, currVal)
    || hasPathSum(right, currVal);
};