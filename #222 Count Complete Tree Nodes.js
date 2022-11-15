/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
    level++;
    node = node.left;
  }
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while (low < high) {
    const pivot = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, pivot)) {
      low = pivot;
    } else {
      high = pivot - 1;
    }
  }
  return low;
};
