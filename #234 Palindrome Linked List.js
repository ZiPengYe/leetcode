/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let rev = null;
  let slow = fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    // 反转链 前半部分
    [rev, rev.next, slow] = [slow, rev, slow.next];
  }
  if (fast) slow = slow.next;
  while (rev && rev.val === slow.val) {
    slow = slow.next;
    rev = rev.next;
  }
  return !rev;
};