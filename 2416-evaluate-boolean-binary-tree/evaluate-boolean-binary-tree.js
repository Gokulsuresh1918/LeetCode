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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function helper(node) {
        if (node.val === 0 || node.val === 1) {
            return node.val === 1;
        } else if (node.val === 2) {
            return helper(node.left) || helper(node.right);
        } else if (node.val === 3) {
            return helper(node.left) && helper(node.right);
        }
        return false;
    }
    
    return helper(root);
};