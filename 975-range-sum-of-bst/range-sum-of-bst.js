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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum=0
    // Helper function to perform in-order traversal and calculate sum
    function traverse(node) {
        if (!node) return; // Base case: if node is null, return

        // Traverse the left subtree
        if (node.val > low) {
            traverse(node.left);
        }

        // Check if the current node's value is within the range
        if (node.val >= low && node.val <= high) {
           sum += node.val; // Add the node's value to the sum
        }

        // Traverse the right subtree
        if (node.val < high) {
            traverse(node.right);
        }
    }

    traverse(root); // Start the traversal from the root

    return sum; // Return the final sum
};