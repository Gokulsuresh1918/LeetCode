/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    
    // Edge cases
    if (totalOnes === 0 || totalOnes === n) return 0;
    
    let currentOnes = nums.slice(0, totalOnes).reduce((sum, num) => sum + num, 0);
    let maxOnes = currentOnes;
    
    // Use two pointers to slide the window
    for (let i = 0; i < n; i++) {
        currentOnes -= nums[i];
        currentOnes += nums[(i + totalOnes) % n];
        maxOnes = Math.max(maxOnes, currentOnes);
    }
    
    return totalOnes - maxOnes;
};