var diameterOfBinaryTree = function(root) {
    let diameter = 0; // Initialize the diameter to 0
    
    // Helper function to calculate the height of a node
    const height = (node) => {
        if (node === null) {
            return 0; // Base case: height of an empty tree is 0
        }
        
        // Recursively calculate the height of the left and right subtrees
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        
        // Update the diameter if the current node's path is longer
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    // Start the DFS traversal
    height(root);
    
    return diameter; // Return the diameter
};