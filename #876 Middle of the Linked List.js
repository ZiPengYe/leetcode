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
  const stack = [];
  for (let p = head; p; p = p.next) {
    stack.push(p);
  }
  return stack[Math.ceil(stack.length >>> 1)];
};