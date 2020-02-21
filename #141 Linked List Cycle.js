/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// TODO 待优化
const hasCycle = function(head, map = {}) {
  // 递归结束, 没有循环
  if (!head) return false;
  const { val, next } = head;
  if (!map[val]) map[val] = [];
  // 递归结束, 找到了之前出现过的节点
  if (map[val].indexOf(head) !== -1) return true;
  // 存储节点
  map[val].push(head);
  return hasCycle(next, map);
};
