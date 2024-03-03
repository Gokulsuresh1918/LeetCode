/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head == null) {
        return head;
    }
    let count: number = 1;
    let current: ListNode | null = head;
    while (current.next!= null) {
        count++;
        current = current.next;
    }
    let index: number = count - n;
    if (index === 0) {
        return head.next;
    }
    current = head;
    for (let i: number = 0; i < index - 1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return head;
}