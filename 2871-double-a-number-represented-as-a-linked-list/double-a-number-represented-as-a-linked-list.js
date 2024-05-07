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

var doubleIt = function(head) {
    let curr = head;
    const stack = [];
    while (curr !== null) {
        stack.push(curr);
        curr = curr.next;
    }

    let nxt = null;
    let carry = 0;

    while (stack.length > 0) {
        curr = stack.pop();
        curr.next = nxt;
        nxt = curr;
        carry += curr.val * 2;
        curr.val = carry % 10;
        carry = Math.floor(carry / 10);
    }

    if (carry > 0) {
        curr = new ListNode(carry);
        curr.next = nxt;
    }

    return curr;
}