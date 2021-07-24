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
 * @return {TreeNode}
 */
const pruneTree = (root) => {

  /**
   * 深度遍历, 如果自己是 1 或 子节点有 1 则返回 true , 否则返回 false
   * @param {TreeNode} node
   * @return {boolean} containsOne
   */
  const dfs = (node) => {
    if (node === null) return false;
    const leftContainsOne = dfs(node.left);
    const rightContainsOne = dfs(node.right);
    // 左右节点 的 子节点不含1则设为 null
    if (!leftContainsOne) node.left = null;
    if (!rightContainsOne) node.right = null;
    return node.val === 1 || leftContainsOne || rightContainsOne;
  };

  return dfs(root) ? root : null;
};
