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
var isPalindrome = function (head) {
    let a = []
    while (head) {
        a.push(head.val)
        head = head.next
    }
    let left = 0
    let right = a.length - 1
    while (left<right&&a[left] === a[right]) {
        left++
        right--
    }
    return left>=right
};