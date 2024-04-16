/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d === 1) return new TreeNode(v, root, null)
    if (d === 2) {
        root.left = new TreeNode(v, root.left, null)
        root.right = new TreeNode(v, null, root.right)
    } else {
        if (root.left) addOneRow(root.left, v, d-1)
        if (root.right) addOneRow(root.right, v, d-1)
    }
    return root
};