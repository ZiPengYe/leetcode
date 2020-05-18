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
  const oddEvenList = (head) => {
    let oddHead = oddTail = head;
    if (!oddHead) return head;
    let evenHead = evenTail = head.next;
    if (!evenHead) return head;
    head = evenHead.next;
    let i = 3;
    while (head) {
      if (i % 2) {
        oddTail = oddTail.next = head;
      } else {
        evenTail = evenTail.next = head;
      }
      ++i;
      head = head.next;
    }
    [oddTail.next, evenTail.next] = [evenHead, null];
    return oddHead;
  };