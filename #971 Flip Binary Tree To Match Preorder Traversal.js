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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = (root, voyage) => {
  let flipped = [];
  let index = 0;

  const dfs = (node) => {
    if (!node) return;
    if (node.val !== voyage[index++]) {
      flipped = [-1];
      return;
    };

    if (
      index < voyage.length &&
      node.left &&
      node.left.val != voyage[index]
    ) {
      flipped.push(node.val);
      dfs(node.right);
      dfs(node.left);
    } else {
      dfs(node.left);
      dfs(node.right);
    }
  };

  dfs(root);
  return flipped[0] === -1 ? [-1] : flipped;
};