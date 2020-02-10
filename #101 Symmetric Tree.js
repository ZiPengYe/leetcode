/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // 处理　空节点
  if (!root) return true;
  // 获取 左右节点
  const { left, right } = root;
  // 左右节点其中一个为空
  if (!(left && right)) {
    // 都为空
    if (left === right) return true;
    else return false;
  } else if (left.val !== right.val) return false;
  // 递归, 对称判断
  return isSymmetric({
    left: left.left,
    right: right.right,
  }) && isSymmetric({
    left: left.right,
    right: right.left,
  });
};