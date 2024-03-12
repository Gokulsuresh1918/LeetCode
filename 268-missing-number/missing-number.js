/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let total = 0
    for (let i = 0; i <= nums.length; i++) {
        total = total + i
    }

    return total - sum
};