/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let result = []
     nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            result.push(nums[i])
        }
    }
    return result
};