/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();
    map.set(0, -1);
    let maxLength = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLength;
};