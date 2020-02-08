/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 尾递归, 每次比较 当前指针 和 下一个指针 的值
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head, cur = head) {
  // 获取下一个指针
  const next = cur && cur.next;
  // 没有下一个指针则返回 指针链头
  if (!next) return head;
  // 如果值一样, 则跳过下一个节点, 继续
  if (cur.val === next.val) {
    cur.next = next.next;
    return deleteDuplicates(head, cur);
  }
  return deleteDuplicates(head, cur.next);
}
