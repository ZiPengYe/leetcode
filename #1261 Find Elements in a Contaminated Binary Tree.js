/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const highestOneBit = i => {
  i |= i >> 1;
  i |= i >> 2;
  i |= i >> 4;
  i |= i >> 8;
  i |= i >> 16;
  return i - (i >>> 1);
}
/**
 * @param {TreeNode} root
 */
const FindElements = function (root, val = 0) {
  const node = new TreeNode(
    val,
    root.left ? FindElements(root.left, 2 * val + 1) : null,
    root.right ? FindElements(root.right, 2 * val + 2) : null,
  );
  if (val) {
    return node;
  } else {
    this.root = node
  }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  if (target < 0) return false;
  let node = this.root

  for (
    let bit = highestOneBit(++target) >> 1;
    bit > 0 && node !== null;
    bit >>= 1
  ) {
    node = (target & bit)
      ? node.right
      : node.left
  }
  return node !== null
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
