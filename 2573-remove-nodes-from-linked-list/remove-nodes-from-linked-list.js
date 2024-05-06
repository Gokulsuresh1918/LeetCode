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
var removeNodes = function(head) {
    if (!head) {
        return null;
    }
    let node = head;
    let nxtGreater = removeNodes(node.next);

    node.next = nxtGreater;
    if (!nxtGreater || node.val >= nxtGreater.val) {
        return node;
    }
    return nxtGreater;
};