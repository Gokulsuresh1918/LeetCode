/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root: TreeNode | null): number {
    let ans = 0;
    
    const dfs = (node, path) => {
        if (!node) return;
        if (!node.left && !node.right) {
            ans += path * 10 + node.val;
            return;
        }
        dfs(node.left, path * 10 + node.val);
        dfs(node.right, path * 10 + node.val);
    };
    
    dfs(root, 0);
    return ans;
};