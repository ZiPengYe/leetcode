/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    [slow, fast] = [slow.next, fast.next.next];
  }
  return slow;
};