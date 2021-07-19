/**
 * 将 head 到 tail 范围的节点反转, 返回反转后的 head 和 tail (即原来的 tail 和 head )
 * @param {ListNode} node
 * @param {ListNode} tail
 * @return {ListNode[]}
 */
const reverse = (head, tail) => {
  let prev = tail.next,
    p = head;
  while (prev !== tail) {
    [p.next, prev, p] = [prev, p, p.next];
  }
  return [tail, head];
}
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
const reverseKGroup = (head, k) => {
  const dummy = {next: head}
  let prev = dummy;
  while (head) {
    // 双指针, tail 先行 k 步
    let tail = prev;
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) return dummy.next;
    }
    
    /**
     * 处理完反转后, head 就是片段的 tail, tail 就是片段的 head,
     * 1. 所以要将 head.next(反转后片段尾部的下个节点指针) 连接到当前的 tail.next(原来的尾部下个节点)
     * 3. 将 prev.next(原来头部的上个节点的下个节点指针) 连接到当前的 (反转后的 head 兼 反转前的 tail)
     * 2. 重置 head(变量指针) 指向 tail.next(原来的尾部下个节点)
     * 4. 重置 prev(变量指针) 指向 (反转后的 tail 兼 反转前的 head)
     * NOTE reverse 执行放后面, 因为 reverse 之后, 【tail.next(原来的尾部下个节点)】 就不再是原来的下个节点了.
     */
    [
      head.next,
      head,
      prev.next,
      prev
    ] = [
      tail.next,
      tail.next,
      ...reverse(head, tail),
    ];
  }
  return dummy.next;
};