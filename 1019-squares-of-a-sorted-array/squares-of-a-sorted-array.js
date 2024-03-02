/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a, b) => a - b);
    return nums;
};

