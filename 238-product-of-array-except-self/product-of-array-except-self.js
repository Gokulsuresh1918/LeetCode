/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1); // Initialize the answer array with 1s

    // Step 1: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct; // Store the left product
        leftProduct *= nums[i];  // Update the left product
    }

    // Step 2: Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) { // Traverse from the end to the start
        answer[i] *= rightProduct;     // Multiply with the right product
        rightProduct *= nums[i];       // Update the right product
    }

    return answer;
}