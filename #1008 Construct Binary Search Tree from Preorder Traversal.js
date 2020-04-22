/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder, bound = Infinity, o = {idx: 0}) => (
  (o.idx === preorder.length || preorder[o.idx] > bound)
    ? null
    : {
    val: preorder[o.idx],
    left: bstFromPreorder(preorder, preorder[o.idx++], o),
    right: bstFromPreorder(preorder, bound, o),
  }
);