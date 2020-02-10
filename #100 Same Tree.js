/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  // 转成 JSON 比较
  return JSON.stringify(p) === JSON.stringify(q);

  // 每个节点 递归 比较(吃内存多些...)
  // 其中一个节点为 null
  if (!(p && q)) {
    // 都为null
    if (p === q) return true;
    else return false;
  } else if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};