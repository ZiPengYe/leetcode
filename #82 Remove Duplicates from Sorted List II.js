/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  const dummy = {next:head};
  let p = dummy;
  while (p.next && p.next.next) {
    if (p.next.val === p.next.next.val) {
      const {val} = p.next;
      while (p.next && p.next.val === val) {
        p.next = p.next.next;
      }
    } else {
      p = p.next
    }
  }
  return dummy.next;
};
