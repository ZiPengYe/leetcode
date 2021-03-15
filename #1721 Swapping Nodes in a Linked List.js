/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
  let n = p = q = head;
  for (let i = 1; n; n = n.next, i++) {
    if (i < k) {
      p = p.next;
    }
    if (i > k) {
      q = q.next;
    }
  }
  [p.val, q.val] = [q.val, p.val];
  return head;
};