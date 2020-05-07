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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  if (!root) return false;
  // 队列
  const queue = [root];
  while (queue.length) {
    const { length } = queue;
    const exists = Array(2).fill(false);
    // 每次遍历一层树
    for (let i = 0; i < length; i++) {
      const { val, left, right } = queue.shift();
      if (val === x) exists[0] = true;
      if (val === y) exists[1] = true;
      // 亲兄弟判断
      if (
        left && right
        && (
          (left.val === x && right.val === y)
          || (left.val === y && right.val === x)
        )
      ) return false;
      // 把子节点推进树
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    // 如果在同一层, 就没问题. 否则有内鬼!
    if (exists.every(Boolean)) return true;
    else if (exists.some(Boolean)) return false;
  }
  return false;
};