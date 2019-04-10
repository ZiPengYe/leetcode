/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2, carry = 0) {
  // 当前 位 的值 value1, value2, 及 下个节点 next1, next2
  let value1 = 0, value2 = 0, next1 = null, next2 = null;
  // 如果 当前节点存在
  if(l1) {
    value1 = l1.val;
    next1 = l1.next;
  }
  if(l2) {
    value2 = l2.val;
    next2 = l2.next;
  }
  // 如果 既没有节点, 也没有进位, 退出递归
  if(l1 === null && l2 === null && carry === 0) return null;
  // 当前 位 的值 的和
  let sum = value1 + value2 + carry;
  // 创建节点 存储 和
  const node = new ListNode(sum%10);
  // 递归 下个节点
  node.next = addTwoNumbers(next1, next2, sum >= 10 ? 1 : 0);
  // 返回当前节点
  return node;
};
