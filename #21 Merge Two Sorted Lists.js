/*j
 * Definition for singly-linked list.
 * function ListNode(val) {
 *j    this.val = val;
 *k    this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2, prev = { next: null }, head = null) {
  if (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      return mergeTwoLists(l1.next, l2, l1, head || l1);
    } else {
      prev.next = l2
      return mergeTwoLists(l1, l2.next, l2, head || l2);
    }
  } else {
    prev.next = l1 || l2;
    return head || prev.next;
  }
};
