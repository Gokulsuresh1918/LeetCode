/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let un = 0
    for (let i = 0; i < nums.length; i++) {
        un = un ^ nums[i]
    }
    return un
};